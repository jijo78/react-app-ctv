import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

import ChannelsInfo from '../src/components/ChannelsInfo';
import ErrorHandler from '../src/components/ErrorHandler';
import Header from '../src/components/Header';
import SelectChannel from '../src/components/SelectChannel';
class Channels extends Component {
  state = {
    categories: [],
    channels: 'itv',
    showError: false
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ channels: value }, () => this.fetchProgrammes());
  };

  componentDidMount() {
    this.fetchProgrammes();
  }

  fetchProgrammes = () => {
    const { channels } = this.state;
    Axios.get(
      `http://discovery.hubsvc.itv.com/platform/itvonline/ctv/programmes?channelId=${channels}&broadcaster=itv&features=hls,aes`,
      {
        headers: {
          Accept: 'application/vnd.itv.hubsvc.programme.v3+hal+json; charset=UTF-8'
        }
      }
    )
      .then(res => this.setState({ categories: res.data._embedded.programmes }))
      .catch(err => this.setState({ showError: true }));
  };

  render() {
    const { channels, categories, showError } = this.state;
    return (
      <main className='channels'>
        <Header channels={channels} />
        <SelectChannel onChange={this.handleChange} />
        <ChannelsInfo categories={categories} />
        <ErrorHandler error={showError} />
      </main>
    );
  }
}
Channels.propTypes = {
  categories: PropTypes.array
};
export default Channels;
