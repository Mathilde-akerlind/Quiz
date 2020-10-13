class Game {
    constructor() {
        fetch('https://quizapi.io/api/v1/questions?apiKey=zCcssysJM1WmEOlki5dtfKxsdFdeC6CidlT8lTq0&category=code&difficulty=Easy&limit=5')
            .then(response => response.json())
            .then(quizQuestions => this.printQuestions(quizQuestions));
    }




    printQuestions(questions) {
        let i = 0;
        let listChecked = [];
        let scoreCount = 0;

        for (const question of questions) { //Loopar igenom varje objekt, dvs alla svar i själva frågan.
            //  console.table(question); //woaahh
            console.log(question);

            let tr1 = document.createElement("tr");
            tr1.id = "tr1";
            tr1.append(question.question); // Vi lägger till frågan i DOM. 
            idTable.append(tr1);
            let nyArray = [];




            for (const answer in question.answers) { //loppar igenom varje egenskap i objektet med frågorna. och skriv ut i DOM 
                let myAnswer = new Answer(answer)
                    //console.log(myAnswer);
                let answer1 = question.answers[myAnswer.answer_key];

                if (answer1 == null) {
                    continue; //Hoppar ur varvet i loop
                }

                let tr2 = document.createElement("tr");

                let checkbox = document.createElement("INPUT");
                checkbox.setAttribute("type", "checkbox");

                tr2.append(checkbox); //Vi lägger till själva frågan och en checbox på varje rad, detta görs varje varv loppen körs
                tr2.append(answer1);
                tr1.append(tr2);




                checkbox.addEventListener("click", function(e) { // Eventlyssnare på checkbox, kör funktionen 

                    addCheckedBox(this, answer, listChecked);
                    console.log(listChecked);
                })
            }


            function addCheckedBox(checkbox, answer, listChecked) { //Funktion som körs varje gång man klickar på en checkbox,
                //Vi kollar om boxen är checkad när vi klickar på den isf pusha in svar i array.
                if (checkbox.checked) { // Annars ta bort svar ur array
                    listChecked.push(answer + "_correct_true");

                } else {
                    const index = listChecked.indexOf(answer);
                    listChecked.splice(index, 1);
                }
            }


            let button2 = document.getElementById("button2");
            button2.addEventListener("click", function(e) { //Knapp för att rätta svar



                for (const correctA in question.correct_answers) {

                    let cutAndGlueToArray = correctA + "_" + question.correct_answers[correctA];
                    //console.log(cutAndGlueToArray);   //klipp ut key+value för varje objekt, sätt ihop till en ny array
                    nyArray.push(cutAndGlueToArray);

                }
                if (nyArray.includes(listChecked[i]) == true) { //Om array innehåller klickat svar, return true, och man får ett poäng
                    //console.log("HEJMAN");
                    scoreCount++;
                    console.log(scoreCount + " scoreCount");
                }


                console.log("i = " + i);
                i++;

                if (i == listChecked.length) {
                    console.log("Du fick " + scoreCount + " poäng!"); //När det inte finns fler frågor, skriv ut poäng 
                    divId.append(" fick " + scoreCount + " poäng!")
                    console.log("i = " + i);
                }

            })
        }
    }
}