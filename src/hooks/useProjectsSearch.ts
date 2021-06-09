// https://codeburst.io/lets-build-an-app-with-custom-react-hooks-73693ae05450
import { useMemo } from "react";
import { Project } from "types";
import { UseFormWatch } from "react-hook-form";
import { ProjectFiltersSchema } from "hooks";

const useSearchable = (
  data: Project[],
  watch: UseFormWatch<ProjectFiltersSchema>,
  searchProps: (item: Project) => (string | number | boolean)[]
) => {
  return useMemo(() => {
    const { id, name, location, funded, search } = watch();

    let filteredData = data.filter((project) => {
      if (id) {
        const regex = new RegExp(id, "i");
        if (!regex.test(String(project.id))) return false;
      }

      if (name) {
        const regex = new RegExp(name, "i");
        if (!regex.test(project.name)) return false;
      }

      if (location) {
        const regex = new RegExp(location, "i");
        if (!regex.test(project.location)) return false;
      }

      if (funded) {
        const regex = new RegExp(funded, "i");
        return project.funded ? regex.test("1") : regex.test("0");
      }

      return true;
    });

    if (search) {
      const regex = new RegExp(search, "i");
      filteredData = filteredData.filter((project) => {
        return searchProps(project).some((sp) => {
          if (typeof sp === "string") return regex.test(sp);
          if (typeof sp === "number") return regex.test(String(sp));
          if (typeof sp === "boolean") {
            return sp ? regex.test("Funded") : false;
          }
          return regex.test(String(sp));
        });
      });
    }

    return filteredData;
  }, [data, watch, searchProps]);
};
export default useSearchable;
