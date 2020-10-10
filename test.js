/* document.addEventListener("DOMContentLoaded", function(event) {

    class Question {
        constructor(question) {
            this.id = question.id;
            this.question = question.question;
            this.description = question.description;
            this.answers = question.answers;

        }
    }

    class QuestionSet {
        constructor(questions) {
            this.questions = [];

            for (let question of questions) {
                this.questions.push(new Question(question));
            }
        }

        list() {
            console.log(this.questions);
            console.log(this.questions[0].answers);

        }
    }



    fetch("https://quizapi.io/api/v1/questions?apiKey=W31tNqdR7F6wxDDk27nCAGAhzgBWspm8u3Wm6zig&limit=3")
        .then(response => response.json())
        .then(data => {
            let questions = new QuestionSet(data);
            questions.list();
        })

}) */