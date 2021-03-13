import Form from '../../components/Form';

const SignIn = () => {
  return <Form url={'/api/auth/signin'} formLabel={'Sign In'} />
}

export default SignIn;