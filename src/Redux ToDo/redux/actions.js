export const addTodo=(data)=>{
    return{
        type:"ADD_TODO",
        payload:{
            id:new Date().getTime().toString(),
            title:data,
            completed:false
        }
    }
}
export const deleteTodo=(id)=>{
    return{
        type:"DELETE_TODO",
        payload:id
    }
}
export const updateTodo=(id,title)=>{
    console.log(title)
    return{
        type:"UPDATE_TODO",
        payload:{
            id,
            title
        }
    }
}
export const completeTodo=(id)=>{
    return{
        type:"COMPLETE_TODO",
        payload:id
    }
}