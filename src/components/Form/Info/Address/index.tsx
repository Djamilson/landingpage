import axios from 'axios';
import React, { useEffect, useState, ChangeEvent } from 'react';
import { MdCheck } from 'react-icons/md';

import Input from '../../../../components/CAD/Input';
import * as masks from '../../../../utils/masks';
import { AddressItem, InputNumber, ScheduleItem } from './styles';

interface IDataOption {
  value: string;
  label: string;
}

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

interface Props {
  /*
  handleSelectCity: (citySelected: any) => void;
  handleSelectState: (citySelected: any) => void;
  citySelect: IDataOption;
  edit: boolean;
  stateSelectOption: IDataOption;*/
}

const Address: React.FC = ({}) => {
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
      )
      .then((response) => {
        const ufInitials = response.data.map((uf) => uf.sigla);

        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }

    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`,
      )
      .then((response) => {
        const cityNames = response.data.map((city) => city.nome);

        setCities(cityNames);
      });
  }, [selectedUf]);

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;

    setSelectedUf(uf);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;

    setSelectedCity(city);
  }

  return (
    <>
      <fieldset>
        <legend>Seu endereço</legend>
        <AddressItem>
          <Input
            placeholder="Rua/quadra"
            name="street"
            icon={MdCheck}
            label="Rua/quadra"
          />

          <InputNumber
            id="idNumber"
            name="number"
            icon={MdCheck}
            placeholder="Número"
            label="Número Lote/Casa"
            onChange={masks.numberByMask.onChange}
          />
        </AddressItem>
        <Input
          placeholder="Complemento"
          name="complement"
          icon={MdCheck}
          label="Complemento"
        />
        <ScheduleItem>
          <Input
            placeholder="Bairro"
            name="neighborhood"
            icon={MdCheck}
            label="Bairro"
          />

          <Input
            id="zip_code"
            name="zip_code"
            icon={MdCheck}
            label="CEP"
            placeholder="Ex: 00.000-000"
            onChange={masks.cepByMask.onChange}
          />
        </ScheduleItem>
      </fieldset>

      <fieldset>
        <legend>Localidade</legend>
        <ScheduleItem>
          <div className="field">
            <label htmlFor="uf">Estado (UF)</label>
            <select
              name="uf"
              id="uf"
              value={selectedUf}
              onChange={handleSelectUf}
            >
              <option value="0">Selecione uma UF</option>
              {ufs.map((uf) => (
                <option key={uf} value={uf}>
                  {uf}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="city">Cidade</label>
            <select
              name="city"
              id="city"
              value={selectedCity}
              onChange={handleSelectCity}
            >
              <option value="0">Selecione uma cidade</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </ScheduleItem>
      </fieldset>
    </>
  );
};

export default Address;
