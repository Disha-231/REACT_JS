import axios from "axios"

export const ADD_USER = (users) => {
    return async (dispatch) => {
        let all = await axios.post(
            `http://localhost:8000/users`, users)
        try {
            dispatch({
                type: "add_user",
                payload: all.data,
            })
        } catch (err) {
            dispatch({
                type: "add_user_error",
                payload: all.data,
            })
        }
    }
}

export const VIEW_USER = () => {
    return async (dispatch) => {


        try {
            let all = await axios.get("http://localhost:8000/users")
            dispatch({
                type: "view_user",
                payload: all.data
            })
            console.log(all);
        } catch (err) {
            dispatch({
                type: "view_user_error",
                payload: err
            })
            return false;
        }
    }

}


export const DELETE_USER = (id) => {
    return async (dispatch) => {


        try {
            let all = await axios.delete(`http://localhost:8000/users/${id}`)
            dispatch({
                type: "delete_user",
                payload: id
            })

        } catch (err) {
            dispatch({
                type: "delete_user_error",
                payload: err
            })

        }
    }

}


