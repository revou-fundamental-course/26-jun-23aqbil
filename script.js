let name = "";
let email = "";
let option = "";

function validateForm(e) {
  e.preventDefault();
  let name = document.forms["myForm"]["name"].value;
  let email = document.forms["myForm"]["email"].value;
  let option = document.forms["myForm"]["option"].value;

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
  if (option == "") {
    alert("Option must be filled out");
    return false;
  }

  alert("Berhasil!");
}
