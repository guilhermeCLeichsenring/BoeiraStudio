const nome = document.querySelector(".name");
const tel = document.querySelector(".tel");
const email = document.querySelector(".email");
const message = document.querySelector(".message");

function sendForm() {
  if (
    nome.value === "" ||
    tel.value === "" ||
    email.value === "" ||
    message.value === ""
  ) {
    window.alert("Preencha todos os campoos do formulário antes de envia-lo.");
  } else {
    const url = `https://api.whatsapp.com/send/?phone=%2B554796323638&text=Nome%3A+${nome.value}%0ATelefone%3A+${tel.value}%0A+Email%3A+${email.value}%0A+Mensagem%3A+${message.value}`;
    const win = window.open(url, "_blank");
    win.focus();

    nome.value = "";
    tel.value = "";
    email.value = "";
    message.value = "";
  }
}
