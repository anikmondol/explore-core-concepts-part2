import { useState } from "react"
import './team.css'
export default function Team(){
    const [team, setTeam] = useState(11);

    const handleAdd = () =>{
        setTeam(team + 1)
    }
    
    const handleRemove = () =>{
        setTeam(team - 1)
    }
    return(
        <div className="team">
            <h3>Player: {team}</h3>
            <button className="button1" onClick={handleAdd}>Add</button>
            <button className="button2" onClick={handleRemove}>Remove</button>
        </div>
    )
}