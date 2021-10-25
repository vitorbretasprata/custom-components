import { NavigationBar } from "./style";

import { MdKeyboardArrowLeft } from "react-icons/md";

const sidebar = () => {

    return (
        <NavigationBar>
            <div className="sidebar-top">
                <div className="shrink-btn">
                    <MdKeyboardArrowLeft />
                </div>
            </div>
        </NavigationBar>
    );
}

export default sidebar;