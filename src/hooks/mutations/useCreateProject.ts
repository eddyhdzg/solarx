import { useUser } from "reactfire";

export default function useCreateProject() {
  const { data } = useUser();

  console.log(data.uid);

  return true;
}
