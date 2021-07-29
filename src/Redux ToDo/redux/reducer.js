const initialState={
    todo_lists:[]
}

const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_TODO":
            const {id,title,completed}=action.payload
            return{
                ...state,
                todo_lists:[
                    ...state.todo_lists,
                    {
                        id,title,completed
                    }
                ]
            }
        case "DELETE_TODO":
            console.log( action.payload)
            const newLists= state.todo_lists.filter((item)=>{
                return item.id !== action.payload
            })
            return{
                ...state,
                todo_lists:newLists
            }
        case "UPDATE_TODO":
            // const item=state.todo_lists.find(item => item.id === action.payload)
            // console.log("Updated Data")
            // console.log(item)
            console.log("hello");
             console.log(action.payload);
            
            const updateLists=state.todo_lists.map(item=>{
                
                console.log(item)
                if(item.id===action.payload.id){
                    return{
                        ...item,
                        title:action.payload.title
                    }
                }
                return item
           
            })
            console.log("newLists",updateLists)
          
            return{
                ...state,
                todo_lists:updateLists
            }

        case "COMPLETE_TODO":
            const newCompleted=state.todo_lists.map(item=>{
                
               
                if(item.id===action.payload){
                    return{
                        ...item,
                        completed:true
                    }
                }
                return item
           
            })
            console.log("newCompleted",newCompleted)
          
            return{
                ...state,
                todo_lists:newCompleted
            }

        default:return state
    }
}


export default todoReducer