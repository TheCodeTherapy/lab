import { useRef, useEffect } from 'react';
import { za, ca, cm, cu } from './za';

export default function useDebug(debugMode = false) {
  const didIRun = useRef<boolean>(false);

  useEffect(() => {
    if (didIRun.current === false) {
      didIRun.current = true;
      if (debugMode === true) console.info(`%c ${za}`, ca);
    }
    if (debugMode === true) {
      console.info(`%c   mount :) ${new Date().toUTCString()} ${performance.now().toFixed(3)}`, cm);
    }
    return () => {
      if (debugMode === true) {
        console.info(
          `%c unmount :( ${new Date().toUTCString()} ${performance.now().toFixed(3)}`,
          cu
        );
      }
    };
  });
}
