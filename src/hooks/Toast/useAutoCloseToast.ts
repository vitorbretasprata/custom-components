import { useEffect, useState } from "react";

export const useToeastAutoClose = ({
    toasts,
    setToast,
    autoClose,
    autoCloseTime
}) => {
    const [removing, setRemoving] = useState('');

    useEffect(() => {
        if(removing) {
            setToast(toasts.filter(t => t.id !== removing));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [removing]);

    useEffect(() => {
        if(autoClose && toasts.length) {
            const id = toasts[toasts.length - 1].id;
            setTimeout(() => setRemoving(id), autoCloseTime);
        }
    }, [toasts, autoCloseTime, autoClose]);
}