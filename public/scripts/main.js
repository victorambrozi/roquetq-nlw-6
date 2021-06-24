import Modal from './modal.js';


const modal = Modal();


const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");


const checkButtons = document.querySelectorAll(".actions a.check");

function handleClick(event, check = true){
    event.preventDefault();
    
    const text = (check) ? "Marcar como lida" : "Excluir";
    const slug = (check) ? "check" : "delete";
      
    
    const roomId = document.querySelector("#room-id").dataset.id;


    const form = document.querySelector(".modal form");
    form.setAttribute("action", `/room/${roomId}/:question/${slug}`);

    modalTitle.innerHTML = `${text} esta pergunta?`;
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`;
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`;

    (check) ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open();
} 

checkButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
})

const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach((button) => {
    button.addEventListener("click", (event) => handleClick(event, false));
})

