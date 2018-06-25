import { camelCase } from 'lodash';
import rootSet from '../redux/rootSet';

const { actions, types } = rootSet;

describe('actions and types', () => {
  for (let type in types) {
    it(`${type} should have matching action creator`, () => {
      const action = actions[camelCase(type)];

      if ('payload' in action()) {
        const payload = [{ foo: 'bar' }];
        expect(action(payload)).toEqual({ type, payload });
      } else {
        expect(action()).toEqual({ type });
      }
    });
  }
});
