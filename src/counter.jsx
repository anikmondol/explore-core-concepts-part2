import { useState } from "react"
import './Button.css'

export default function Counter(){
    const [count, setCount] = useState(0)

    const handleAdd = () =>{
        const newCounter = count + 1;
        setCount(newCounter);

    }

    const handleReduce =()=>{
        const newReduce = count - 1;
        setCount(newReduce)
    }
    return(
        <div style={{border: "2px solid blue",
        marginBottom: "10px",
        borderRadius: '5px'}}>
            <h3>Counter: {count}</h3>
            <button className="Count1" onClick={handleAdd}>add</button>
            <button className="Count2" onClick={handleReduce}>Reduce</button>
        </div>
    )
}