import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';
import Empty from '../../src/components/Empty';
import ListViewer from '../../src/components/ListViewer';

describe('App', () => {
  it('renders', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance instanceof App).toBeTruthy();
  });

  it('shows a Empty component', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ show: false });

    expect(wrapper.find(Empty).length).toBe(1);
  });

  it('shows a ListViewer component', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ show: true });

    expect(wrapper.find(ListViewer).length).toBe(1);
  });
});