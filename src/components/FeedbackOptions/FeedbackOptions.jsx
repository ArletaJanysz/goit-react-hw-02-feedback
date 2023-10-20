import React from 'react';
import PropTypes from 'prop-types';

import '../FeedbackOptions/FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="btn-wrapper">
    {options.map(option => (
      <button className="option-btn" key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
