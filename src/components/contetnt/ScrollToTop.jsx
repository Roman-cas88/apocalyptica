//https://www.kindacode.com/article/react-router-dom-scroll-to-top-on-route-change/
import { useEffect } from "react";
import { useLocation } from "react-router";

export const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};