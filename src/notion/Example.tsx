import { NotionRenderer } from "react-notion";
import useNotionPage from "./useNotionPage";

const Example = () => {
  // const url= "Mission-Vision-Values-70b84c62ec18488a84372a3b73f86289"
  const url = "Project-Markdown-fb35a0a500f848c7b78f9f6d973ff9c4";

  const { loading, blockMap } = useNotionPage({
    pageID: url,
  });

  return (
    <div>
      {!loading && <NotionRenderer hideHeader fullPage blockMap={blockMap} />}
    </div>
  );
};

export default Example;
