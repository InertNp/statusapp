import { faBars, faCompress, faPaperPlane, } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export const Header = () => {
    return (
        <header>
            <button className="buttons"><FontAwesomeIcon icon={faBars} className="sideIcons" /></button>
            <button className="icon"><FontAwesomeIcon icon={faCompress} className="icons" /> </button>
            <button className="buttons"><FontAwesomeIcon icon={faPaperPlane} className="sideIcons" /></button>
        </header>
    )
}