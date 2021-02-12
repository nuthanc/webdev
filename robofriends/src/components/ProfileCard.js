import React from 'react';
// import './ProfileCard.css';
import Card from 'react-bootstrap/Card'

const ProfileCard = (props) => {
  const { avatar, name, email } = props.profile;
  return (
    <Card style={{ width: '14rem', backgroundColor: 'lightblue',borderRadius: '5%' }} className="m-3 card">
      <Card.Img variant="top" src={avatar} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{email}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
<img alt="robots" src="https://robohash.org/3?size=200x200"></img>