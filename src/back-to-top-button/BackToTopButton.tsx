import "./BackToTopButton.css"
import { GoArrowUp } from "react-icons/go";

export default function BackToTopButton () {

    const top = () => {
        window.scrollTo(0, 0)
    }
    return (
        <button onClick={top} className="top-btn">
            <GoArrowUp />
        </button>
    )
   
}