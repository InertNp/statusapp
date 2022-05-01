import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons"


export const Thoughts = ({ onclick , deleteOption , data }) => {
    return <div className="thoughts">
        <hr />
        {data.map((e) => <ThoughtLoad externaldata={e} key={e.id} onclick={(e) => onclick(e)} deleteOption={(e) => deleteOption(e)} />)}
    </div>
}




const ThoughtLoad = ({ externaldata, onclick, deleteOption }) => {
  const add = [externaldata.id , "add"] ;
  const sub = [externaldata.id , "sub"] ;
  return <div className="container">
        <div className="text">
            <div className="delete" onClick={(e) => { deleteOption(externaldata.id) }}>X</div>
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
                <button className="edit">Edit</button>

            </div>


        </div>
    </div>
}