import Form from '../../components/Form';

const SignUp = () => {
  return <Form url={'/api/auth/signup'} formLabel={'Sign Up'} />;
};

export default SignUp;
