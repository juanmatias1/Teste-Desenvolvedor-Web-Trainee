let dataList = [];
let editIndex = -1;

function validateForm() {
    let isValid = true;
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

    if (name.value === "") {
        name.classList.add("invalid");
        name.classList.remove("valid");
        isValid = false;
    } else {
        name.classList.add("valid");
        name.classList.remove("invalid");
    }

    if (email.value === "") {
        email.classList.add("invalid");
        email.classList.remove("valid");
        isValid = false;
    } else {
        email.classList.add("valid");
        email.classList.remove("invalid");
    }

    if (phone.value === "") {
        phone.classList.add("invalid");
        phone.classList.remove("valid");
        isValid = false;
    } else {
        phone.classList.add("valid");
        phone.classList.remove("invalid");
    }

    return isValid;
}

function saveData() {
    if (!validateForm()) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (editIndex === -1) {
        dataList.push({ name, email, phone });
    } else {
        dataList[editIndex] = { name, email, phone };
        editIndex = -1;
    }

    clearForm();
    renderDataList();
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";

    document.getElementById("name").classList.remove("valid", "invalid");
    document.getElementById("email").classList.remove("valid", "invalid");
    document.getElementById("phone").classList.remove("valid", "invalid");

    editIndex = -1;
}

function renderDataList() {
    const dataListElement = document.getElementById("datalist");
    dataListElement.innerHTML = "";

    dataList.forEach((data, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-item");
        
        const nameElement = document.createElement("div");
        nameElement.textContent = `Nome: ${data.name}`;
        
        const emailElement = document.createElement("div");
        emailElement.textContent = `Email: ${data.email}`;
        
        const phoneElement = document.createElement("div");
        phoneElement.textContent = `Telefone: ${data.phone}`;
        
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.onclick = () => editData(index);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.onclick = () => deleteData(index);

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);

        listItem.appendChild(nameElement);
        listItem.appendChild(emailElement);
        listItem.appendChild(phoneElement);
        listItem.appendChild(buttonContainer);

        dataListElement.appendChild(listItem);
    });
}

function editData(index) {
    const data = dataList[index];
    document.getElementById("name").value = data.name;
    document.getElementById("email").value = data.email;
    document.getElementById("phone").value = data.phone;

    editIndex = index;
}

function deleteData(index) {
    if (confirm("Tem certeza que deseja excluir este cadastro?")) {
        dataList.splice(index, 1);
        renderDataList();
    }
}