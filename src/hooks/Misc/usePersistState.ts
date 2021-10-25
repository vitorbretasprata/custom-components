import { useState, useEffect, Dispatch, SetStateAction, FC } from "react";

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>
];

export function usePersistState<T> (key : string, initState: T) : Response<T> {
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key);

        if(storageValue) {
            return JSON.parse(storageValue);
        }

        return initState;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state])

    return [state, setState];
}