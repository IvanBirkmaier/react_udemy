//Wird benötigt um eine Firebase App zu initialisieren
import { initializeApp } from "firebase/app";

//Importiert verschiedene Methoden aus der Firestorm-Authentication package/modul (auth)
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider
} from "firebase/auth"

/*
Importiert verschiedene Methoden aus der Firestorm-Database package/modul (firestore)
Link zum Datenmodell mit Collections, Documents und Data : https://firebase.google.com/docs/firestore/data-model?hl=de
*/
import {
    getFirestore,
    doc,
    //für das setzen und auslesen von Daten auf einem Dokument.
    getDoc,
    setDoc
} from "firebase/firestore"

//setz die Konifgurationen um das SDK mit der erstellten virtuellen Firebase-App zu verbinden
const firebaseConfig = {
  apiKey: "AIzaSyAUiov2pXNGSinkfy8mtiWlDm7aR3kgIr8",
  authDomain: "react-tutorial-9606c.firebaseapp.com",
  projectId: "react-tutorial-9606c",
  storageBucket: "react-tutorial-9606c.appspot.com",
  messagingSenderId: "498124569714",
  appId: "1:498124569714:web:cf8c7f1b56de2fd89096eb"
};

// Initzalisiert die Firebase-App des SDK mit der erstellten virtuellen Firebase-App, über die festgelegten Konfigs. 
const firebaseApp = initializeApp(firebaseConfig);

/* 
Der GoogleAuthProvider ist eine Methode zur Authentifizierung von Benutzern in einer Webanwendung mit Firebase Authentication.
Firebase Authentication ist ein von Google angebotener Dienst, der Entwicklern eine einfache Möglichkeit bietet,
die Authentifizierung von Benutzern in ihren Web- und Mobilanwendungen zu implementieren.
Wenn Sie GoogleAuthProvider verwenden, können Benutzer sich mit ihren Google-Anmeldeinformationen in Ihrer Anwendung anmelden. 
Firebase Authentication bietet auch Unterstützung für andere Authentifizierungsmethoden wie E-Mail und Passwort, Telefonnummer, Facebook, Twitter,
GitHub und mehr. Nachdem ein Benutzer sich mit Firebase Authentication angemeldet hat, 
kann Ihre Anwendung eine ID-Token von Firebase erhalten, das die Identität des Benutzers bestätigt. 
Sie können dieses Token verwenden, um eine sichere und personalisierte Erfahrung für den Benutzer in Ihrer Anwendung zu erstellen 
und seine Aktionen innerhalb der Anwendung zu verfolgen. Insgesamt ist GoogleAuthProvider eine praktische Methode,
um eine schnelle und sichere Authentifizierung von Benutzern in einer Webanwendung mit Firebase Authentication zu implementieren.
*/
const provider = new GoogleAuthProvider();

// Setzt die Custom Parameters des Provideres auf den angegeben Wert, damit ein Account ausgewählt werden muss
provider.setCustomParameters({
  prompt: "select_account"
});

// übergibt die getAuth-Methode
export const auth = getAuth();

/*
nimmt die getAuth-Methode und dass Provider Objekt und übergibt diese der signInWithPopup-Methode die nun aufgerufen werden kann und deren Logik nun
abgefragt weren kann. Es öffnet sich das typische Google sign in popup  
*/
export const singnInWithGooglePopup = () => signInWithPopup(auth, provider)

// instantiiert Firestorm Datenbank zeigt direkt zur datenbank innerhalb des Firestorn Projekts
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  /* 
  checkt ob es ein Firebase Document Referenz gibt und wenn nicht erstellt es eine
  doc(db = Datenbank in der das doc angelegt werden soll, 'user' = wie die Collection heißen soll in der das
  Dokument angelegt werden soll, userAuth.uid als Id des Dokuments)
  */
  const userDocRef = doc(db, 'user', userAuth.uid)
  
  /*
  Nimmt die gesetzte, oder überprüfte Document Refenz mit der getDoc-Methode und erstellt einen aktuellen Snapshot von existierenden oder 
  nicht existierenden Datenbankeintrag zum Authentifizierten User aus der userDocRef.
  */
  const userSnapshot = await getDoc(userDocRef);
    
  /*
  wenn dieser Snapshot zu dem Authentifizierten User nicht vorhanden ist, also noch kein Document (bzw. Daten) zu dem User
  in der Datenbank vorhanden sind, dann erstelle einen User in der Datenbank mit den folgenden Werten: 
  1. displayName (Name des Google-Accounts), 
  2. email (Mail des Google-Accounts)
  3. createdAt (Datum zu dem der User in der Datenbank angelegt wurde)
  */
  if(!userSnapshot.exists()){
    //userAuth ist der User der versucht sich für die Webseite über das Popupfenster zu Authentifizieren. 
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    //try-catch block fürs Error-handeling
    try{
      // Erstellt über die setDoc-Methode ein User-Object in der Datenbank für den Authentifiztierzen User, noch kein Objekt in der Datenbank hat
      await setDoc(userDocRef, {
          displayName,
          email,
          createdAt 
      });
    }catch(error){
      //gibt diesen Log aus wenn es beim erstellen zu einem Error kommt
      console.log("Error while creating the user", error.message)
    }

    /*
    returned die Referenz zu einem Authentifizierten User der Webseite, wenn für diesen schon ein User-Objekt in der Datenbank vorhanden
    ist. (Immer der Fall, da wenn keins vorhanden ist, wird ein im vorhinein erstellt). 
    */
    return userDocRef;
  }
}










