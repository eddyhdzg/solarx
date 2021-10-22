import { NotionRenderer } from "react-notion";
import { useNotionPage } from "hooks";

interface INotionProps {
  pageId?: string;
}

const Notion = ({ pageId }: INotionProps) => {
  const { loading, blockMap } = useNotionPage({
    pageId,
  });

  return (
    <div>
      {!loading && <NotionRenderer hideHeader fullPage blockMap={blockMap} />}
    </div>
  );
};

export default Notion;
