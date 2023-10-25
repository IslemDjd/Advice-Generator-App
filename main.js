const apiUrl = "https://api.adviceslip.com/advice";
fetch(apiUrl)
.then((result) => {
    let myData = result.json(); 
    console.log(myData);
    return myData;
}).then((data) =>{
    document.getElementById("adviceId").innerHTML = data.slip.id;
    document.getElementById("adviceBody").innerHTML = "\""+ data.slip.advice + "\"" ;
}).catch((error) => {
    console.log(error);
});

const adviceChanger = document.getElementById("adviceChanger")
adviceChanger.addEventListener("click", ()=>{
    fetch(apiUrl).then((response)=>{
        let res = response.json();
        return res;
    }).then((myData)=>{
        document.getElementById("adviceId").innerHTML = myData.slip.id;
        document.getElementById("adviceBody").innerHTML = "\""+ myData.slip.advice + "\"" ;
    })
})
