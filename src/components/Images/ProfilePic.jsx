import React from 'react';
import ProfilePic from '../../assets/img/profile.jpeg';
import './ProfilePic.scss'

const image = (props) =>{
    return (
        <img
            src={ProfilePic}
            alt="profile"
            className={props.className + ' profile-image-size'}
        />
    )
}

export default image