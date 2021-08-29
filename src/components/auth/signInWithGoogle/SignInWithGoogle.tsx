import { useCustomAuth } from "hooks";

const SignInWithGoogle = () => {
  const { signIn } = useCustomAuth();
  return <button onClick={() => signIn()}>Sign In</button>;
};

export default SignInWithGoogle;
