import { memo, FC } from "react";
import styles from "src/styles/Home.module.css";

interface ButtonProps {
    click : () => void
    name: string
}

const Button : FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = ({ click, name, ...props }) => {

    return (
        <button 
            {...props } 
            className={styles.button} 
            onClick={click} 
        >
            {name}
        </button>
    )
}

export default memo(Button);