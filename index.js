
function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
  const repo ='kfecho/javascript-fetch-lab'
  const data = {
    title = $('#title').val();
    body = $('#body').val();
  }
  const token = getToken()
  fetch('https://api.github.com/repos/${repo}/issues', {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      Authorization: `token ${token}`
    }
  })
  getIssues()
}

function showResults(json) {
  $('#results').append(json.html_url);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = getToken()

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json))
}

function getToken() {
  return ''
}
