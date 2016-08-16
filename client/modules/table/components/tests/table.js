/**
 * Created by josh.welham on 16/08/16.
 */

const {describe, it} = global;
import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import Table from './../table';

describe('table.components.table', () => {
  it('Display table content', () => {
    const el = mount(
      <Table />
    );

    expect(el.find('Table').length).to.equal(2);
  });
});
