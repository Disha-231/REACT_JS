let initialState = {
    userList : [],
    error : null
}

const formReducer = () => {
    return (state = initialState, action) => {
        switch (action.type) {

            case 'adduser' :
                return {
                    ...state, 
                    userList : [...state.userList, action.payload]
                }

            default :
                return state;
        }
    }
} 

export default formReducer;