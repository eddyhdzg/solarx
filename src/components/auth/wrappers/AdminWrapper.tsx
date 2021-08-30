import { CenterLoader, MessagePaper } from "components";
import { useIsAdmin } from "hooks";

export default function AdminWrapper({
  children,
  fallback = (
    <MessagePaper message="You need to be an admin to use this route" />
  ),
}: React.PropsWithChildren<{
  fallback?: JSX.Element;
}>): JSX.Element {
  const { status, isAdmin } = useIsAdmin();

  if (!children) {
    throw new Error("Children must be provided");
  }
  if (status === "loading") {
    return <CenterLoader />;
  } else if (isAdmin) {
    return children as JSX.Element;
  }

  return fallback;
}
