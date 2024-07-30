import { getDatabase, onValue, ref, remove, set, update } from "firebase/database";
import { app } from "../../firebaseConfig";

const db = getDatabase(app)

export const AddUser = (form) => {
    return async (dispatch) => {
        try {
            set(ref(db, "form/" + form.id), {
                name: form.name,
                email: form.email,
                password: form.password,
                city: form.city,
                salary: form.salary,
                degignation: form.degignation,
                status: form.status


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

export const MultipleDeleteUser = (ids) => {
    return async (dispatch) => {
        try {
            ids.forEach(async (id) => {
                const userRow = ref(db, "form/" + id)
                await remove(userRow)
            })
            dispatch({
                type: 'multipledeleteuser',
                payload: ids
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
            email: user.email;
            password: user.password;
            city: user.city;
            salary: user.salary;
            degignation: user.degignation
            status: user.status
        } catch (err) {
            console.log(err)
            return false
        }
    }
}