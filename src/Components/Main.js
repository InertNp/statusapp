import { useState } from "react"
import { Post } from "./Main/Post"

export const Main = () => {

    const [text ,SetText] = useState("")
    console.log(text)
    return (
        <main>
            <Post value={text} onclick={(e) => {SetText(e)}}/>
        </main>
    )
}