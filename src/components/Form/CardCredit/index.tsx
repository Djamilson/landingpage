import React, { useCallback, useRef, useState, ChangeEvent } from 'react';
import { FaBarcode, FaUser } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import { MdCheck } from 'react-icons/md';


import PaymentCard from 'react-payment-card-component';

import { FormHandles } from '@unform/core';
import pagarme from 'pagarme';
import * as Yup from 'yup';

import { getCardType, onlyNumbers } from '../../../utils';

import { ScheduleItem } from '../Info/Address/styles';

import {
  schemaValidationCardDate,
  schemaValidationCardNumber,
  schemaValidationCardInstallment,
} from '../../../utils/schema';

import Select from './Select';
import {
  ButtonsContainer,
  ButtonCreditCard,
  ButtonAnother,
  Content,
  ScheduleItemCard,
  ButtonBoleto,
} from './styles';
import Button from '../../Button';
import { useToast } from '../../../hooks/toast';
import { useLoading } from '../../../hooks/loading';
import { formatPrice } from '../../../utils';
import getValidationErrors from '../../../utils/getValidationErros';

interface ParamTypes {
  courseId: string;
}

import * as masks from '../../../utils/masks';
import Input from '../../CAD/Input';

interface IFormData {
  card_holder_name: string;
  card_number: string;
  card_expiration_date: string;
  card_cvv: string;
  course_id: string;
  course_price: string;
  installment: string;
}

