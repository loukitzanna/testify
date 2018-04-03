import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Empty from './Empty';
import ListViewer from './ListViewer';

test('renders', (t) => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();

  t.true(instance instanceof App);
});

test('shows a Empty component', (t) => {
  const wrapper = shallow(<App />);
  wrapper.setState({ show: false });

  t.is(wrapper.find(Empty).length, 1);
});

test('shows a ListViewer component', (t) => {
  const wrapper = shallow(<App />);
  wrapper.setState({ show: true });

  t.is(wrapper.find(ListViewer).length, 1);
});
