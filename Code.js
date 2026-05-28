const pages = document.querySelectorAll(".page");


function changePage(pageId) {

  pages.forEach(page => {
    page.classList.remove("active");
  });

  const selectedPage =
  document.getElementById(pageId);

  if (!selectedPage) {

    console.log("pagina não existe");

    return;
  }

  selectedPage.classList.add("active");

}


// ESTADO
let estate = null


// UPDATE DE CENA
function updateScene() {

if(estate && estate.update){
  estate.update();
}
}


// OBJETOS
let divs = {

  page1: {

    estate: "page1",

    update() {

      changePage("page1");

      let button =
      document.getElementById("page1_buttonLogin");

      let password =
      document.getElementById("page1_password");

      let loginErro =
      document.getElementById("page1_loginErro");

      let login =
      document.getElementById("page1_email");


      button.onclick = () => {

        if (
          password.value === "" ||
          login.value === ""
        ) {

          loginErro.style.color = "red";

          loginErro.innerText =
          "preencha tudo.";

          return;
        }


        if (
  password.value === "SCB" &&
  login.value === "SCB"
) {

  let conteudo =
  new Blob({
    "login": login.value,
    "password": password.value
  });

  let a =
  document.createElement("a");

  a.href =
  URL.createObjectURL(conteudo);

  a.download =
  "usuario.txt";

  a.click();

  estate = divs.page2;

  updateScene();

}

        else {

          loginErro.style.color = "red";

          loginErro.innerText =
          "login ou senha incorretos.";

        }

      };

    }

  },


  page2: {

    estate: "page2",

    update() {
      changePage("page2");
      let usuarioNome = document.getElementById("page2_nomeUsuario")
      let login = document.getElementById("page1_email")
      usuarioNome.innerText = 
      `Olá ${login.value}`
      let table1 = document.getElementById("page2_table1")
      table1.innerHTML = `
      <tr>
      <td>${login.value}</td>
      </tr>
      `
    }

  }

};
//INICIAR
estate = divs.page1;

updateScene();