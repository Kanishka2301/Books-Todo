var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Select cancel button
var cancelpopup = document.getElementById("cancel-popup");
cancelpopup.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

addbook.addEventListener("click", function (event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");

    // Create book elements using DOM manipulation
    var h2 = document.createElement("h2");
    h2.textContent = booktitleinput.value;
    var h5 = document.createElement("h5");
    h5.textContent = bookauthorinput.value;
    var p = document.createElement("p");
    p.textContent = bookdescriptioninput.value;
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function (event) {
        // Call the deletebook function
        deletebook(event);
    });

    // Append elements to the div
    div.appendChild(h2);
    div.appendChild(h5);
    div.appendChild(p);
    div.appendChild(deleteButton);

    container.appendChild(div);

    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Define the deletebook function
function deletebook(event) {
    event.target.parentElement.remove();
}

 