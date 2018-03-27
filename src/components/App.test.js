import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';
import Empty from './Empty';
import ListViewer from './ListViewer';

describe('App', () => {
  it('renders', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance).to.be.instanceOf(App);
  });
  
  it('shows a Empty component', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ show: false });

    expect(wrapper.find(Empty)).to.be.length(1);
  });

  it('shows a ListViewer component', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ show: true });

    expect(wrapper.find(ListViewer)).to.be.length(1);
  });
});