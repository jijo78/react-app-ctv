import React from 'react';
import { shallow } from 'enzyme';
import SelectChannel from '../SelectChannel';
import '../../setupTests';

let wrapper;
let onChangeMock;
let props;

describe('<SelectChannel />', () => {
  beforeEach(() => {
    onChangeMock = jest.fn();
    props = {
      onChange: onChangeMock
    };
    wrapper = shallow(<SelectChannel {...props} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('does render the component', () => {
    expect(wrapper.find('#channels__select-control').length).toEqual(1);
  });

  it('does call the onChange function when triggering change event', () => {
    wrapper.find('#channels__select-control').simulate('change', onChangeMock);
  });

  it('does render the correct number of channels options', () => {
    expect(wrapper.find('#channels__select-control option').length).toEqual(6);
  });

  it('does render the correct channel name', () => {
    expect(
      wrapper
        .find('#channels__select-control option')
        .first()
        .props().value
    ).toEqual('itv');
  });
});
