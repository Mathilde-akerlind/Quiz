document.addEventListener("DOMContentLoaded", function(event) {

    //let idTable = document.getElementById("idTable");
    let divId = document.getElementById("divId");
    let name = document.getElementById("name");
    let button = document.getElementById("button");

    let listChecked = [];

    button.addEventListener("click", function(e) {



        nyttNamn = name.value;
        console.log(nyttNamn);
        divId.append(nyttNamn);



        fetch('https://quizapi.io/api/v1/questions?apiKey=zCcssysJM1WmEOlki5dtfKxsdFdeC6CidlT8lTq0&category=code&difficulty=Easy&limit=2')
            .then(response => response.json())
            .then(quizQuestions => printQuestions(quizQuestions));
    })



    printQuestions = (questions) => {
        for (const question of questions) { //Loopar igenom varje objekt i vår array 

            console.log(question);
            console.log(question.correct_answers);
            let tr1 = document.createElement("tr");
            tr1.append(question.question);
            idTable.append(tr1);



            for (const answer in question.answers) { //loppar igenom varje egenskap i objektet. 
                let answer1 = question.answers[answer];
                let checkBoxId = answer;




                if (answer1 == null) {
                    continue;
                }


                let tr2 = document.createElement("tr");


                var checkbox = document.createElement("INPUT");
                checkbox.setAttribute("type", "checkbox");

                checkbox.id = checkBoxId;
                checkbox.className = "checkClass";
                tr2.append(checkbox);
                tr2.append(answer1);
                idTable.append(tr2);





                checkbox.addEventListener("click", function(e) {
                    console.log(question.correct_answers);


                    addCheckedBox(this, answer, listChecked);
                    console.log(listChecked);


                })



                function addCheckedBox(checkbox, answer, listChecked) {


                    if (checkbox.checked) {
                        listChecked.push(answer);

                    } else {

                        const index = listChecked.indexOf(answer);
                        listChecked.splice(index, 1);
                    }
                }
            }
        }
    }
})