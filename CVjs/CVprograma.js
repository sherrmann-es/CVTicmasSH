const div2 = document.getElementById("oculto");


document.getElementById("Cproyecto").addEventListener("click", () => {
  div2.style.display = 'none';
});

document.getElementById("Mproyecto").addEventListener("click", () => {
  div3.style.display = 'none';  
  div2.style.display = '';
});
const div3 = document.getElementById("oculto2");


document.getElementById("Cmateria").addEventListener("click", () => {
    div3.style.display = 'none';
});

document.getElementById("Mmateria").addEventListener("click", () => {
  div2.style.display = 'none';  
  div3.style.display = '';
});