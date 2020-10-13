document.addEventListener("DOMContentLoaded", function(event) {

    //let idTable = document.getElementById("idTable");
    let divId = document.getElementById("divId");
    let name = document.getElementById("name");
    let button = document.getElementById("button");
    let button3 = document.getElementById("button3");


    button.addEventListener("click", function(e) {

        let game = new Game();



        nyttNamn = name.value;
        console.log(nyttNamn);
        divId.append(nyttNamn);
    })



    button3.addEventListener("click", function(e) {
        location.reload();
    })
})

class Answer { //Min klass wooo
    constructor(dataAnswer) {
        this.answer_key = dataAnswer;
    }
}