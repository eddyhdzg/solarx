import { useEffect, useState } from "react";

interface IuseNotionPageProps {
  pageId?: string;
}

const useNotionPage = ({ pageId }: IuseNotionPageProps) => {
  const [loading, setLoading] = useState(true);
  const [blockMap, setBlockMap] = useState({});

  useEffect(() => {
    const url = `https://notion-api.splitbee.io/v1/page/${pageId}`;
    async function readPage() {
      await fetch(url)
        .then((res) => res.json())
        .then((blogData) => {
          setBlockMap(blogData);
          setLoading(false);
        })
        .catch(() => ({}));
    }

    readPage();
  }, [pageId]);

  return { loading, blockMap };
};

export default useNotionPage;
