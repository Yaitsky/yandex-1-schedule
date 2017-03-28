module.exports = {
    init: function () {
        this.renderLectureLast = require('./templates/lecture-last');
        this.renderLectureFuture = require('./templates/lecture-future');
        this.lecturesArray = require('./data/lectures.json');
        this.teachersArray = require('./data/teachers.json');
        this.lecturesList = document.querySelector('.schedule__list');

        for (var i = 0; i < this.lecturesArray.length; i++) {
            var item = this.renderLectureLast(this.lecturesArray[i]);

            this.lecturesList.innerHTML += item;
        }
    }
};