const github = new Github();
const ui = new UI();

const form = document.querySelector('.search__form'),
  searchInput = document.querySelector('.search__input');

form.addEventListener('submit', (e) => {
  const userText = searchInput.value;

  if (userText !== '') {
    // Make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        // Show alert
      } else {
        // Show profile
        ui.showProfile(data.profile);
      }
    });
  }

  e.preventDefault();
});
