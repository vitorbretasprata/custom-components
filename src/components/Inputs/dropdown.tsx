
import { FC, useEffect, memo } from "react";
import styles from "src/styles/Home.module.css";
import { useEventListener } from "src/hooks/Misc/useEventListerner";

interface DropDownProps {
    buttonName: string,
    children: JSX.Element[]
}

const dropDownEvent = (e : any) => {
    const isDropDownButton = e.target.matches("[data-dropdown-button]");

    if(!isDropDownButton && e.target.closest('[data-dropdown]') != null) return;

    let currentDropDown;
    if(isDropDownButton) {
        currentDropDown = e.target.closest('[data-dropdown]');
        currentDropDown.classList.toggle(styles.active);
    }

    document.querySelectorAll("[data-dropdown]." + styles.active).forEach(dropdown => {
        if(dropdown === currentDropDown) return;
        dropdown.classList.remove(styles.active)
    });
}

const DropDown : FC<DropDownProps> = ({ buttonName, children }) => {

    useEventListener("click", dropDownEvent);

    return (
        <div className={styles.dropdown} data-dropdown>
            <a href="#" className={styles.button} data-dropdown-button>{buttonName}</a>
            <div className={styles.dropdownmenu}>
                {children}
            </div>
        </div>
    )
}

export default memo(DropDown);