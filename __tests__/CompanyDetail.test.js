import React from 'react';
import renderer from 'react-test-renderer';
import TestComponent from '../src/components/CompanyDetail';

test('renders correctly', () => {
  const rendered = renderer.create(<TestComponent />).toJSON();
  expect(rendered).toBeTruthy();
});
