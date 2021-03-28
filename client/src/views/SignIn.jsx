import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

// firebase
import firebase from "firebase";

export default function SignIn() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      history.goBack();
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.user) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              email: res.user.email,
              uid: res.user.uid,
            })
          );
          Swal.fire("Welcome back!", "Logged in successfully", "success");
          history.push("/");
        }
      })
      .catch((e) => {
        if (e.code === "auth/user-not-found")
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `User not found`,
          });
        else console.log(e);
      });
  };

  const handleGoogleSignIn = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // var credential = result.credential;
        // var token = credential.accessToken;
        var user = result.user;
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: user.email,
            uid: user.uid,
          })
        );
        Swal.fire("Welcome back!", "Logged in successfully", "success");
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="wrapper fadeInDown" style={{ height: "80vh" }}>
        <div id="formContent">
          <form
            style={{ paddingTop: 30, height: "initial" }}
            onSubmit={(e) => handleLogin(e)}
          >
            <input
              type="email"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>
          <div id="formFooter">
            <a
              className="underlineHover login-link"
              style={{ cursor: "pointer" }}
              onClick={handleGoogleSignIn}
            >
              or login using your <i class="fab fa-google"></i> account
            </a>
          </div>
          <div id="formFooter">
            <a className="underlineHover login-link" href="/register">
              Create an account
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
