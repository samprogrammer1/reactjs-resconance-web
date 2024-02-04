import { useEffect } from "react";
import { useLocation , useHistory} from "react-router-dom";

const ScrollToTop = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
