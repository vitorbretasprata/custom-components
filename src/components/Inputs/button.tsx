import { memo, FC } from "react";
import styles from "src/styles/Home.module.css";

interface ButtonProps {
    click : () => void
    name: string
}

const Button : FC<ButtonProps> = ({ click, name }) => {

    return (
        <button className={styles.button} onClick={click}>
            {name}
        </button>
    )
}

export default memo(Button);