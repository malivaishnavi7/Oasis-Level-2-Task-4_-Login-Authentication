class Login{
  constructor(form,fields){
    this.form = form;
    this.fields = fields;
    this.validateOnSubmit();
  }

  validateOnSubmit(){
    let self = this;

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      var error = 0;
      self.fields.forEach((field) => {
        const input = document.querySelector(`#${field}`);
        if(self.validateFields(input) == false){
          error++;
        }
      });

      if(error == 0){
        localStorage.setItem("auth",1);
        this.form.submit();
      }
    });
  }

  validateFields(field){
    var getItem = localStorage.getItem(document.getElementById("username").value);
    if(field.value.trim() == ""){
      this.setStatus(
        field,
        `${field.previousElementSibling.innerText} cannot be blank`,
        "error"
      );
      return false;
    }
    else{
      if(field.type == "text"){
        // console.log(getItem);
        if(field.value.length < 4){
          this.setStatus(
            field,
            `${field.previousElementSibling.innerText} must be atleast 4 characters`,
            "error"
          );
          return false;
        }else if(!(getItem)){
          this.setStatus(
            field,
            `${field.previousElementSibling.innerText} is not registered.`,
            "error"
          );
          return false;
        }
        else{
          this.setStatus(field,null,"success");
          return true;
        }
      }else{
        //console.log(getItem);
        if(field.value.length < 8){
          this.setStatus(
            field,
            `${field.previousElementSibling.innerText} must be atleast 8 characters`,
            "error"
          );
          return false;
        }else if(getItem!=null && (JSON.parse(getItem).password != field.value)){
          this.setStatus(
            field,
            `${field.previousElementSibling.innerText} is wrong`,
            "error"
          );
          return false;
        }
        else{
          this.setStatus(field,null,"success");
          return true;
        }
      }
    }
  }

  setStatus(field,message,status){
    const errorMessage = field.parentElement.querySelector(".error-message");
    
    if(status == "success"){
      if(errorMessage){
        errorMessage.innerText = "";
        field.classList.remove("input-error");
      }
    }

    if(status == "error"){
      errorMessage.innerText = message;
      field.classList.add("input-error");
    }
  }
}

const form = document.querySelector(".login-form");
if(form){
  const fields = ["username","password"];
  const validator = new Login(form,fields);
}
