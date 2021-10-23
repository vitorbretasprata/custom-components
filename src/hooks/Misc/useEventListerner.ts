import { useEffect } from "react"

export const useEventListener = (event : string, cb : () => any) => {

    useEffect(() => {

        document.addEventListener(event, cb);

        return () => {
            document.removeEventListener(event, cb);
        }
    }, []);
}