import React from 'react';
// import './ProfileCard.css';

const ProfileCard = (props) => {
  const { id, name, email } = props.profile;
  const avatar = `https://robohash.org/${id}?size=300x300`;
  return (
    <div className="dib bg-lightest-blue ma2 pa2 br4">
      <img src={avatar} alt='robot' />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
<img alt="robots" src="https://robohash.org/3?size=200x200"></img>