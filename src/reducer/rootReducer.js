import { uuid } from 'uuidv4';

const initialState = {
    tasks: [
        {
            id: uuid(),
            name: 'first task',
            done:false
        },
        {
            id: uuid(),
            name: 'second task',
            done:false
        }
    ]
}

const rootReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case "add":
                return ({tasks:[{id:uuid(),name:payload,done:false},...state.tasks]})
        case "delete":
                return ({tasks:[...state.tasks].filter(task=>task.id !== payload)})
        case "taskstate":
               return ({tasks:[...state.tasks].map(task=>task.id===payload?{...task,done:!task.done}:task)})       
        default:
            return state
    }
}
                                                                                
export default rootReducer