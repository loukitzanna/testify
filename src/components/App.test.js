import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Empty from './Empty';
import ListViewer from './ListViewer';

test('renders', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();

  expect(instance).toBeInstanceOf(App);
});

test('shows a Empty component', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ show: false });

  expect(wrapper.find(Empty)).toHaveLength(1);
});

test('shows a ListViewer component', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ show: true });

  expect(wrapper.find(ListViewer)).toHaveLength(1);
});
