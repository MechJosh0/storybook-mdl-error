/**
 * Created by josh.welham on 08/07/16.
 */

import React from 'react';
import {DataTable, TableHeader} from 'react-mdl';
import Helmet from 'react-helmet';

const rows = [
  {material: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
  {material: 'Plywood (Birch)', quantity: 50, price: 1.25},
  {material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35}
];

const Table = () => (
  <div>
    1
    <Helmet
      link={[
        {rel: 'stylesheet', href: '/lib/getmdl/material.min.css'},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]}
      script={[
        {src: '/lib/getmdl/material.min.js', type: 'text/javascript'}
      ]}
    />
    <DataTable shadow={0} rows={rows}>
      <TableHeader name="material" tooltip="The amazing material name">Material</TableHeader>
      <TableHeader numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
      <TableHeader numeric name="price" cellFormatter={(price) => `\$${price.toFixed(2)}`} tooltip="Price pet unit">Price</TableHeader>
    </DataTable>
  </div>
);

export default Table;
