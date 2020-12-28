// Getting Elements by ID
console.log("Getting Elements by ID");

document.getElementById("page-banner");

console.log(document.getElementById("page-banner"));

    // Element ID inside a variable
var bookList = document.getElementById("book-list");
console.log(bookList);

// Getting Elements by Class or Tag Name
console.log("Getting Elements by Class/Tag Name");

var titles = document.getElementsByClassName("title");

Array.from(titles).forEach(function(item)
{
    console.log(item);
}
);

var names = document.getElementsByClassName("name");

Array.from(names).forEach(function(names)
{
    console.log(names);
}
);

// Query Selector
console.log("Query Selector (One item)");

const wmf = document.querySelector("#book-list li:nth-child(2) .name");
console.log(wmf);

console.log("Query Selector (All)");

var allBooks = document.querySelectorAll("#book-list li .name");

Array.from(allBooks).forEach(function(allBooks)
{
    console.log(allBooks);
}
);


