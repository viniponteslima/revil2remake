function Open(url) {
  var body = document.getElementsByTagName('body')[0]
  body.style.transition = "opacity 2s ease-in-out";
  body.style.opacity = '0'
  
  setTimeout(function() {
    var win = window.open(url, '_self');
    win.focus();
  },2000);
}

function loadPage() {
  var now = document.getElementsByTagName("body")[0];
  now.style.transition = "opacity 2s ease-in-out";
  now.style.opacity = "1";
};


/*
function changePage(now, next) {
    var now = document.getElementById(now);
    var next = document.getElementById(next);

    now.style.transition = "opacity 2s ease-in-out";
    next.style.transition = "opacity 1s ease-in-out";
    
    now.style.opacity = "0";
    next.style.opacity = "0";
    
    setTimeout(function() {
      now.style.display = "none";
      next.style.display = "flex";
    }, 2000);


    setTimeout(function() {
      next.style.opacity = "1";
    }, 3000);
    
};
*/


function loadTranslations(language) {
    localStorage.setItem("language", language)
    fetch(`language/${language}.json`)
      .then(response => response.json())  
      .then(translations => applyTranslations(translations))
      .catch(error => console.error('Erro ao carregar as traduções:', error));
}



if (localStorage.getItem("language")) { var language = localStorage.getItem("language"); }
else { var language = "en" }

loadTranslations(language);