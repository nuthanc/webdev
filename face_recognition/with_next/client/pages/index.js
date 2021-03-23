import Head from 'next/head';
import SearchBar from '../components/SearchBar';
import FaceDetect from '../components/FaceDetect';
import React, { useState } from 'react';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'a18a3032744a41b79a3497ab02fb15f8',
});

const Home = ({ currentUser }) => {
  const [url, setURL] = useState('');
  const [box, setBox] = useState(null);

  const onInputChange = (e) => {
    setURL(e.target.value);
  };

  const onSubmit = async () => {
    console.log('Detect clicked');
    try {
      const response = await app.models.predict(
        Clarifai.FACE_DETECT_MODEL,
        url
      );
      console.log(response);
      setBox(response.outputs[0].data.regions[0].region_info.bounding_box);
    } catch (e) {
      console.error(e);
    }
  };

  const showOnLogin = () => {
    if (currentUser) {
      return (
        <React.Fragment>
          <SearchBar onInputChange={onInputChange} onSubmit={onSubmit} />
          <FaceDetect box={box} url={url}/>
        </React.Fragment>
      );
    }
  };

  return (
    <div className="Home container">
      <Head>
        <title>Face Recognition</title>
      </Head>
      <div className="jumbotron text-center">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">
          This Magic Brain will detect faces in your pictures. Give it a try
        </p>
      </div>
      {showOnLogin()}
    </div>
  );
};

export default Home;
