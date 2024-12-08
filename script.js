document.getElementById("loginButton").addEventListener("click", function() {
    // Obtiene los valores del nombre de usuario y la contraseña
    var username = document.querySelector("input[placeholder='Usuario']").value;
    var password = document.querySelector("input[placeholder='Contraseña']").value;
  
    // Verifica si las credenciales son correctas (puedes cambiar estos valores según tus necesidades)
    if (username === "zeus" && password === "maya") {
      // Credenciales correctas, redirige a tarea.html
      window.location.href = "tarea.html";
    } else {
      // Credenciales incorrectas, muestra un mensaje de error
      alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
      // También podrías mostrar un mensaje en el HTML en lugar de usar un alert
    }


    // Si la autenticación es exitosa, establecer una cookie
  //document.cookie = "authenticated=true; path=/";
  sessionStorage.setItem("authenticated", "true");
  });

// Verifica si el usuario está autenticado al cargar cualquier página
window.addEventListener("load", function() {
  // Si la página no es index.html y no está autenticado, redirige a index.html
  if (sessionStorage.getItem("authenticated") !== "false" && !window.location.href.includes("index.html")) {
      window.location.href = "index.html";
  }
});