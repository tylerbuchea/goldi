import React from 'react';
import renderer from 'react-test-renderer';
import TestComponent from '../src/components/CompanyList';

test('renders correctly', () => {
  const rendered = renderer.create(<TestComponent />).toJSON();
  expect(rendered).toBeTruthy();
});
