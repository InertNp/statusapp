import { useState } from "react"
import { Post } from "./Main/Post"
import { Thoughts } from "./Main/Thoughts"
import { fakedata } from ".././Data/data"
import { v4 as uuidv4 } from 'uuid';


export const Main = () => {

    const completeDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const [data, SetData] = useState(fakedata);
    //ADDING A DATA
    const handleAddText = (e) => {
        const text = [{
            id: uuidv4(),
            votes: 0,
            name: "annyonomus",
            thought: e,
            date: completeDate.toLocaleDateString('en-us', options),
        },]
        SetData(text.concat(data))
    }
    // UPVOTE AND DOWNVOTE
    const handleClick = (e) => {
        const id = e[0];
        if (e[1] === "add") {
            data.forEach(e => {
                if (e.id === id) {
                    e.votes = e.votes + 1;
                }
            });
            SetData([...data])
        }
        else if (e[1] === "sub") {
            data.forEach(e => {
                if (e.id === id) {
                    if (e.votes > 0) {
                        e.votes = e.votes - 1;
                    }
                }
            });
            SetData([...data])
        }
        else {
            console.log("erorro")
        }
    }
    /// DELETING A DATA
    const handleDelete = (id) => {
        const value = data.filter((e) => e.id !== id)
        SetData(value);
    }
    const handleSave = (arr) => {
        data.forEach(e => {
            if(e.id === arr.id){
                e.thought = arr.thought
            }
        });
        console.log(data)
        SetData([...data])
    }
    return (
        <main>
            <Post onclick={(e) => { handleAddText(e) }} />

            <Thoughts
                data={data}
                onclick={(e) => handleClick(e)}
                deleteOption={(e) => handleDelete(e)}
                savedData={(e) => handleSave(e)}
            />
        </main>
    )
}