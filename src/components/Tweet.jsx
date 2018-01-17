import React from 'react';
import PropTypes from 'prop-types';

function Tweet(props){
  return (
    <div className='tweet'>
      <p><em>{props.name}</em></p>
      <p>{props.content}</p>
    </div>
  );
}

Tweet.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};


export default Tweet;
