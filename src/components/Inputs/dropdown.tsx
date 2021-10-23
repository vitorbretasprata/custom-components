
import { FC, useEffect, memo } from "react";
import styles from "src/styles/Home.module.css";

interface DropDownProps {
    buttonName: string,
    children: JSX.Element[]
}

const DropDown : FC<DropDownProps> = ({ buttonName, children }) => {

    console.log("Piroca")

    useEffect(() => {
        document.addEventListener("click", dropDownEvent);

        return () => {
            document.removeEventListener("click", dropDownEvent);
        }
    }, [])

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