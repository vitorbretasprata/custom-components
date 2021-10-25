import { useEffect } from "react"

export const useEventListener = (event : string, cb : (e : any) => any) => {

    useEffect(() => {

        document.addEventListener(event, cb);

        return () => {
            document.removeEventListener(event, cb);
        }
    }, []);
}