import React from 'react';
import { MdCheck } from 'react-icons/md';

import Input from '../../../../components/CAD/Input';
import * as masks from '../../../../utils/masks';
import { ScheduleItem } from '../Address/styles';

const Documents: React.FC = () => {
  return (
    <fieldset>
      <legend>Dados</legend>
      <ScheduleItem>
        <Input
          id="idCpf"
          name="cpf"
          icon={MdCheck}
          label="CPF"
          placeholder="CPF"
          onChange={masks.cpfByMask.onChange}
        />
        <Input
          id="birdthDate"
          name="birdthDate"
          icon={MdCheck}
          label="Data de Nascimento"
          placeholder="Ex: dd/mm/yyyy"
          onChange={masks.dateMask.onChange}
        />
      </ScheduleItem>
      <ScheduleItem>
        <Input
          placeholder="RG"
          name="rg"
          icon={MdCheck}
          label="RG"
          onChange={masks.numberByMask.onChange}
        />
        <Input
          placeholder="Órgão Expedidor RG"
          name="rgss"
          icon={MdCheck}
          label="Órgão expedidor RG"
          onChange={masks.lettlerByMask.onChange}
        />
      </ScheduleItem>
    </fieldset>
  );
};

export default Documents;
