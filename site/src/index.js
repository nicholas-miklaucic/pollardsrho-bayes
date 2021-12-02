const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

let html = document.documentElement;
if (prefersDarkScheme.matches) {
  html.classList.add("spectrum--darkest");
  html.classList.remove("spectrum--light");
} else {
  html.classList.add("spectrum--light");
  html.classList.remove("spectrum--darkest");
}


function toggle_theme() {
  let html = document.documentElement;
  if (html.matches(".spectrum--darkest")) {
    html.classList.remove('spectrum--darkest');
    html.classList.add('spectrum--light');
  } else {
    html.classList.remove('spectrum--light');
    html.classList.add('spectrum--darkest');
  }
}


document.getElementById("theme-toggle").addEventListener("click", toggle_theme);

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", toggle_theme);
