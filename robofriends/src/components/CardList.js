import React from 'react';
import './CardList.css';
import ProfileCard from './ProfileCard';
import CardColumns from 'react-bootstrap/CardColumns';

const CardList = ({ profiles }) => {
  return (
    <div className="CardList">
      <CardColumns>
        {profiles.map((profile) => (
          <ProfileCard profile={profile} key={profile.email} />
        ))}
      </CardColumns>
    </div>
  );
};

export default CardList;
