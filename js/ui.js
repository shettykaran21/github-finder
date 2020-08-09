class UI {
  constructor() {
    this.profile = document.querySelector('.profile');
  }

  showProfile(user) {
    // console.log(user);
    this.profile.innerHTML = `
      <div class="user mb-m">
        <div class="user-profile u-center-text">
          <img src="${user.avatar_url}" alt="${user.login}" class="user-profile__photo" />
          <a href="${user.html_url}" target="_blank" class="user-profile__link">View Profile</a>
        </div>
        <div class="user-info">
          <div class="user-info__badges mb-s">
            <span class="badge badge--repos">Public Repos: ${user.public_repos}</span>
            <span class="badge badge--gists">Public Gists: ${user.public_gists}</span>
            <span class="badge badge--followers">Followers: ${user.followers}</span>
            <span class="badge badge--following">Following: ${user.following}</span>
          </div>
          <ul class="user-info__list">
            <li>Name: ${user.name}</li>
            <li>Company: ${user.company}</li>
            <li>Website/Blog: ${user.blog}</li>
            <li>Location: ${user.location}</li>
            <li>Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
      <div class="user-repos">
        <h2 class="mb-s user-repos__heading">Latest Repos</h2>
      </div>
    `;
  }

  showRepos(repos) {
    let output = '<ul class="user-repos__list">';

    repos.forEach((repo) => {
      output += `
        <li class="user-repos__item mb-s">
          <a href="${repo.html_url}" target="_blank" class="user-repos__link">${repo.name}</a>
          <div>
            <span class="badge">Stars:  ${repo.stargazers_count}</span>
            <span class="badge">Watchers:  ${repo.watchers_count}</span>
            <span class="badge">Forks:  ${repo.forks_count}</span>
          </div>
        </li>
      `;
    });
    output += '</ul>';
    document.querySelector('.user-repos').innerHTML += output;
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }

  showAlert(message) {
    this.clearProfile();

    const p = document.createElement('p');
    p.appendChild(document.createTextNode(message));
    p.className = 'alert';

    const form = document.querySelector('.search__form');

    form.insertAdjacentElement('afterend', p);

    setTimeout(() => {
      p.remove();
    }, 5000);
  }
}
