/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
document.addEventListener("DOMContentLoaded", function () {
    resetForm();
});

function resetForm() {
    document.getElementById("enrollmentForm").reset();
    document.getElementById("rollNo").disabled = false;
    document.getElementById("rollNo").focus();
    disableButtons();
}

function saveData() {
    // Implement saving data to the database (you can use PHP and AJAX here).
    // Example: Send a POST request to a server-side script for data processing.
    // After successful saving, call resetForm().

    alert("Data saved to the database.");
}

function updateData() {
    // Implement updating data in the database (you can use PHP and AJAX here).
    // Example: Send a POST request to a server-side script for data processing.
    // After successful updating, call resetForm().

    alert("Data updated in the database.");
}

function disableButtons() {
    document.querySelector("button[type='button'][onclick='saveData']").disabled = true;
    document.querySelector("button[type='button'][onclick='updateData']").disabled = true;
}

function enableButtons() {
    document.querySelector("button[type='button'][onclick='saveData']").disabled = false;
    document.querySelector("button[type='button'][onclick='updateData']").disabled = false;
}


