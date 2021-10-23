import { memo, FC } from "react";
import styles from "src/styles/Home.module.css";

interface ButtonProps {
    click : () => void
    btnName: string
}

const Button : FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = ({ click, btnName, ...props }) => {
    console.log("Button")
    return (
        <button 
            {...props } 
            className={styles.button} 
            onClick={click} 
        >
            {btnName}
        </button>
    )
}

export default memo(Button);