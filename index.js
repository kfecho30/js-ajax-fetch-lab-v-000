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
  })
}

function getToken() {
  const token = '3c1cd86a8d162ead8772f0862a330e5f20881d40'

  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
