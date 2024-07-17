let initialState = {
    userList : [],
    error : null
}

const formReducer = (state = initialState, action) => {
   
        switch (action.type) {

            case 'adduser' :
                return {
                    ...state, 
                    userList : [...state.userList, action.payload]
                }

                case 'viewuser':
                    console.log(action.payload)
                    
                return {
                    ...state,
                    userList : action.payload
                   
                }

            default :
                return state;
        }
    
} 

export default formReducer;
