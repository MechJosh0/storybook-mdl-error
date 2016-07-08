/**
 * Created by josh.welham on 08/07/16.
 */

import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Table from '../table';

storiesOf('table.Table', module)
  .add('React-MDL DataTable', () => {
    return (
      <Table />
    );
  })
;
