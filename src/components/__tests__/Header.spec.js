import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';
import '../../setupTests';

let wrapper;
describe('<Header />', () => {
  beforeEach(() => {
    wrapper = shallow(<Header channels={'itv'} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('does not renders the component if not channels prop', () => {
    wrapper = shallow(<Header />);
    expect(wrapper.find('.channels__header').length).toEqual(0);
  });

  it('does render the component if channels prop', () => {
    expect(wrapper.find('.channels__header').length).toEqual(1);
  });

  it('does upper case the channel name', () => {
    expect(wrapper.find('.channels__header-name').text()).toEqual('ITV');
  });
});
