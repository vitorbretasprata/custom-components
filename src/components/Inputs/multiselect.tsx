
import { HtmlHTMLAttributes, FC, useEffect, useState, useMemo } from "react";
import styles from "src/styles/Home.module.css";
import { TiArrowUnsorted } from "react-icons/ti"
import { IoMdClose } from "react-icons/io";

interface DropDownProps {
    buttonName: string,
    onSelect: (i : number) => (e : any) => void,
    onUnselect: (i : number) => (e : any) => void,
    selectOptions: Array<string>
    selectedOptions: Array<string>
}

const MultiSelect : FC<DropDownProps> = ({ buttonName, selectOptions, selectedOptions, onSelect, onUnselect }) => {

    const [selected, setSelected] = useState(selectedOptions);

    useEffect(() => {
        document.addEventListener("click", dropDownEvent);

        return () => {
            document.removeEventListener("click", dropDownEvent);
        }
    }, []);

    const dropDownEvent = (e : any) => {
        const isDropDownButton = e.target.matches("[data-dropdown-multiselect-button]");

        if(!isDropDownButton && e.target.closest('[data-dropdown-multiselect]') != null) return;

        let currentDropDown;
        if(isDropDownButton) {
            currentDropDown = e.target.closest('[data-dropdown-multiselect]');
            currentDropDown.classList.toggle(styles.active);
        }

        document.querySelectorAll("[data-dropdown-multiselect]." + styles.active).forEach(dropdown => {
            if(dropdown === currentDropDown) return;
            dropdown.classList.remove(styles.active)
        });
    }
    
    return (
        <div className={styles.dropdownSelect} data-dropdown-multiselect>
            <div className={styles.multiselect}>
                <div className={styles.selected} data-dropdown-multiselect-button>
                    {selectedOptions.length === 0 
                        ? buttonName 
                        : selectedOptions.map(
                            (opt, i) => (
                                <div className={styles.optionSelected} key={opt}>
                                    <span>{opt}</span>
                                    <IoMdClose onClick={onUnselect(i)}/>
                                </div>
                            )
                        )}
                </div>
                <div className={styles.multiselectIcon} data-dropdown-multiselect-button>
                    <TiArrowUnsorted />
                </div>
            </div>
            <div className={styles.dropdownmenu}>                
                {selectOptions.map((opt, i) => (
                    <div key={i} onClick={onSelect(i)}>
                        {opt}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MultiSelect;