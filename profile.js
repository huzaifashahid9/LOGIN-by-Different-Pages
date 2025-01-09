import{app,doc,createUserWithEmailAndPassword,signInWithEmailAndPassword,setDoc,getDoc,updateDoc,auth,db} from "./firebase.js"
const form = document.querySelector(".form")
const getProf = async () =>{
    try {
        console.log("hello");
        const id  = localStorage.getItem("Uid")
        const data  = await getDoc(doc(db,"myUsers",id))
        console.log(data.data());

        form.innerHTML = `<div>
                <h1 class = "under">Name :</h1>
                <h2>${data.data().Name} </h2>
                <button class = "btn" onclick = "editingName()">Edit</button>
                <h1 class ="under">Father Name :</h1>
                <h2>${data.data().fName} </h2>
                <button class = "btn" onclick = "editingFname()">Edit</button>
                <h1 class ="under">Email :</h1>
                <h2>${data.data().email} </h2><br> 
                <h1 class ="under">Age :</h1>
                <h2>${data.data().age} </h2>
                <button class = "btn" onclick = "editingAge()">Edit</button>
                <h1 class ="under">Date :</h1>
                <h2>${data.data().date} </h2>
                <button class = "btn" onclick = "editingDate()">Edit</button>
            </div>`
    } catch (error) {
        console.log(error.message);
       
        
    }
}


const editingName = async () =>{
    try {
        console.log("Hello");
        const id  = localStorage.getItem("Uid")
        const name = prompt("Enter your Name :  ")
        if(name === ""){
            alert("Kindly enter name! ")
            return
        }
        const document  = await doc(db,"myUsers", id)
        await updateDoc(document,{
            Name : name
        })
        alert("Successfulyy Updated")

        getProf()
        
    } catch (error) {
        
    }
}
const editingAge = async () =>{
    try {
        console.log("Hello");
        const id  = localStorage.getItem("Uid")
        const age = prompt("Enter your Age :  ")
        if(age === ""){
            alert("Kindly enter age! ")
            return
        }
        const document  = await doc(db,"myUsers", id)
        await updateDoc(document,{
            age : age
        })
        alert("Successfulyy Updated")

        getProf()
        
    } catch (error) {
        
    }
}
const editingDate = async () =>{
    try {
        console.log("Hello");
        const id  = localStorage.getItem("Uid")
        const date = prompt("Enter your Date :  ")
        if(date === ""){
            alert("Kindly enter date! ")
            return
        }
        const document  = await doc(db,"myUsers", id)
        await updateDoc(document,{
            date : date
        })
        alert("Successfulyy Updated")

        getProf()
        
    } catch (error) {
        
    }
}
const editingFname = async () =>{
    try {
        console.log("Hello");
        const id  = localStorage.getItem("Uid")
        const Fname = prompt("Enter your Father Name :  ")
        if(Fname === ""){
            alert("Kindly enter Father name! ")
            return
        }
        const document  = await doc(db,"myUsers", id)
        await updateDoc(document,{
            fName : Fname
        })
        alert("Successfulyy Updated")

        getProf()
        
    } catch (error) {
        
    }
}
window.getProf = getProf
window.editingName = editingName
window.editingAge = editingAge
window.editingDate = editingDate
window.editingFname = editingFname