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
const name = document.querySelector("#name");
const age = document.querySelector("#age");
const Fname = document.querySelector("#Fname");
const date = document.querySelector("#date");

// console.log(email,pass,age,name);
const authChecking = () => {
  console.log("Checking");
  const userid = localStorage.getItem("Uid");
  console.log(userid);

  if (userid) {
    window.location.replace("./landinPage.html");
  }
};

const creating = async () => {
  console.log("Hello");
  try {
    if (!email.value || !pass.value) {
      alert("Please Enter Email or password");
      return;
    }
    if (!name.value || !age.value) {
      alert("Please Enter Name or Age");
      return;
    }

    if (!Fname.value || !date.value) {
      alert("Please Enter Fname or Date");
      return;
    }

    const response = await createUserWithEmailAndPassword(
      auth,
      email.value,
      pass.value
    );
    console.log(response);
    const id = response.user.uid;
    await setDoc(doc(db, "myUsers", id), {
      Name: name.value,
      age: age.value,
      email: email.value,
      pass: pass.value,
      fName: Fname.value,
      date: date.value,
    });
    alert("Account Created Succesfully");
    window.location.href = "./index.html";
  } catch (error) {
    console.log(error.message);
    alert(error.code);
  }
};

window.creating = creating;
window.authChecking = authChecking;
