import { getDatabase, onValue, ref, remove, set, update } from "firebase/database";
import { app } from "../../firebaseConfig";

const db = getDatabase(app)

export const AddUser = (form) => {
    return async (dispatch) => {
        try {
            set(ref(db, "form/" + form.id), {
                name: form.name,

                phone: form.phone,

            });
            dispatch({
                type: 'adduser',
                payload: form
            })
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}


export const ViewUser = () => {
    return async (dispatch) => {
        try {
            let Users = ref(db, "form")
            console.log(Users)
            onValue(Users, (val) => {
                let data = val.val()
                console.log(data)
                dispatch({
                    type: 'viewuser',
                    payload: data

                })
            })
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export const DeleteUser = (userId) => {
    alert(userId)
    return async (dispatch) => {
        try {
            const userRow = ref(db, "form/" + userId)
            await remove(userRow)
            dispatch({
                type: 'deleteuser',
                payload: userId
            })
        } catch (err) {
            console.log(err)
            return false
        }
    }
}

export const UpdateRecord = (user) => {
    return async (dispatch) => {
        try {
            const userRow = ref(db, "form/" + user.id)
            await update(userRow)
            name: user.name;
            phone: user.phone
        } catch (err) {
            console.log(err)
            return false
        }
    }
}