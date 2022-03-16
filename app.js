let form = document.querySelector("#addForm");
let itemList = document.querySelector("#items");
let filter = document.querySelector("#filter");

// Add item
const addItem = (e) => {
  e.preventDefault();
  // Get input value
  let newItem = document.querySelector("#item").value;
  // Create new li element
  let li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  // Create del button element
  let deleteButton = document.createElement("button");
  // Add classes to del button
  deleteButton.className = "btn btn-danger btn-sm float-end delete";
  // Append text node
  deleteButton.appendChild(document.createTextNode("X"));
  // Append button to li
  li.appendChild(deleteButton);
  // Append li to list
  itemList.appendChild(li);
};

// Remove item
const removeItem = (e) => {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
};

// Filter Items
const filterItems = (e) => {
  // convert text to lowercase
  let text = e.target.value.toLowerCase();
  // Get lis
  let items = itemList.querySelectorAll("li");
  // Convert to an array
  Array.from(items).forEach((item) => {
    let itemName = item.firstChild.textContent;
    if (itemName.toLocaleLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};

form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItems);
