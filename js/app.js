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
  const main = document.querySelector('.main');
  main.classList.toggle('main-dark');

  const repos = document.querySelectorAll('.user-repos__link');

  repos.forEach((repo) => {
    if (main.classList.contains('main-dark')) {
      repo.style.color = '#1e1e1e';
    } else {
      repo.style.color = '#ffffff';
    }
    console.log(repo.style.color);
  });
}
