import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

// firebase
import firebase from "firebase";

export default function Register() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.user) {
          console.log(res.user);
          Swal.fire("Yeay!", "Registered Succesfully", "success");
          history.push("/signin");
        }
      })
      .catch((e) => {
        if (e.code === "auth/email-already-in-use")
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `You're already registered`,
          });
      });
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      history.goBack();
    }
  }, []);

  return (
    <div className="wrapper fadeInDown" style={{ height: "80vh" }}>
      <div id="formContent">
        <form style={{ paddingTop: 30 }} onSubmit={(e) => handleRegister(e)}>
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
          <input type="submit" className="fadeIn fourth" value="Sign Up" />
        </form>
        <div id="formFooter">
          <a className="underlineHover login-link" href="/signin">
            Back to login
          </a>
        </div>
      </div>
    </div>
  );
}
