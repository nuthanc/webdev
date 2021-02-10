import React from 'react';
import './CardList.css';
import ProfileCard from './ProfileCard';

const CardList = ({ profiles }) => {
  return (
    <div className="CardList container">
        {profiles.map((profile) => (
          <ProfileCard profile={profile} key={profile.email} />
        ))}
    </div>
  );
};

export default CardList;
