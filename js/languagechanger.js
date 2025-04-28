const languageButton = document.getElementById('languageButton');
const languageMenu = document.getElementById('languageMenu');
const currentFlag = document.getElementById('currentFlag');
const menu_home = document.getElementById('menu_home');

languageButton.addEventListener('click', () => {
  languageMenu.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
  if (!languageButton.contains(e.target) && !languageMenu.contains(e.target)) {
    languageMenu.classList.add('hidden');
  }
});

function changeLanguage(lang) {
  if (lang === 'ka') {
    currentFlag.src = 'https://flagcdn.com/w40/ge.png';
    menu_home.textContent = 'მთავარი';
  } else if (lang === 'en') {
    currentFlag.src = 'https://flagcdn.com/w40/gb.png';
    menu_home.textContent = 'home';
  }
  languageMenu.classList.add('hidden');
}


function sendEmail() {
  console.log('sadfas');
  // Get user input values
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // Encode message to handle spaces and special characters
  var email = "info@skycab.ge";
  var mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message);

  // Open the email client
  window.location.href = mailtoLink;
}