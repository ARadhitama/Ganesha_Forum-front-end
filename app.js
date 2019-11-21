const axios = require('axios')

function getPost() {
    axios
        .get('localhost:9000/post?_limit=10')
        .then(res => showPost(res))
        .catch(err => console.log(err));
}

function addPost() {
    axios
        .post('localhost:9000/post/', {
            topik : postTopic,
            user_id : '2',
            title : postTitle,
            text : postText
        })
        .then()
        .catch(err => console.err)
}

function showPost(res) {

}

function performNewPost (e) {
    var resultElement = document.getElementById('');
    var postTopic = document.getElementById('').value;
    var postTitle = document.getElementById('').value;
    var postText = document.getElementById('').value;
}

/**** EVENT LISTENER ****/ 

document.getElementById('').addEventListener('submit', performNewPost);