const URL = 'https://api.github.com/';

class Advanced {
  // fetch is the dependency window.fetch which is being added into the constructor
  // so that it can be swapped out for a mocked response during testing
  constructor(fetch) {
    this.ajax = fetch;
    this.data = {};
  }

  getData() {
    return this.ajax(URL)
        .then((response) => response.json())
        .then((data) => this.renderData(data));
  }

  renderData(data) {
    if (data.feeds_url) {
      this.data = data;
    }
  }
}

export default Advanced;