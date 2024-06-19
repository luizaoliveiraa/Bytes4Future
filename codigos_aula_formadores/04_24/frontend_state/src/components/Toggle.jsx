// import "../styles/Toggle.css"
import styles from "../styles/Toggle.module.css"

export function Toggle(props) {
    // let buttonText = "Dark Mode"


    return (
        // <div className="wrapper">
        <div className={styles.wrapper}>
            <button onClick={() => props.changeTheme(!props.isDarkMode)}>
                {props.isDarkMode === true ? "Dark Mode" : "Light Mode"}
            </button>
        </div>
    )
}