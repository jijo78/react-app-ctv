import React from 'react';
import PropTypes from 'prop-types';

const SelectChannel = ({ onChange }) => {
  const channelsArray = ['itv', 'itv2', 'itv3', 'itv4', 'itvbe', 'citv'];

  return (
    <form className='channels__form'>
      <section className='channels__select'>
        <label htmlFor='channels__select-control' />
        <select className='form-control' onChange={onChange} id={'channels__select-control'}>
          {channelsArray.map((value, i) => {
            return (
              <option value={value} key={value + i}>
                {value}
              </option>
            );
          })}
        </select>
      </section>
    </form>
  );
};

SelectChannel.propTypes = {
  onChange: PropTypes.func
};

export default SelectChannel;
