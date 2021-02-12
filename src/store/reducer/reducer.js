const initialState={
    loggedIn:"",
    admin:""
}

const reducer=(state=initialState,action)=>{
    console.log(action)
    switch(action.type){

        case "ADMIN":
            return{
                ...state,
                admin:action.val
                 }
        case "LOG":
            return{
                ...state,
                loggedIn:action.val
            } 
            
         default:return {state};   
            
    }
   
}

export default reducer;