import React from 'react';
import { List, Datagrid, TextField, ShowButton, DeleteButton } from 'react-admin';

export function PromotionList(props) {
  return (
    <List {...props} title='Promoção'>
      <Datagrid>
        <TextField source='title' label='Título'/>
        <TextField source='description' label='Descrição'/>
        <TextField source='startDate' label='Data de início'/>
        <TextField source='finishDate' label='Data de término'/>
        <TextField source='type' label='Tipo'/>
        <ShowButton/>
        <DeleteButton/>
      </Datagrid>
    </List>
  );
}