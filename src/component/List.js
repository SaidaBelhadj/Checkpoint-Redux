import React ,{useState }from 'react'
import { useSelector, useDispatch } from 'react-redux'

const List = () => {
    
    const dispatch = useDispatch();
    const styleB= {backgroundColor:"red",color:"white"}
    const mystyle= {display:"flex",maxWidth:"500px",justifyContent:"space-between",backgroundColor:"black",color:"white",padding:"5px",margin:"5px", borderRadius:"8px"}
    const tasks = useSelector (state => state.rootReducer.tasks)
    const  [state, setState] = useState("All")

    return (
        <div>
            <div style ={{margin:"10px", display:"flex",width:"200px",justifyContent:"space-between"}}>
                <button onClick={()=>setState("Done")}>Done</button>
                <button onClick={()=>setState("Not Done")}>Not Done</button>
                <button onClick={()=>setState("All")}>All</button>
            </div>
            <p>{state}  tasks </p>
            {(state==="Done"?tasks.filter(task=>task.done===true):state==="Not Done"?tasks.filter(task=>task.done===false):tasks).map ((task) => {return (
            <div id={task.id} style={mystyle}>
               <span style ={task.done?{textDecoration:"line-through"}:{}} onClick={()=>dispatch({type:"taskstate",payload:task.id})} > {task.name}</span>
               <button onClick={()=>dispatch({type:"delete",payload:task.id})} style={styleB}>delete</button>
            </div>)
})}
        </div>
    )
}

export default List
