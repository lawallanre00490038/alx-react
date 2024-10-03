import {shallow} from 'enzyme';
import App from './App';
import Login from './Login/Login';
import Header from './Header/Header';
import Footer from './Footer/Footer';

describe('<App />', () => {
  it("contain the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Notifications />)).toBe(true);
  })
  it("contain the Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toBe(true);
  })
  it("contain the Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toBe(true);
  })
  it("contain the Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).toBe(true);
  })
})
