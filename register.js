class Register{
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
        const Car = {
            password:document.getElementById("password").value,
            email:document.getElementById("email-id").value
          };
        if(error == 0){
          let myuname = document.getElementById("username").value;
          localStorage.setItem(myuname, JSON.stringify(Car));
          this.form.submit();
        }
      });
    }
  
    validateFields(field){
        var userItem = localStorage.getItem(document.getElementById("username").value);
      if(field.value.trim() == ""){
        this.setStatus(
          field,
          `${field.previousElementSibling.innerText} cannot be blank`,
          "error"
        );
        return false;
      }
      else{
        if(field.type == "password"){
          if(field.value.length < 8){
            this.setStatus(
              field,
              `${field.previousElementSibling.innerText} must be atleast 8 characters`,
              "error"
            );
            return false;
          }else{
            this.setStatus(field,null,"success");
            return true;
          }
        }else if(field.type == "text"){
          if(field.value.length < 4){
            this.setStatus(
              field,
              `${field.previousElementSibling.innerText} must be atleast 4 characters`,
              "error"
            );
            return false;
          }else if(userItem){
            this.setStatus(
              field,
              `This ${field.previousElementSibling.innerText} is already registered`,
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
  
  const form = document.querySelector(".register-form");
  if(form){
    const fields = ["username","password","email-id"];
    const validator = new Register(form,fields);
  }
  
  