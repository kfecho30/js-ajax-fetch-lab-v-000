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
  fetch(`https://api.github.com/repos/${repo}`{
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
    }).then(res => console.log(res));
  }
}

function getToken() {
  return ''
}
