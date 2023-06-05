import { useEffect, useLayoutEffect, useState } from "react";

const useIsWindow = () => {
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(true);
  }, []);
  return state;
};

export default useIsWindow;
