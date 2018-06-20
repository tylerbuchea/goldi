import { isArray, isObject, isString, concat, merge } from 'lodash';
import rootSet from '../src/redux/rootSet';

const { types, reducers } = rootSet;

describe('ADD and SET reducers', () => {
  Object.keys(types)
    .filter(type => {
      const [action, name] = type.split('_');
      return ['SET', 'ADD'].includes(action);
    })
    .forEach(type => {
      it(`${type} was properly executed`, () => {
        const [action, name] = type.split('_');
        const key = name.toLowerCase();
        const state = reducers({}, {})[key];

        // console.log(type);

        let payload;
        let received;
        if (isArray(state)) {
          payload = [{ foo: 'bar' }];
          received = reducers({}, { type, payload })[key];
          expect(received).toEqual(payload);
        } else if (isObject(state)) {
          payload = { foo: 'bar' };
          received = reducers({}, { type, payload })[key];
          expect(received).toEqual(payload);
        } else if (isString(state)) {
          payload = 'bar';
          received = reducers({}, { type, payload })[key];
          expect(received).toEqual(payload);
        }
      });
    });
});

describe('CLEAR reducers', () => {
  Object.keys(types)
    .filter(type => {
      const [action, name] = type.split('_');
      return ['CLEAR'].includes(action);
    })
    .forEach(type => {
      it(`${type} was properly executed`, () => {
        const [action, name] = type.split('_');
        const key = name.toLowerCase();
        const state = reducers({}, {})[key];
        const received = reducers({}, { type })[key];
        expect(received).toEqual(state);
      });
    });
});
