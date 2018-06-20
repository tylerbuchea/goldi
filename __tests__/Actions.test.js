import React from 'react';
import rootSet from '../src/redux/rootSet';
import { camelCase } from 'lodash';

const { actions, types } = rootSet;

describe('actions', () => {
  Object.keys(types).forEach(type => {
    it(`should use correct type ${type}`, () => {
      const action = actions[camelCase(type)];
      const actionVerb = type.split('_')[0];
      const isActionWithPayload = ['SET', 'ADD', 'UPDATE'].find(
        prefix => actionVerb === prefix
      );

      if (isActionWithPayload) {
        const payload = [{ foo: 'bar' }];
        expect(action(payload)).toEqual({ type, payload });
      } else {
        expect(action()).toEqual({ type });
      }
    });
  });
});
