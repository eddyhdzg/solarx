import { useState, useRef, useEffect } from "react";

const useScrollRight = (): [React.RefObject<HTMLHeadingElement>, boolean] => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [scroll, setScroll] = useState(false);

  interface DOMEvent<T extends EventTarget> extends Event {
    readonly target: T;
  }

  useEffect(() => {
    function handleScroll(e: DOMEvent<HTMLHeadingElement>) {
      setScroll(
        Boolean(
          e.target.scrollWidth - e.target.clientWidth - e.target.scrollLeft > 1
        )
      );
    }

    function handleResize() {
      setScroll(
        Boolean(
          (ref.current?.scrollWidth || 0) -
            (ref.current?.clientWidth || 0) -
            (ref.current?.scrollLeft || 0) >
            1
        )
      );
    }

    handleResize();
    // @ts-ignore
    ref.current?.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    const cleanup = () => {
      // @ts-ignore
      ref?.current?.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };

    return () => {
      cleanup();
    };
  }, []);

  return [ref, scroll];
};

export default useScrollRight;
