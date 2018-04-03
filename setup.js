import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import register from '@babel/register';

register({ extensions: ['.ts', '.js', '.tsx', '.jsx']});
configure({ adapter: new Adapter() });