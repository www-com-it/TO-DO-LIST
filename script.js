//! FUNZIONE PER AGGIUNGERE EVENTI ALLA LISTA */

function submit() {
    const li = document.createElement("li");
    const textInput = document.getElementById("input").value;
    const t = document.createTextNode(textInput);
    li.appendChild(t);

    if (textInput === "") {
        alert("Please insert a valid event!");
    } else {
        
        li.addEventListener("click", function() {
            this.classList.toggle("checked");
        });

        document.getElementById("lista").appendChild(li);
    }

    document.getElementById("input").value = "";
}

//! FUNZIONE PER RIPULIRE TUTTO //

function reload() {
    location.reload();
}