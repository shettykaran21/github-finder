class Github {
  constructor() {
    this.client_id = 'e6ee1b92f53519d81e15';
    this.client_secret = '5b93f2125bc336d09d7389683361e11b05903d63';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
