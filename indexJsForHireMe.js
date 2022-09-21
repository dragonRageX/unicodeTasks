//GITHUB USERNAME: dragonRageX
const submit = document.getElementsByClassName("submit-button");
function getDetailsAndValidate()
{
    let firstName = document.getElementById("first-name").value;
    console.log(firstName);
    let lastName = document.getElementById("last-name").value;
    console.log(lastName);
}

submit.addEventListener("click", getDetailsAndValidate);
