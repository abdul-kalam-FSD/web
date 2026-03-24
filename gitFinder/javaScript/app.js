const github=new gitHub;
const ui=new UI;
const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const getInput=document.querySelector("#search-user").value;
    if(getInput===""){
        alert("please provide a correct userName");
    }else{
        github.getuser(getInput)
        .then((data)=>{
            ui.showProfile(data);
            document.querySelector("#search-user").value==="";
        })
        .catch((err)=>{
            console.log(err);
        })
    }
})