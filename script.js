/* class Quiz {
    constructor()
}
 */

document.addEventListener("DOMContentLoaded", function(event) {

    let id1 = document.getElementById("id1");
    let id2 = document.getElementById("id2");

    button.addEventListener("click", function(e) {
        fetch('https://quizapi.io/api/v1/questions?apiKey=zCcssysJM1WmEOlki5dtfKxsdFdeC6CidlT8lTq0&category=code&difficulty=Easy&limit=1&tags=JavaScript')
            .then(response => response.json())
            .then(quizQuestions => console.log(quizQuestions))

        let id1 = quizQuestions.question;
    })






    /*  printQuestions = (questions) => {
         for (const question of questions) {
             console.log(question.question);
             console.log(question.answers)



         }
     } */

})


//createElement