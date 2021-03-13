import React from 'react';
import { Create, SimpleForm, TextInput, SelectInput, DateInput, ArrayInput, SimpleFormIterator, NumberInput, ReferenceArrayInput, SelectArrayInput } from 'react-admin';

export function CampiCreate(props) {
  return (
    <Create {...props} title='Nova Promoção'>
      <SimpleForm>
        <TextInput source='title' label='Título' fullWidth={true}/>
        <TextInput source='description' label='Descrição' fullWidth={true}/>
        <DateInput source='startDate' label='Data de início'/>
        <DateInput source='finishDate' label='Data de término'/>
        <SelectInput source='type' label='Tipo' choices={[{ id: 'PROMO_CODE', name: 'Cupom' }, { id: 'DISCOUNT', name: 'Desconto' }]}/>
        <ReferenceArrayInput source='promoCodes' reference='promo-codes'>
          <SelectArrayInput optionText='code' label='Cupons'/>
        </ReferenceArrayInput>
        <ArrayInput source='discounts' label='Descontos'>
          <SimpleFormIterator>
            <NumberInput source='value' label='Valor'/>
            <SelectInput source='type' label='Tipo' choices={[{ id: 'PERCENTAGE', name: 'Porcentagem' }, { id: 'MONEY', name: 'Dinheiro' }]}/>
            <ArrayInput source='products' label=''>
              <ReferenceArrayInput source='products' reference='products' label='Produtos'>
                <SelectArrayInput optionText='name' label='Produtos'/>
              </ReferenceArrayInput>
            </ArrayInput>
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
}