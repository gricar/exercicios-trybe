import React from 'react';
import Image from './Image';
import PropTypes from 'prop-types';

class UserProfile extends React.Component {
  render() {
    const { name, email, avatar } = this.props.user;
    return (
      <div>
        <p className='user'> {name} </p>
        <p className='user'> {email} </p>
        <Image source={avatar} alternativeText="User avatar" />
      </div>
    );
  } 
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UserProfile;