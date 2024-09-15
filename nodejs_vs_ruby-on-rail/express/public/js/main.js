document.addEventListener("DOMContentLoaded", function () {
    const userList = document.getElementById("users");
    const addUserButton = document.getElementById("add-user");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    // Fetch all users
    function fetchUsers() {
        fetch("/users")
            .then((response) => response.json())
            .then((users) => {
                userList.innerHTML = "";
                users.forEach((user) => {
                    const li = document.createElement("li");
                    li.textContent = `${user.name} - ${user.email}`;
                    userList.appendChild(li);
                });
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    }
    

    // Add user
    addUserButton.addEventListener("click", function () {
        const name = nameInput.value;
        const email = emailInput.value;

        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email }),
        })        
            .then((response) => response.json())
            .then(() => {
                nameInput.value = "";
                emailInput.value = "";
                fetchUsers(); // Refresh user list
            });
    });

    // Load users on page load
    fetchUsers();
});
