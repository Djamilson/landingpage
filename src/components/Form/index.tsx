import React, { useCallback, useRef } from 'react';

import { Container, Form } from './styles';
import Address from './Info/Address';
import { useLoading } from '../../hooks/loading';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErros';
import * as Yup from 'yup';
import CardCredit from './CardCredit';
import { FormHandles } from '@unform/core';
import {
  schemaValidationCep,
  schemaValidationNumber,
} from '../../utils/schema';
import Documents from './Info/Documents';
import Phone from './Info/Phone';
interface SignUpFormData {
  number: string;
  street: string;
  complement?: string;
  neighborhood: string;
  zip_code: string;
  city: string;
  state: string;
}

const FormData: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { addLoading, removeLoading } = useLoading();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        addLoading({
          loading: true,
          description: 'Aguarde ...',
        });

        const schemaAddress = Yup.object().shape({
          number: schemaValidationNumber,
          street: Yup.string().required('Quadra/Rua obrigatório'),
          complement: Yup.string(),
          neighborhood: Yup.string().required('Bairro obrigatório'),
          zip_code: schemaValidationCep /*
          state: schemaValidationState(stateSelect.value),
          city: schemaValidationCity(citySelect.value),*/,
        });

        await schemaAddress.validate(data, {
          abortEarly: false,
        });

        addToast({
          type: 'success',
          title: 'Cadastrada!',
          description: 'Dados cadastrado com sucesso!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Falha no cadastro!',
          description:
            'Ocorreu uma falha ao tentar fazer o cadastro, tente novamente!',
        });
      } finally {
        removeLoading();
      }
    },
    [addToast, addLoading, removeLoading],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Documents />
        <Address />
        <Phone />
        <CardCredit />
      </Form>
    </Container>
  );
};

export default FormData;
