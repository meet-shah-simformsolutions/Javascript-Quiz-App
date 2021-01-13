function validate() {
    var form1 = document.form;
    var Name = document.forms["myform"]["name"].value;
    var Email = document.forms["myform"]["email"].value;
    var Phone = document.forms["myform"]["phone"].value;

    if (Name == "") {
      alert("Enter Your Name");
      return false;
    }

    else if (Email == "") {
        alert("Enter Your Email");
        return false;
    }

    else if (Phone == "") {
        alert("Enter Your Phone Number");
        return false;
    }
    
  }