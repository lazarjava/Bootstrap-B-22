function view() {
  const api = "https://phonebook-staeff.surge.sh/"; // Check if this returns JSON

  fetch(api)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
                                        // Display formatted JSON in #view
      document.getElementById("view").innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => {
      document.getElementById("view").innerHTML = "Error: " + error.message;
    });
}

function add() {                        /// Add new entry the phone person name contact number 
  const name = document.getElementById("name").value;
  const phoneno = document.getElementById("phoneno").value;

  if (!name || !phoneno) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Data added successfully");

  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      phone: phoneno,
    }),
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("view").innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => {
      console.log("Error:", error);
      document.getElementById("view").innerHTML = "Error: " + error.message;
    });
}

function updateData() {
  alert("Data updated successfully");

  fetch('https://jsonplaceholder.typicode.com/posts/3', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: 3,
      title: 'Updated Post',
      body: 'This is the content of the updated post.',
      userId: 1
    }),
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("view").innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => {
      console.error("Error updating data:", error);
      document.getElementById("view").innerHTML = "Error updating data: " + error.message;
    });
}

function deleteData() {
  alert("Attempting to delete...");

  fetch('https://jsonplaceholder.typicode.com/posts/2', {
    method: 'DELETE',
  })
    .then(response => {
      if (response.ok) {
        document.getElementById("view").innerHTML = "Item deleted successfully.";
        console.log('Item deleted successfully');
      } else {
        throw new Error("Failed to delete item");
      }
    })
    .catch(error => {
      console.error("Error deleting item:", error);
      document.getElementById("view").innerHTML = "Error deleting item: " + error.message;
    });
}

