import { useEffect, useState } from "react";
import { uuid } from "src/components/shared/helpers";
import styles from "src/styles/Home.module.css";

export const useToastPortal = () => {

    const [loaded, setLoaded] = useState(false);
    const [portalId] = useState(`toast-portal-${uuid()}`);

    useEffect(() => {
        const div = document.createElement('div');
        div.id = portalId;
        div.className = styles.toastPosition;
        
        document.getElementsByTagName('body')[0].prepend(div);
        setLoaded(true);

        return () => {
            document.getElementsByTagName('body')[0].removeChild(div);
        }
    }, [portalId]);

    return {
        loaded,
        portalId
    }
}