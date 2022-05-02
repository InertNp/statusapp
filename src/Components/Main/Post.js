import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";


export const Post = ({ onclick }) => {
    const [text, SetText] = useState("")
    const [postBool, setPostBool] = useState(true)

    const HandleTextChange = (e) => {
        SetText(e.target.value)
        if (text == "" || text.length <= 10) {
            setPostBool(true)
        }
        else {
            setPostBool(false)
        }
    }
    return (
        <div className="post">
            <div className="input">

                <textarea
                    type="text"
                    value={text}
                    placeholder="Write Something!"
                    onChange={HandleTextChange}
                    maxLength="80"
                />
            </div>

            <div className="send">
                <FontAwesomeIcon icon={faSmile} className="posticons" />
                <button disabled={postBool}
                    onClick={(e) => { onclick(text) }}
                >Post</button>
            </div>
        </div>
    );
}