import Head from 'next/head';

export default function Home() {

  return (
    <div className="Home container">
      <Head>
        <title>Face Recognition</title>
      </Head>
      <div className="jumbotron text-center">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This Magic Brain will detect faces in your pictures. Give it a try</p>
      </div>
    </div>
  );
}

process.on('warning', (e) => console.warn(e.stack));