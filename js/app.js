import {
  app,
  doc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setDoc,
  getDoc,
  auth,
  db,
} from "./firebase.js";

// console.log(app,doc,createUserWithEmailAndPassword,signInWithEmailAndPassword,setDoc,getFirestore,getDoc,auth,db);

const email = document.querySelector("#inputEmail");
const pass = document.querySelector("#inputPass");

// console.log(email,pass);

const authChecking = () => {
  console.log("Checking");
  const userid = localStorage.getItem("Uid");
  console.log(userid);

  if (userid) {
    window.location.replace("./landinPage.html");
  }
};

const loginHandle = async () => {
  console.log("hello");
  try {
    if (!email.value || !pass.value) {
      alert("Please Enter Email or password");
      return;
    }
    const response = await signInWithEmailAndPassword(
      auth,
      email.value,
      pass.value
    );
    console.log(response);
    const id = response.user.uid;
    const uid = localStorage.setItem("Uid", id);
    const userData = await getDoc(doc(db, "myUsers", id));
    console.log(userData.data());

    alert("Account Login Successfully");
    window.location.replace("./landinPage.html");
  } catch (error) {
    console.log(error.message);
    alert(error.code);
  }
};

window.loginHandle = loginHandle;
window.authChecking = authChecking;
