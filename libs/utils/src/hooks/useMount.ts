import { EffectCallback, useEffect } from "react";

const useMount = (callback: EffectCallback) => {
  useEffect(callback, []);
  return null;
};

export default useMount;
