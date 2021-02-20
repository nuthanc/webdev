import React from 'react'

const Card = ({ email, name, id}) => {
  return (
    <div className="dib tc bg-light-green ma2 shadow-5 grow br3 bw2 pa3">
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card
