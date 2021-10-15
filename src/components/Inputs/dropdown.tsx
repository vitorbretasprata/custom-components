
import { HtmlHTMLAttributes, FC, useEffect } from "react";
import styles from "src/styles/Home.module.css";

interface DropDownProps {
    buttonName: string
}

const DropDown : FC<DropDownProps> = ({ buttonName, children }) => {

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
            currentDropDown.classList.toggle('active');
        }

        document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
            if(dropdown === currentDropDown) return;
            dropdown.classList.remove('active')
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

export default DropDown;