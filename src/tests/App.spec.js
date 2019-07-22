import React from 'react';
import { mount } from 'enzyme';
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

  describe('<App /> Click', () => {
    describe('When clicking handle change', () => {
      it('', () => {
        const handleChangeMock = jest.fn();
        const programme = programmes._embedded.programmes;

        wrapper.setState({ categories: [] });

        wrapper.find('#channels__select-control').simulate('change', handleChangeMock);
        wrapper.update();

        expect(wrapper.state().categories).toEqual(programme);
      });
    });
    // describe('#1581', () => {
    //   it('should works fine', done => {
    //     const programme = programmes._embedded.programmes;

    //     const mockedCallback = () => Promise.resolve({ data: programme });
    //     const fetchProgrammes = () => {
    //       return Promise.resolve().then(mockedCallback);
    //     };

    //     //const wrapper = mount(<App fetchProgrammes={fetchProgrammes} />);
    //     expect(wrapper.state().categories).toEqual([]);
    //     setTimeout(
    //       Promise.resolve().then(() => {
    //         wrapper.update();
    //         expect(wrapper.state().categories).toEqual([]);
    //       }),
    //       100,
    //       done()
    //     );
    //   });
    // });
  });
});
