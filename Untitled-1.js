function signing() {
    // Get the input values and remove leading/trailing spaces
    let fname = document.getElementById("first").value.trim();
    let mname = document.getElementById("middle").value.trim();
    let lname = document.getElementById("last").value.trim();
    let age = document.getElementById("num").value.trim();

    // Initialize an empty error message
    let errorMessage = "";

    // Validate the first name field
    if (fname.length === 0) {
        errorMessage = "Please enter your First Name.";
    } 
    // Validate the middle name field
    else if (mname.length === 0) {
        errorMessage = "Please enter your Middle Name.";
    } 
    // Validate the last name field
    else if (lname.length === 0) {
        errorMessage = "Please enter your Last Name.";
    } 
    // Validate the age field
    else if (isNaN(age) || age.length === 0 || age <= 0) {
        errorMessage = "Please enter a valid Age. It must be a positive number.";
    }

    // If there is an error message, display it in an alert and prevent form submission
    if (errorMessage) {
        alert(errorMessage);
        return false;
    }

    // If all validations pass, allow form submission
    return true;
}
