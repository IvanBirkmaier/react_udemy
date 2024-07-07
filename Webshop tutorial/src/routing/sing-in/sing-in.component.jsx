import {createUserDocumentFromAuth, singnInWithGooglePopup} from "../../utils/firebase/firebase.utils"

const SingIn = () => {
    const logGoogleAccount = async () => {
        /*
         Bei {user} handelt es sich um die response.user. um die Antwort der Google Server, 
         nach bestätigtem Login / Authentifizierung. Man erhält die Account Informationen. unter respone.user.email z.b. die
         EMial des Authentifizierten Users
        */
         const {user} = await singnInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }


    return(
        <div>
            <h1>SingIn</h1>
            <button onClick={logGoogleAccount}>
                Login
            </button>
        </div>
    );
}

export default SingIn;