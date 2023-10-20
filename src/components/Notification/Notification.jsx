import React from 'react';
import PropTypes from 'prop-types';

import '../Notification/Notification.css';

const Notification = ({ message }) => <p class="msg">{message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
