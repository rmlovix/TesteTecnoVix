var inputName = document.getElementById("user");
var dataList = document.querySelector("ul");
const getUserRepo = name => {
  var user = inputName.value;
  if (!user) {
    renderError();
    alert("Buscar Usuário");
  }
  renderLoading();
  axios
    .get(`https://api.github.com/users/rmlovix/repos`)
    .then(response => {
      fillList(response.data);
    })
    .catch(error => {
      alert("Não foi possível buscar o usuário!");
      renderError(error);
    });
};

function renderLoading(loading) {
  dataList.innerHTML = "";
  var textElement = document.createTextNode("Carregando...");
  var loadingElement = document.createElement("li");
  loadingElement.appendChild(textElement);
  dataList.appendChild(loadingElement);
}

function renderError(loading) {
  dataList.innerHTML = "";
  var user = inputName.value;
  var msgUserEmpty = !user ? "Buscar Usuário" : "Erro ao buscar";

  var textElement = document.createTextNode(msgUserEmpty);
  var errorElement = document.createElement("li");
  errorElement.style.color = "#F00";
  errorElement.appendChild(textElement);
  dataList.appendChild(errorElement);
}

const fillList = repositorios => {
  console.log("TCL: repositorios", repositorios);
  dataList.innerHTML = "";

  for (repo of repositorios) {
    const reponame = document.createTextNode(repo.name);
    const repoItem = document.createElement("li");

    repoItem.appendChild(reponame);
    dataList.appendChild(repoItem);
  }
};