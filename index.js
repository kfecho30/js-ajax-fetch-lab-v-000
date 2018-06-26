function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`{
    method: 'POST',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(resp => let repo = new Repo(resp);
      $('#results').append(repo.template()));
}

function getToken() {
  return ''
}
