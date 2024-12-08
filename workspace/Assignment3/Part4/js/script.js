

// To be clear, part 4 here is unfinished,
// but I wanted to be certain this was submitted by the due date.
// The form will not submit if a non-numeric value is entered in nights, at least.

function validateEmail(email) {

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailPattern.test(email);

}

function validateForm() {


    email = document.querySelector("#email").value
    nights = document.querySelector("#nights").value
    console.log(validateEmail(email))


}
