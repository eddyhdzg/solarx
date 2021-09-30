import { useEffect, useState } from "react";

interface IuseNotionPageProps {
  pageID: string;
}

const useNotionPage = ({ pageID }: IuseNotionPageProps) => {
  const [loading, setLoading] = useState(true);
  const [blockMap, setBlockMap] = useState({});
  const apiUrl = "https://notion-api.splitbee.io/v1/page";
  const url = `${apiUrl}/${pageID}`;

  const readPage = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((blogData) => {
        setBlockMap(blogData);
        setLoading(false);
      });
  };

  useEffect(() => {
    readPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, blockMap };
};

export default useNotionPage;
