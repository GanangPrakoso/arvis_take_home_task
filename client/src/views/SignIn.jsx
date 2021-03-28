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
          console.log(res.user);
          console.log(res.user.uid);
          localStorage.setItem("user", {
            email: res.user.email,
            uid: res.user.uid,
          });
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
      });
  };

  return (
    <>
      <div className="wrapper fadeInDown" style={{ height: "80vh" }}>
        <div id="formContent">
          <form style={{ paddingTop: 30 }} onSubmit={(e) => handleLogin(e)}>
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
            <a className="underlineHover login-link" href="/register">
              Create an account
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
