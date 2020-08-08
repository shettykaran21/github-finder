class UI {
  constructor() {
    this.profile = document.querySelector('.profile');
  }

  showProfile(user) {
    console.log(user);
    this.profile.innerHTML = `
      <div>
        <img src="" alt="${user}" />
      </div>
    `;
  }
}
