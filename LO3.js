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
const forms = document.forms;

list.addEventListener('click', function(e){
    if (e.target.className == 'delete'){
    const li = e.target.parentElement;
    list.removeChild(li);
    }
});

// Interacting with forms - add books

const addForm = forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    
    // create elements
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add text content
    bookName.textContent = value;
    deleteBtn.textContent = 'delete';
    

    // add classes

    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append to document

    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);


});

