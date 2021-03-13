import * as React from "react";
import { Admin, Resource } from 'react-admin';

import { PromotionList } from './components/Promotions/PromotionList';
import { CampiCreate } from './components/Promotions/PromotionCreate';

import apiProvider from './services/api-service';

function App() {
  return (
    <Admin dataProvider={apiProvider}>
      <Resource
        name='promotions'
        list={PromotionList}
        create={CampiCreate}
        options={{label: 'Promoções'}}
      />
      <Resource name='promo-codes'/>
      <Resource name='products'/>
    </Admin>
  );
}

export default App;
