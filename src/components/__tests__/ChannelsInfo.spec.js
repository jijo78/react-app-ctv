import React from 'react';
import { shallow } from 'enzyme';
import ChannelsInfo from '../ChannelsInfo';
import programmes from '../../tests/fixtures/programmes.json';
import '../../setupTests';

let wrapper;
describe('<ChannelsInfo />', () => {
  beforeEach(() => {
    wrapper = shallow(<ChannelsInfo categories={programmes._embedded.programmes} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('does not renders any list item if not data are passed', () => {
    wrapper = shallow(<ChannelsInfo />);
    expect(wrapper.find('.channels__selection-info-wrapper').length).toEqual(0);
  });

  it('does renders any list item if data are passed', () => {
    expect(wrapper.find('.channels__selection-info-wrapper').length).toEqual(5);
  });

  describe('<ChannelsInfo /> component', () => {
    it('correctly render the programme name', () => {
      expect(
        wrapper
          .find('.channels__selection-info-title')
          .first()
          .text()
      ).toEqual("Who's Doing the Dishes");
    });

    it('correctly renders the programme synopses', () => {
      expect(wrapper.find('.channels__selection-info-synopses').length).toEqual(5);
    });

    it('correctly renders the programme duration', () => {
      expect(wrapper.find('.channels__selection-info-duration').length).toEqual(5);
    });

    it('correctly renders the programme category', () => {
      expect(wrapper.find('.channels__selection-info-category').length).toEqual(5);
    });

    it('correctly exact number of category name if more than one it is present', () => {
      expect(
        wrapper
          .find('.channels__selection-info-category')
          .at(1)
          .find('.channels__selection-info-category-name').length
      ).toEqual(2);
    });

    it('renders the programme brodcast day information', () => {
      expect(wrapper.find('.channels__selection-info-brodcast-day').length).toEqual(5);
    });

    it('format the programme brodcast day information correctly', () => {
      expect(
        wrapper
          .find('.channels__selection-info-brodcast-day')
          .first()
          .find('span')
          .text()
          .trim()
      ).toEqual('05/2/2018');
    });

    it('renders the programme brodcast time information', () => {
      expect(wrapper.find('.channels__selection-info-brodcast-time').length).toEqual(5);
    });

    it('format the programme brodcast time information correctly', () => {
      expect(
        wrapper
          .find('.channels__selection-info-brodcast-time')
          .first()
          .find('span')

          .text()
      ).toEqual('10:10 AM');
    });

    it('renders the programme episodes information if available', () => {
      expect(wrapper.find('.channels__selection-info-episodes').length).toEqual(5);
    });

    it('renders the N/A if programme episodes information is not available', () => {
      expect(
        wrapper
          .find('.channels__selection-info-episodes')
          .first()
          .text()
      ).toEqual('Episode number: N/A');
    });

    it('renders the programme channel information', () => {
      expect(wrapper.find('.channels__selection-info-channel').length).toEqual(5);
    });

    it('renders the programme channel name', () => {
      expect(
        wrapper
          .find('.channels__selection-info-channel-name')
          .first()
          .text()
      ).toEqual('ITV2 -');
    });

    it('renders the programme channel strapline', () => {
      expect(
        wrapper
          .find('.channels__selection-info-channel-strapline')
          .first()
          .text()
      ).toEqual('TV. And then some.');
    });
  });
});
