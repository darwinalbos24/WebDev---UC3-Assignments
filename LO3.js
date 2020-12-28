// Event
var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn){

    btn.addEventListener('click', function(e){

        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
        
    });
});

// Event Bubbling - delete books

const list = document.querySelector("#book-list ul");

list.addEventListener("click", function(e){
    if (e.target.className == "delete");
    const li = e.target.parentElement;
    list.removeChild(li);
});

// Interacting with forms - add books

const addForm = document.forms["add-book"];

addForm.addEventListener("submit", function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);

});