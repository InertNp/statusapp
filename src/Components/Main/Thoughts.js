import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"



export const Thoughts = ({ onclick, deleteOption, data ,savedData }) => {

    return <div className="thoughts">
        <hr />
        {data.map((e) => <ThoughtLoad
            externaldata={e}
            key={e.id}
            onclick={(e) => onclick(e)}
            deleteOption={(e) => deleteOption(e)}
            savedData={(n) => savedData(n)}
         
        />)}
    </div>
}

const ThoughtLoad = ({ externaldata, onclick, deleteOption , savedData }) => {
    const [editor , SetEditor] = useState(false)
    const add = [externaldata.id, "add"];
    const sub = [externaldata.id, "sub"];
    
    
    function List() {
        return <div className="container">
            <div className="delete" ><p onClick={(e) => { deleteOption(externaldata.id) }}>X</p></div>
            <div className="text">

                <div className="author">
                    <FontAwesomeIcon icon={faUser} className="img" />
                    <p className="name">{externaldata.name}</p>
                </div>

                <p>{externaldata.thought}</p>

                <div className="state">
                    <div className="votes">
                        <div className="votechange">
                            <button onClick={() => { onclick(add) }}><FontAwesomeIcon icon={faAngleUp} className="vote" /></button>
                            <button onClick={() => { onclick(sub) }}><FontAwesomeIcon icon={faAngleDown} className="vote" /></button>
                        </div>

                        <p>{externaldata.votes}</p>
                    </div>
                    <div className="days">
                        <p>{externaldata.date}</p>
                    </div>
                </div>
                <div className="btns">
                    <button className="edit" onClick={() => SetEditor(true)}>Edit</button>
                </div>


            </div>
        </div>
    }
    const Edit = () => {
        const [value, SetValue] = useState(externaldata.thought);
        const [postBool, setPostBool] = useState(true)
        const HandleTextChange = (e) => {
            SetValue(e.target.value)
            if (value == "" || value.length <= 10) {
                setPostBool(true)
            }
            else {
                setPostBool(false)
            }

        }
        const handleSave = (thought) =>{
            externaldata.thought = thought
            savedData(externaldata)
            SetEditor(false)
        }
        return <div className="container">
            <div className="text">

                <div className="author">
                    <FontAwesomeIcon icon={faUser} className="img" />
                    <p className="name">{externaldata.name}</p>
                </div>

                <p className="input-parent">
                    <textarea
                        className="edit-input"
                        value={value}
                        onChange={HandleTextChange}
                        cols="40"
                        rows="5"
                        maxLength="80"
                    />
                </p>

                <div className="state">
                    <div className="votes">
                        <p>{externaldata.votes}</p>
                    </div>
                    <div className="days">
                        <p>{externaldata.date}</p>
                    </div>
                </div>
                <div className="btns">
                    <button className="edit"
                        onClick={() => handleSave(value)}
                        disabled={postBool}
                    >Save</button>

                </div>


            </div>
        </div >
    }

    if(editor){
        return <Edit />
    }
    else{
        return <List />
    }
  
}
