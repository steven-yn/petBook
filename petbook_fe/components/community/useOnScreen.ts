import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const useOnScreen = (
  root: MutableRefObject<Element | null>,
  target: MutableRefObject<Element | null>
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.9) {
            setIsIntersecting(true);
          } else {
            setIsIntersecting(false);
          }
        });
      },
      {
        root: root.current,
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
      }
    );
    const el = target && target.current;
    if (!el) return undefined;
    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, [target.current, root.current]);
  return [isIntersecting, setIsIntersecting];
};

export default useOnScreen;
