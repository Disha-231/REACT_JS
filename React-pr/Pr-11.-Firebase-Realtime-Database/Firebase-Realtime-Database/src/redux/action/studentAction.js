import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../firebaseConfig";

const db = getDatabase(app)

export const AddUser = (form) => {
    return async(dispatch) => {
        try{
            set(ref(db , "form/" + form.id) , {
                name: form.name,
                company: form.company,
                email: form.email,
                phone: form.phone,
                message: form.message,
            });
            dispatch({
                type : 'adduser' ,
                payload : form
            })
        }catch(error){
           console.log(error);
            return false;
        }
    }
}