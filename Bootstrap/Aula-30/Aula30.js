const toastElList = document.querySelectorAll(".toast");
const toastList = [...toastElList].map((toastEl) => {
    const toast = new bootstrap.Toast(toastEl, {});
    //toast.show();
});

const btnToast = document.getElementById("btnToast");
btnToast.addEventListener("click", () => {
    const toast = document.getElementById("toast");
    const container = document.getElementById("toastContainer");
    const novoToast = toast.cloneNode(true);
    novoToast.lastElementChild.innerHTML = "Mensagem em " + Date();
    container.appendChild(novoToast);
    const bsToast = new bootstrap.Toast(novoToast, {});
    bsToast.show();
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));
