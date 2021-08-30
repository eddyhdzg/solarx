import { useSigninCheck } from "reactfire";
import { CenterLoader, MessagePaper } from "components";

export default function AuthWrapper({
  children,
  fallback = <MessagePaper message="Sign in to use this route" />,
}: React.PropsWithChildren<{ fallback?: JSX.Element }>): JSX.Element {
  const { status, data: signInCheckResult } = useSigninCheck();

  if (!children) {
    throw new Error("Children must be provided");
  }
  if (status === "loading") {
    return <CenterLoader />;
  } else if (signInCheckResult.signedIn === true) {
    return children as JSX.Element;
  }

  return fallback;
}
