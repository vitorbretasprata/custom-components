import { useState, forwardRef, useImperativeHandle, useCallback } from "react";
import ReactDOM from "react-dom";

import { useToastPortal, useToeastAutoClose } from "src/hooks";
import styles from "src/styles/Home.module.css";
import { ToastNotification } from "./index";

import { ToastNotificationInfoProps, ToastPortalProps } from "./type"
import { uuid } from "../shared/helpers";

const ToastPortal = ({ autoClose, autoCloseTime = 5000 }, ref) => {
    const [toasts, setToast] = useState<Array<ToastNotificationInfoProps>>([])

    const { loaded, portalId } = useToastPortal();    

    useImperativeHandle(ref, () => ({
        addMessage(toast : ToastNotificationInfoProps) {
            setToast([...toasts, { ...toast,  id: uuid() }]);
        }
    }));

    useToeastAutoClose({
        toasts,
        setToast,
        autoClose,
        autoCloseTime
    });

    const removeToast = useCallback((id : string) => {
        setToast(toasts.filter(t => t.id !== id));
    }, [toasts]);  

    return loaded ? ReactDOM.createPortal(
        <div className={styles.toastListContainer}>
            {toasts.map((t) => (
                <ToastNotification 
                    key={t.id} 
                    mode={t.mode} 
                    onClose={() => removeToast(t.id)} 
                    message={t.message}
                />
            ))}
        </div>,
        document.getElementById(portalId)
    ) : <></>;
};

export default forwardRef<HTMLDivElement, ToastPortalProps>(ToastPortal);