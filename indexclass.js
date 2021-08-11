

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {

        let tableBody = document.getElementById("tableBody");
        let uiString = ` <tr>
       
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
      </tr>`;
        tableBody.innerHTML += uiString;
    }

    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();

    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true;
        }

    }

    show(type, displayMessage) {
        let message = document.getElementById("message")
        let boldTxt;
        if (type === "success") {
            boldTxt = "Success";
        }
        else {
            boldTxt = "Error";
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldTxt}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`

        // Set time out function clears the message notification after 2000milli secs or 2 secs.
        setTimeout(function () {

            message.innerHTML = ''
        }, 2000);


    }



}
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type; {
        let fiction = document.getElementById('fiction').value;
        let programming = document.getElementById('programming').value;
        let cooking = document.getElementById('cooking').value;
    }

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;


    }
    e.preventDefault();
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("success", "Your book has been successfully added.")

    }
    else {
        // show error to the user.
        display.show("danger", "Sorry you cannot add this book.")
    }

}
