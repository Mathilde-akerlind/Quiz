document.addEventListener("DOMContentLoaded", function(event) {

    //let idTable = document.getElementById("idTable");
    let divId = document.getElementById("divId");
    let name = document.getElementById("name");
    let button = document.getElementById("button");
    let button2 = document.getElementById("button2");
    let i = 0;

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
            //console.log(question.correct_answers);
            let tr1 = document.createElement("tr");

            tr1.append(question.question);
            idTable.append(tr1);


            let i = 0;
            button2.addEventListener("click", function(e) {
                //console.log(question.correct_answers);
                //console.log(question.correct_answers);
                //const object = { a: 1, b: 2, c: 3 };
                let nyArray = [];
                //let i = 0;

                for (const correctA in question.correct_answers) {
                    //console.log(question.correct_answers[correctA]);
                    //console.log(correctA);
                    //console.log(question.correct_answers[correctA]);
                    let klippKl = correctA + "_" + question.correct_answers[correctA];
                    //console.log(klippKl);
                    //console.log(question.correct_answers)
                    nyArray.push(klippKl);
                    //console.log(nyArray);
                    //console.log(nyArray.includes(listChecked[i]));

                    console.log(i);
                    /*  console.log(nyArray.includes(listChecked[i]));
                     */

                }
                //console.log(nyArray);
                console.log(nyArray.includes(listChecked[i]));
                console.log("hej");
                i++;
                console.log(i);

                //console.log(nyArray);
                //console.log(nyArray.includes(listChecked[0]));



            })



            for (const answer in question.answers) { //loppar igenom varje egenskap i objektet. 
                let answer1 = question.answers[answer];

                if (answer1 == null) {
                    continue;
                }

                let tr2 = document.createElement("tr");


                let checkbox = document.createElement("INPUT");
                checkbox.setAttribute("type", "checkbox");

                //checkbox.id = answer;
                //checkbox.className = "checkClass";
                tr2.append(checkbox);
                tr2.append(answer1);
                tr1.append(tr2);


                checkbox.addEventListener("click", function(e) {

                    addCheckedBox(this, answer, listChecked);
                    console.log(listChecked);
                })

            }
        }
    }


    function addCheckedBox(checkbox, answer, listChecked) {

        if (checkbox.checked) {
            listChecked.push(answer + "_correct_true");

        } else {
            const index = listChecked.indexOf(answer);
            listChecked.splice(index, 1);
        }
    }







})