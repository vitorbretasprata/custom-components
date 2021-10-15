import { useState, useEffect, useCallback } from "react";

export const useAsync = (cb : () => Promise<any>, dependencies : Array<any>) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [value, setValue] = useState();

    const callbackMemorized = useCallback(() => {
        setLoading(true);
        setError(undefined);
        setValue(undefined);

        cb()
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);

    useEffect(() => {
        callbackMemorized();
    }, [callbackMemorized]);

    return { loading, error, value }

}