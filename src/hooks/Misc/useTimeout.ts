import { useCallback, useEffect, useRef } from "react";

export const useTimeout = (cb : () => void, delay : number) => {
    const callbackRef = useRef(cb);
    const timeofRef = useRef();

    useEffect(() => {
        callbackRef.current = cb
    }, [cb]);

    const set = useCallback(() => {
        timeofRef.current = setTimeout(() => callbackRef.current(), delay)
    }, [delay]);

    const clear = useCallback(() => {
        timeofRef.current && clearTimeout(timeofRef.current)
    }, []);

    useEffect(() => {
        set()
        return clear
    }, [delay, set, clear]);

    const reset = useCallback(() => {
        clear()
        set()
    }, [clear, set]);

    return { reset, clear }
}