const InitPayment: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const { addLoading, removeLoading } = useLoading();

  const [paymentForm, setPaymentForm] = useState<number>(0);

  const handlePaymentFormCreditCart = useCallback(() => {
    setPaymentForm(0);
  }, [setPaymentForm]);

  const handlePaymentFormBoleto = useCallback(() => {
    setPaymentForm(1);
  }, [setPaymentForm]);

  const handlePaymentFormAnother = useCallback(() => {
    setPaymentForm(2);
  }, [setPaymentForm]);

  const [renderInstallments, setRenderInstallments] = useState([
    { label: '', value: '' },
  ]);

  const [installments, setInstallments] = useState(0);

  const loadInstallment = useCallback(() => {
    setRenderInstallments(
      [...new Array(4)].map((_, idx) => {
        const installment = idx + 1;
        return {
          label: `${installment} x  ${formatPrice(
            Number(123.49) / installment,
          )}`,
          value: `${installment}`,
        };
      }),
    );
  }, [setRenderInstallments]);

  const handleSubmitCard = useCallback(
    async (data_: IFormData) => {
      try {
        formRef.current?.setErrors({});

        addLoading({
          loading: true,
          description: 'Aguarde ...',
        });

        const schema = Yup.object().shape({
          card_holder_name: Yup.string().required('Nome obrigatório'),
          card_number: schemaValidationCardNumber,
          card_expiration_date: schemaValidationCardDate,
          card_cvv: Yup.string().required(
            'Código de segurança do cartão obrigatório',
          ),
          installment: schemaValidationCardInstallment(installments),
        });

        await schema.validate(data_, {
          abortEarly: false,
        });

        const month = data_.card_expiration_date.slice(0, -5);
        const year = data_.card_expiration_date.substr(-2);

        const card_number = data_.card_number.replace(/([^0-9])/g, '');
        const card_expiration_date = `${month}${year}`;
        const newData = { ...data_, card_number, card_expiration_date };

        const client_retur = await pagarme.client
          .connect({
            encryption_key: process.env.REACT_APP_PAGARME_ENCRYPTION_KEY,
          })
          .then((client_: any) => {
            return client_;
          });

        const card_hash = await client_retur.security.encrypt(newData);

        const amount = Number(1002) * 100;
        const fee = 0;
        /*
        await api.post('orders/payments/card/new', {
          card_hash,
          fee,
          installments,
          courses: [{ id: courseId }],
          amount,
        });

        history.push('/payments/dashboard/init-payment/finally/successes');
*/
        addToast({
          type: 'success',
          title: 'Pagamento efetuado!',
          description: 'Pagamento efetuado com sucesso!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Falha no pagamento!',
          description:
            'Ocorreu uma falha ao tentar fazer o pagamento, tente novamente!',
        });
      } finally {
        removeLoading();
      }
    },
    [addToast, addLoading, removeLoading, formRef, history, installments],
  );

  const handleSubmitBoleto = useCallback(async () => {
    try {
      addLoading({
        loading: true,
        description: 'Aguarde ...',
      });

      const amount = Number(9823) * 100;
      const fee = 0;
      /*
      const { data } = await api.post('orders/payments/boleto/new', {
        fee,
        installments: 1,
        courses: [{ id: 878 }],
        amount,
      });*/
      /*

      if (typeof window !== "undefined") {
        window.open(
        `https://api.pagar.me/${data.boleto_url}?format=pdf`,
        '_blank',
      );}
*/

      addToast({
        type: 'success',
        title: 'Pagamento efetuado!',
        description: 'Pagamento efetuado com sucesso!',
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Falha no pagamento!',
        description:
          'Ocorreu uma falha ao tentar fazer o pagamento, tente novamente!',
      });
    } finally {
      removeLoading();
    }
  }, [addToast, addLoading, removeLoading, history]);

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      if (Object.keys(data).length > 0) {
        handleSubmitCard(data);
      } else {
        handleSubmitBoleto();
      }
    },
    [handleSubmitBoleto, handleSubmitCard],
  );

  function handleSelectInstallments(event: ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;

    setInstallments(Number(value));
  }

  const [nameCart, setNameCart] = useState('');
  const [numberCart, setNumberCart] = useState('');
  const [expirationCart, setExpirationCart] = useState('');
  const [cvvCart, setCvvCart] = useState('');
  const [cardType, setCardType] = useState<string | undefined>('');
  const [flipped, setFlipped] = useState<boolean>(false);

  const handleInputChangeNumber = useCallback(
    (e: any) => {
      setNumberCart(e.target.value);
      masks.cardNumberByMask.onChange(e);
      setCardType(getCardType(onlyNumbers(e.target.value)));
      setFlipped(false);
    },

    [setNumberCart, setCardType, setFlipped],
  );

  const handleInputChangeName = useCallback(
    (e: any) => {
      setNameCart(e.target.value);
      masks.lettlerByMask.onChange(e);
      setFlipped(false);
    },
    [setNameCart, setFlipped],
  );

  const handleInputChangeExpiration = useCallback(
    (e: any) => {
      setExpirationCart(e.target.value);
      masks.cardDateMask.onChange(e);
      setFlipped(false);
    },
    [setExpirationCart, setFlipped],
  );

  const handleInputChangeCvv = useCallback(
    (e: any) => {
      setCvvCart(e.target.value);
      masks.cardCVVByMask.onChange(e);
      setFlipped(true);
    },
    [setCvvCart, setFlipped],
  );

  return (
    <>
      <fieldset>
        <legend>Formas de Pagamento</legend>

        <ButtonsContainer>
          {paymentForm !== 0 && (
            <ButtonCreditCard
              type="button"
              onClick={() => handlePaymentFormCreditCart()}
            >
              Cartão de Crédito
            </ButtonCreditCard>
          )}
          {paymentForm !== 1 && (
            <ButtonBoleto
              type="button"
              onClick={() => handlePaymentFormBoleto()}
            >
              Boleto bancário
            </ButtonBoleto>
          )}
          {paymentForm !== 2 && (
            <ButtonAnother
              type="button"
              onClick={() => handlePaymentFormAnother()}
            >
              Transferência
            </ButtonAnother>
          )}
        </ButtonsContainer>
      </fieldset>

      {paymentForm === 0 && (
        <>
          <fieldset>
            <legend>Selecionado [Cartão de Crédito] </legend>

            <Select
              name="installment"
              label="Número de parcelas"
              id="idInstallment"
              onChange={handleSelectInstallments}
              options={renderInstallments}
            />

            <ScheduleItem>
              <fieldset>
                <Input
                  placeholder="Nome como está no cartão"
                  name="card_holder_name"
                  icon={FaUser}
                  label="Nome"
                  onChange={handleInputChangeName}
                />
                <Input
                  icon={MdCheck}
                  placeholder="Número do cartão"
                  name="card_number"
                  label="Número do cartão"
                  onChange={handleInputChangeNumber}
                />

                <Input
                  id="idCardExpirationDate"
                  name="card_expiration_date"
                  label="Data de expiração"
                  icon={MdCheck}
                  placeholder="Ex: mm/yyyy"
                  onChange={handleInputChangeExpiration}
                />
                <Input
                  id="idCardCvv"
                  name="card_cvv"
                  label="Código de segurança"
                  placeholder="Ex: 000"
                  onChange={handleInputChangeCvv}
                />
              </fieldset>
              <fieldset>
                <ScheduleItemCard>
                  <PaymentCard
                    style={{ widt: '100px' }}
                    bank="default"
                    model="normal"
                    type="nomal"
                    brand={cardType}
                    number={numberCart}
                    cvv={cvvCart}
                    holderName={nameCart}
                    expiration={expirationCart}
                    flipped={flipped}
                  />
                </ScheduleItemCard>
              </fieldset>
            </ScheduleItem>

            <Button type="submit">
              <span>
                <FiCheck />
              </span>
              <strong>Fazer pagamento</strong>
            </Button>
          </fieldset>
        </>
      )}

      {paymentForm === 1 && (
        <fieldset>
          <legend>Selecionado [Boleto]</legend>

          <Button type="submit">
            <span>
              <FaBarcode />
            </span>
            <strong>Gerar boleto</strong>
          </Button>
        </fieldset>
      )}

      {paymentForm === 2 && (
        <Content>
          <fieldset>
            <legend>Selecionado [Transferência]</legend>

            <div>
              <h3>Dados para transferência.</h3>

              <span>
                <h2>Banco:</h2>
                <strong>Brasil</strong>
              </span>

              <span>
                <h2>Agência:</h2>
                <strong>1867-8</strong>
              </span>

              <span>
                <h2> Conta/Corrente:</h2>
                <strong>51.105-6</strong>
              </span>

              <span>
                <h2>Em nome de: </h2>
                <strong>Djamilson Alves da Costa</strong>
              </span>

              <span>
                <h2>Pix: </h2>
                <strong>3f7db044-2c94-42bc-b83b-fabd6b019f3c</strong>
              </span>
            </div>
          </fieldset>
        </Content>
      )}
    </>
  );
};

export default InitPayment;
