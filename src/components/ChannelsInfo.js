import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ChannelsInfo = ({ categories }) => {
  return (
    <section className='channels__selection-info'>
      {categories &&
        categories.length &&
        categories.map(programme => {
          const programmeEmbedded = programme._embedded.latestProduction;
          const episodes = programmeEmbedded.episode ? programmeEmbedded.episode : 'N/A';

          return (
            <div key={programme.id} className='row channels__selection-info-wrapper'>
              <img className='col-md-4' alt={''} src={programmeEmbedded._links.image.href} />
              <div className='col-md-8'>
                <h2 className='channels__selection-info-title'>{programme.title}</h2>
                <p className='channels__selection-info-synopses'>{programme.synopses.ninety}</p>
                <p className='channels__selection-info-duration'>
                  <strong>Duration:</strong>{' '}
                  <span className='channels__selection-info-brodcast-duration' key>
                    {programmeEmbedded.duration.display}
                  </span>
                </p>

                <p className='channels__selection-info-category'>
                  <strong>Category:</strong>{' '}
                  {programmeEmbedded._embedded.categories.map((category, i) => (
                    <span
                      className='channels__selection-info-category-name'
                      key={category.name + i}
                    >
                      {category.name}
                      {' - '}
                    </span>
                  ))}
                </p>

                <p className='channels__selection-info-brodcast-day'>
                  <strong>Broadcast day:</strong>{' '}
                  <span>
                    {moment(programmeEmbedded.broadcastDateTime.commissioning).format('DD/M/YYYY')}
                  </span>
                </p>

                <p className='channels__selection-info-brodcast-time'>
                  <strong>Broadcast time:</strong>{' '}
                  <span>
                    {moment(programmeEmbedded.broadcastDateTime.commissioning).format('LT')}
                  </span>
                </p>

                <p className='channels__selection-info-episodes'>
                  <strong>Episode number:</strong>{' '}
                  <span className='channels__selection-info-episodes-number'>{episodes}</span>
                </p>

                <p className='channels__selection-info-channel'>
                  <strong>Channel:</strong>{' '}
                  <span className='channels__selection-info-channel-name'>
                    {programmeEmbedded._embedded.channel.name} -
                  </span>
                  <span className='channels__selection-info-channel-strapline'>
                    {programmeEmbedded._embedded.channel.strapline}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
    </section>
  );
};

ChannelsInfo.propTypes = {
  channels: PropTypes.string,
  categories: PropTypes.array
};

export default ChannelsInfo;
