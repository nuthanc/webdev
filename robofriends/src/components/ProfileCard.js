import React from 'react';
// import './ProfileCard.css';
import Card from 'react-bootstrap/Card'

const ProfileCard = (props) => {
  const { avatar, name, email } = props.profile;
  return (
    <Card >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{email}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
