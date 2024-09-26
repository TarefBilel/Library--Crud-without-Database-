let books=document.querySelector(".books");

let add=document.querySelector(".a");
let info=document.querySelector(".info")

add.addEventListener("click",(e)=>{
e.preventDefault();
let title=document.querySelector(".ti").value;
let author=document.querySelector(".au").value;
let genre=document.querySelector(".ge").value;
let year=document.querySelector(".ye").value;
let quan=document.querySelector(".qu").value;
let tr=document.createElement("tr");
tr.innerHTML=`
<td>${title}</td>
        <td>${author}</td>
        <td>${genre}</td>
        <td>${year}</td>
        <td>${quan}</td>
        <td><span class="edit">Edit</span>
        <span class="delete">Delete</span>
        </td>

`
info.appendChild(tr)
});
 
info.addEventListener("click",(e)=>{
        target=e.target;
        if(target.classList.contains("delete")){
               target.parentElement.parentElement.remove();
        }
});
info.addEventListener("click",(e)=>{
        if(e.target.classList.contains("edit")){
         document.querySelector(" #t").value=e.target.parentElement.parentElement.children[0].textContent;
        }
})
