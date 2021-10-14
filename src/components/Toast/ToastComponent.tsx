import { FC, useMemo } from "react";
import styles from "src/styles/Home.module.css";
import { IoMdClose } from "react-icons/io";
import { ToastNotificationProps } from "./type"

const ToastNotification : FC<ToastNotificationProps> = ({ message, mode, onClose }) => {

    const classes = useMemo(
        () => [styles.toast, styles[mode]].join(' '), 
        [mode]
    );

    const classesProgress = useMemo(
        () => [styles.progressBar, styles[`progress-${mode}`]].join(' '), 
        [mode]
    );

    return (
        <div className={classes}>
            <span><IoMdClose onClick={onClose}/></span>
            <h3>Toast Notification</h3>
            <p>{message}</p>
            <span className={classesProgress}></span>
        </div>
    )
}

export default ToastNotification;