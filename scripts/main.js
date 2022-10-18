const imgFile = document.querySelector("img");
imgFile.onclick = function() {
    const imgSrc = imgFile.getAttribute("src");
    if (imgSrc === "images/klaus.jpeg") {
        imgFile.setAttribute("src", "images/klaus2.jpeg");
    }
    else {
        imgFile.setAttribute("src", "images/klaus.jpeg");
    }
};

let buttonVar = document.querySelector("button");
let headingVar = document.querySelector("h1");

function setUsername() {
    const nameInput = prompt("Enter your name:");
    localStorage.setItem("name", nameInput);

    if (!nameInput) {
        setUsername();
    }
    else {
        headingVar.textContent = `Hi ${nameInput} (first time)`;
    }
}

if (!localStorage.getItem("name")) {
    setUsername();
}
else {
    const nameStored = localStorage.getItem("name");
    headingVar.textContent = `Hi ${nameStored}`;
}

buttonVar.onclick = function() {
    setUsername();
};
