const btnSesion = document.querySelectorAll(".sing-in");
const btnRegistrar = document.querySelectorAll(".sing-up");
const formRegister = document.querySelectorAll(".register");
const formLogin = document.querySelectorAll(".login");
const baxShow = document.querySelectorAll(".toggle-password");
const passwordAll = document.querySelectorAll(".pass-show");

// Iterar sobre los elementos seleccionados y agregar el event listener a cada uno
btnSesion.forEach((btn) => {
  btn.addEventListener("click", () => {
    formRegister.forEach((form) => form.classList.add("hidden"));
    formLogin.forEach((form) => form.classList.remove("hidden"));
  });
});

btnRegistrar.forEach((btn) => {
  btn.addEventListener("click", () => {
    formLogin.forEach((form) => form.classList.add("hidden"));
    formRegister.forEach((form) => form.classList.remove("hidden"));
  });
});

//Mostrar el ojo si hay algo escrito.
passwordAll.forEach((password) => {
  password.addEventListener("input", (e) => {
    if (e.target.value.length > 0) {
      baxShow.forEach((show) => {
        show.style.display = "block";
        show.classList.add("bx", "bx-show");
      });
      return;
    }
    baxShow.forEach((show) => {
      show.style.display = "none";
      show.classList.remove("bx", "bx-show");
    });
  });
});

//Mostrar e oculat el password
baxShow.forEach((show) => {
  show.addEventListener("click", (e) => {
    passwordAll.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        show.classList.add("bx-hide");
        show.classList.remove("bx-show");
      } else {
        password.type = "password";
        show.classList.add("bx-show");
        show.classList.remove("bx-hide");
      }
    });
  });
});
