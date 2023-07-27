function limpiarFormulario() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementsByName("assistance").checked = false;
    document.getElementById("guests").value = "";
    document.getElementById("restrict-food").value = "";
    document.getElementById("message").value = "";
    
    let radios = document.getElementsByName("assitance");
    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
    
    return;
  }

  /* document.getElementById("form-wedding").addEventListener("submit", function(event) {
      event.preventDefault(); // Detiene el envío predeterminado del formulario
      limpiarFormulario();
  }); */