import { useEffect, useState } from "react";

interface IuseNotionPageProps {
  pageId?: string;
}

const useNotionPage = ({ pageId }: IuseNotionPageProps) => {
  const [loading, setLoading] = useState(true);
  const [blockMap, setBlockMap] = useState({});
  const url = `https://notion-api.splitbee.io/v1/page/${pageId}`;

  const readPage = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((blogData) => {
        setBlockMap(blogData);
        setLoading(false);
      })
      .catch(() => ({}));
  };

  useEffect(() => {
    readPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, blockMap };
};

export default useNotionPage;
