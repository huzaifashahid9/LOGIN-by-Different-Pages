import { addDoc,deleteDoc, updateDoc, auth, collection, db, doc,setDoc, getDoc, getDocs } from "./firebase.js"



const getBlog = async () =>{
    try {
        console.log("Hello");
        const parent = document.querySelector(".parent")
        const data  = await getDocs(collection(db,"blogs"))
        parent.innerHTML = ""
        data.forEach((doc) => {
        if(doc.data().uid === localStorage.getItem("Uid")){
            parent.innerHTML += ` <div class="blog">
        <h2 class ="bd-top" >${doc.data().title}</h2>
        <h3>${doc.data().desc}</h3>
        <h4 class ="public" >${doc.data().isPrivate ? "Private" : "Public"}</h4>
        <button onclick = "editing('${doc.id}')" class = "btn" >Edit</button>
        <button onclick = "deleting('${doc.id}')" class = "btn" >Dele</button>
    </div>`
        }
    })

        
    } catch (error) {
        console.log("error", error.message)
        
    }
}


const editing = async (id) =>{
    try {
        console.log("Hello");
        console.log(id);
        
        const updateTitle = prompt("Enter Title Value : ");
        const updateDescription = prompt("Enter Description Value : "); 
        if(!updateDescription || !updateTitle){
            alert(" Kindly enter blog!")
            return
        }
        await updateDoc(doc(db ,"blogs",id),{
            title: updateTitle,
            desc: updateDescription,
        })
        alert("Updated Successfully")
        getBlog();
        
    } catch (error) {
        console.log("error", error.message)
        alert(error.message)
    }
}
const deleting = async (id) =>{
    try {
        console.log("Hello");
        console.log(id);

        await deleteDoc(doc(db,"blogs",id))
        alert("Deleted Successfully")
        getBlog()
        
    } catch (error) {
        console.log("error", error.message)
        alert(error.message)
    }
}


window.editing = editing
window.deleting = deleting
window.getBlog =  getBlog