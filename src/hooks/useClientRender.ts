import { useLayoutEffect, useState } from "react";

const useClientRender = () => {
  const [state, setState] = useState(false);
  useLayoutEffect(() => {
    setState(true);
  }, []);
  return state;
};

export default useClientRender;
