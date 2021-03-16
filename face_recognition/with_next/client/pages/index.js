import Head from 'next/head';
import SearchBar from '../components/SearchBar';

const Home = ({currentUser}) => {
  return (
    <div className="Home container">
      <Head>
        <title>Face Recognition</title>
      </Head>
      <div className="jumbotron text-center">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This Magic Brain will detect faces in your pictures. Give it a try</p>
      </div>
      
      {currentUser && <SearchBar />}
    </div>
  );
}

export default Home;