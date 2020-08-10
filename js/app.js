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
        ui.showAlert(`User ${userText} not found`);
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.clearProfile();
  }

  e.preventDefault();
});

document.querySelector('.toggle').addEventListener('change', changeTheme);

function changeTheme() {
  console.log('Checked');
  document.querySelector('.main').classList.toggle('main-dark');
  const reposList = document.querySelector('.user-repos__list');
  console.log(reposList);
}
