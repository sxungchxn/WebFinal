import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
const token;
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  // export function example(){

  // }

  // export default example;