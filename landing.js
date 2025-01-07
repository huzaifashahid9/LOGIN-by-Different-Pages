import { addDoc, auth, collection, db, doc, getDoc, getDocs } from "./firebase.js"

const authChecking = () =>{
    console.log("Checking");
    const userid = localStorage.getItem("Uid")
    console.log(userid);
    
    if(!userid){
        window.location.replace("./index.html")
    }
    
}


const blogPost = async () =>{
    try {
        console.log("blogPost")
        const title = document.querySelector("#title")
        const desc = document.querySelector("#desc")
        const checkbox = document.querySelector("#checkbox")
        const obj = {
            title: title.value,
            desc: desc.value,
            isPrivate: checkbox.checked,
            uid: localStorage.getItem('Uid')
        }
        await addDoc(collection(db, "blogs"), obj)
        alert("blog created successfully!")
        getBlog()
        title.value = ""
        desc.value = ""
        checkbox.checked = ""
    } catch (error) {
        console.log("error", error.message)
    }
}





const getBlog = async () =>{
    try {
        const parent = document.querySelector(".parent")
        const data  = await getDocs(collection(db,"blogs"))
        parent.innerHTML = ""
        data.forEach((doc) => {
            if(doc.data().isPrivate && doc.data().uid === localStorage.getItem("Uid")){
                parent.innerHTML += ` <div class="blog">
            <h1>${doc.data().title}</h1>
            <h4>${doc.data().desc}</h4>
            <h5>${doc.data().isPrivate ? "Private" : "Public"}</h5>
        </div>`
            }else{
                parent.innerHTML += `<div class="blog">
            <h1>${doc.data().title}</h1>
            <h4>${doc.data().desc}</h4>
            <h5>${doc.data().isPrivate ? "Private" : "Public"}</h5>
        </div>`
            }
        });
    } catch (error) {
        console.log("error", error.message)
    }
}

window.authChecking = authChecking
window.blogPost = blogPost
window.getBlog = getBlog