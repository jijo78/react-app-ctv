import React from 'react';
import { shallow } from 'enzyme';
import ErrorHandler from '../ErrorHandler';
import '../../setupTests';

let wrapper;
describe('<ErrorHandler />', () => {
  beforeEach(() => {
    wrapper = shallow(<ErrorHandler error={true} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('does not renders any error if error prop is false', () => {
    wrapper = shallow(<ErrorHandler error={false} />);
    expect(wrapper.find('.error').length).toEqual(0);
  });

  it('does renders error if error prop is true', () => {
    expect(wrapper.find('.error').length).toEqual(1);
  });

  it('does renders the error meesage', () => {
    expect(wrapper.find('.error').text()).toEqual('There was a problem handling your request.');
  });
});
