function helloWorld() {
    var templates = require('./templates/App');

    var friends = [
        {
            userName: 'Hello!'
        },
        {
            userName: 'Hello!!!'
        },
        {
            userName: 'Hello!!!!!!!'
        }
    ]

    var html = templates({
        friends: friends
    });

    document.querySelector('#block').innerHTML = html;
}

module.exports = {
    func: helloWorld
};