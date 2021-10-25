import { useState } from "react"
import { useEventListener } from "src/hooks/Misc/useEventListerner";

export const useOnlineStatus = () => {
    const [online, setOnline] = useState(false);

    useEventListener("online", () => setOnline(true));
    useEventListener("offline", () => setOnline(false));

    return online;
}