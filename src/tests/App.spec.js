import React from 'react';
import { mount, shallow } from 'enzyme';
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

  it('renders the App component', () => {
    expect(wrapper.length).toEqual(1);
  });
  describe('<App /> state', () => {
    describe('When firing change event', () => {
      const fetchProgrammes = () => {
        console.log('---------promise');
        return Promise.resolve({ categories: programmes._embedded.programmes });
      };
      it('should set state on mount', done => {
        //const wrapper = shallow(<App />);

        return fetchProgrammes().then(() => {
          //console.log('---------promise');
          wrapper.update();
          expect(wrapper.state('categories')).toEqual(programmes._embedded.programmes);
          done();
        });
        expect(wrapper.state().categories).toEqual(programmes._embedded.programmes);
      });
      it('should set the channels state to channel value', () => {
        const eventObj = { target: { value: 'itv2' } };

        wrapper.find('#channels__select-control').simulate('change', eventObj);
        wrapper.update();

        expect(wrapper.state().channels).toEqual('itv2');
      });
    });
  });
});
