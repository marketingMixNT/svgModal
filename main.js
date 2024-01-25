//ALL PLOTS
//bottom from left side
const plot = document.querySelector("#b4b");
const plot2 = document.querySelector("#b4a");
const plot3 = document.querySelector("#b3b");
const plot4 = document.querySelector("#b3a");
const plot5 = document.querySelector("#b2b");
const plot6 = document.querySelector("#b2a");
const plot7 = document.querySelector("#b1b");
const plot8 = document.querySelector("#b1a");
//top from left side
const plot9 = document.querySelector("#a3b");
const plot10 = document.querySelector("#a3a");
const plot11 = document.querySelector("#a2b");
const plot12 = document.querySelector("#a2a");
const plot13 = document.querySelector("#a1b");
const plot14 = document.querySelector("#a1a");

//ALL MODALS 
//bottom from left side
const modal = document.querySelector("#modal--b4b");
const modal2 = document.querySelector("#modal--b4a");
//top from left side







const closeBtn = document.getElementsByClassName("close")[0];
const closeBtn2 = document.querySelector('.close1');

// const showModal = (modal)=>{
//     modal.classList.add('show-modal');}





plot.onclick = function() {
    modal.classList.add('show-modal');
}
plot2.onclick = function() {
    modal2.classList.add('show-modal');
}

function closeModal(modal) {
    modal.classList.remove('show-modal');
}

closeBtn.onclick = function() {
    closeModal(modal);
}
closeBtn2.onclick = function() {
    closeModal(modal2);
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal(modal);
    }else if(event.target == modal2){
        
            closeModal(modal2);
        
    }
}

// plot.addEventListener('click',showModal(modal))
// plot2.addEventListener('click',showModal(modal2))

