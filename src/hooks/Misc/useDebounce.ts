import { useEffect } from "react";
import { useTimeout } from "./useTimeout";

export const useDebounce = (cb : () => void, delay : number, dependencies : Array<any>) => {
    const { clear, reset } = useTimeout(cb, delay);
    useEffect(reset, [...dependencies, reset]);
    useEffect(clear, []);

}