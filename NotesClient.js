// class GithubClient {
//   getRepoInfo(repoName, callback) {
//     fetch('https://api.github.com/repos/' + repoName)
//       .then(response => response.json())
//       .then(data => {
//         callback(data)
//       });
//   }
// }

class NotesClient {
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
    .then(response => response.json())
    .then(data => {
      callback(data)
    });

  }
}

module.exports = NotesClient;