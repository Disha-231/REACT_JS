let initialState = {
    userList: [],
    error: null
}

const formReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'adduser':
            return {
                ...state,
                userList: [...state.userList, action.payload]
            }

        case 'viewuser':
            return {
                ...state,
                userList: action.payload
            }

        case 'deleteuser':
            return {
                ...state,
                userList: state.userList.filter((user) => user.id !== action.payload)
            }
            case 'multipledeleteuser':
                return {
                    ...state,
                    userList: state.userList.filter((user) => !action.payload.includes(user.id))
                }
        default:
            return state;
    }

}
export default formReducer;