export interface ToastNotificationProps {
    mode: string,
    onClose: () => void,
    message: string
}

export interface ToastNotificationInfoProps {
    mode: string,
    message: string,
    id: string
}

export interface ToastPortalProps {
    autoClose: boolean,
    autoCloseTime: number
}

