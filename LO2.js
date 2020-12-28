// Changing content
var names = document.querySelectorAll("#book-list li .name");

Array.from(names).forEach(function(names){
    names.innerHTML += " (book title)"
});

const extra = document.querySelector("#book-list");

    extra.innerHTML += " added this paragraph content using JavaScript!"

// Nodes

const banner = document.querySelector("#page-banner");

console.log(banner.nodeType);
console.log(banner.nodeName);
console.log(banner.hasChildNodes());
console.log(banner.hasChildNodes());

const clone = banner.cloneNode(true);
console.log(clone);

const clone2 = banner.cloneNode(false);
console.log(clone2);

// Traversing the Nodes

const list = document.querySelector("#book-list");
    // Traversing Upwards
console.log(list.parentNode);
console.log(list.parentElement.parentElement);
    // Traversing Downwards
console.log(list.children);
console.log(list.childNodes);

    // Traversing the next sibling
console.log(list.nextSibling);
console.log(list.nextElementSibling);

    // Traversing the previous sibling
console.log(list.previousSibling);
console.log(list.previousElementSibling);

