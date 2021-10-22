/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from "react";

const useScrollRight = (): [React.MutableRefObject<undefined>, boolean] => {
  const ref = useRef();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    function handleScroll(e: any) {
      setScroll(
        Boolean(
          e.target.scrollWidth - e.target.clientWidth - e.target.scrollLeft > 1
        )
      );
    }

    function handleResize() {
      setScroll(
        Boolean(
          // @ts-ignore
          ref.current.scrollWidth -
            // @ts-ignore
            ref.current.clientWidth -
            // @ts-ignore
            ref.current.scrollLeft >
            1
        )
      );
    }

    handleResize();

    // @ts-ignore
    ref?.current?.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return function cleanup() {
      // @ts-ignore
      ref?.current?.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [ref, scroll];
};

export default useScrollRight;
