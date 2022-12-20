import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { postApi } from "../Webservice/Webservice";

const firebaseConfig = {
  apiKey: "AIzaSyCPMikEJ8nKpcvI-Q9RxRv6Rxty4ICwji0",
  authDomain: "hearwell-4e5ee.firebaseapp.com",
  projectId: "hearwell-4e5ee",
  storageBucket: "hearwell-4e5ee.appspot.com",
  messagingSenderId: "948425885493",
  appId: "1:948425885493:web:d15590f1d2c53e64432e7c",
  measurementId: "G-RTEC0JBYZN",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  //Call this function to get the user data

  signInWithPopup(auth, provider)
    .then((result) => {
      // postApi("/api/user/isuser", { email: result.user.email })
      //   .then((resp) => {
      //     console.log(resp, "response");
      //   })
      //   .catch((err) => {
      //     console.log(err,"errorrrr");
      //     if (err.response.data.message == "no user exist") {
      //       postApi("/api/user", { email: result.user.email,passwoed:result.user.uid }).then(
      //         (resp) => {
      //           console.log(resp, "response");
      //           localStorage.setItem("authToken", resp.data.token);
      //           localStorage.setItem(
      //             "userData",
      //             JSON.stringify(resp.data.user)
      //           );
      //           console.log(
      //             resp.data.token,
      //             JSON.parse(localStorage.getItem("userData"))
      //           );
      //           if (resp.data.token) return true
      //         }
      //       );
      //     }
      //   });
      // console.log(result, "result");
    })
    .catch((error) => {
      console.log(error, "error");
    });
};
export default app;
