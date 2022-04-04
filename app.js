const btn = document.getElementById("btn");
const contaener = document.getElementById("contaener");

btn.addEventListener("click", () => {
    createNotification();
});

function createNotification(){
    const notif =document.createElement("div");
    notif.classList.add("toast");

    notif.innerText = "Theis challeng is crazy!";

    contaener.appendChild(notif);

    setTimeout(() =>{
        notif.remove();
    }, 3000);
}

