import React from 'react';
import { mount } from 'enzyme';

jest.mock('axios', () => ({
  get: () => ({
    then: jest.fn(() => ({
      catch: () => ({})
    }))
  })
}));
import axios from 'axios';

import App from '../App';
import '../setupTests';
import programmes from './fixtures/programmes.json';

let wrapper;

describe('<App />', () => {
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe('<App />', () => {
    it('renders the App component', () => {
      expect(wrapper.length).toEqual(1);
    });

    describe('When firing change event', () => {
      it('should set the channels state to channel value', () => {
        const eventObj = { target: { value: 'itv2' } };
        wrapper.find('#channels__select-control').simulate('change', eventObj);
        wrapper.update();
        expect(wrapper.state().channels).toEqual('itv2');
      });

      it('should call fetchProgrammes on setState callback', done => {
        const eventObj = { target: { value: 'itv2' } };
        const fetchProgrammesMock = jest.fn();
        wrapper.instance().handleChange(eventObj);
        wrapper.setState({}, () => {
          fetchProgrammesMock();
          done();
        });
        expect(fetchProgrammesMock).toHaveBeenCalled();
      });
    });
  });
});
