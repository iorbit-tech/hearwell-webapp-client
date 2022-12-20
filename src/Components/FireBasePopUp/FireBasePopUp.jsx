import React, { useEffect } from "react";
import { auth, provider } from "../../firebase/googleSignIn";
import { signInWithPopup } from "firebase/auth";
import { postApi } from "../../Webservice/Webservice";
import { useNavigate } from "react-router-dom";

const FireBasePopUp = ({ sign }) => {
  //   const [sign, setSign] = useEffect(false);
  const nav = useNavigate();
  useEffect(() => {
    signInWithGoogle();
  }, [sign]);
  const signInWithGoogle = () => {
    //Call this function to get the user data

    signInWithPopup(auth, provider)
      .then((result) => {
        postApi("/api/user/isuser", { email: result.user.email })
          .then((resp) => {
            postApi("/api/user/googlelogin", {
              email: result.user.email,
            }).then((resp) => {
              console.log(resp, "response login");
              localStorage.setItem("authToken", resp.data.token);
              localStorage.setItem("userData", JSON.stringify(resp.data.user));
              console.log(
                resp.data.token,
                JSON.parse(localStorage.getItem("userData"))
              );
              if (resp.data.token) nav("/addquestions");
            });
          })
          .catch((err) => {
            console.log(err, "errorrrr");
            if (err.response.data.message == "no user exist") {
              postApi("/api/user", {
                email: result.user.email,
                password: result.user.uid,
                firstName: result._tokenResponse.firstName,
                lastName: result._tokenResponse.lastName,
              }).then((resp) => {
                postApi("/api/user/googlelogin", {
                  email: result.user.email,
                }).then((resp) => {
                  console.log(resp, "response login");
                  localStorage.setItem("authToken", resp.data.token);
                  localStorage.setItem(
                    "userData",
                    JSON.stringify(resp.data.user)
                  );
                  console.log(
                    resp.data.token,
                    JSON.parse(localStorage.getItem("userData"))
                  );
                  if (resp.data.token) nav("/addquestions");
                });
              });
            } else {
            }
          });
        console.log(result, "result");
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };
  return <></>;
};

export default FireBasePopUp;
