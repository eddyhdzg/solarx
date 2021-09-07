import { useEffect, useState } from "react";

export default function useCanUseShareAPI() {
  const [canUseShareAPI, setCanUseShareAPI] = useState(false);

  useEffect(() => {
    setCanUseShareAPI(Boolean(navigator.share));
  }, []);

  return canUseShareAPI;
}
