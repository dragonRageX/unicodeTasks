fetch("https://opentdb.com/api.php?amount=10")
    .then(response => response.json())
    .then(data => {
        console.log(data);

        // let questions = "";   //APPLY array.sort() TO SORT THE OPTIONS ALPHABETICALLY.
        // let correctOption = "";
        // let incorrectOptions = "";
        // let incorrectOption2 = "";
        // let incorrectOption3 = "";
        // let Q = document.querySelector(".question");
        // let correct = document.querySelector(".correct-option");
        // let incorrect1 = document.querySelector(".incorrect-option-1");
        // let incorrect2 = document.querySelector(".incorrect-option-2");
        // let incorrect3 = document.querySelector(".incorrect-option-3");

        // for(var i = 0; i < data.results.length; i++)
        // {
        //     questions = data.results[i].question;
        //     Q.innerHTML = questions;

        //     correctOption = data.results[i].correct_answer;
        //     correct.innerHTML = correctOption;
        //     for(var j = 0; j < data.results[i].incorrect_answers.length; j++)
        //     {
        //         incorrectOptions = data.results[i].incorrect_answers[j];
        //         incorrect.innerHTML = incorrectOptions;
        //     }
        //     incorrectOptions = "";
        // }
        // console.log(questions);
        // console.log(correctOption);
        // console.log(incorrectOptions);

        // Q.innerHTML = questions;
        // correct.innerHTML = correctOption;
        // incorrect.innerHTML = incorrectOptions;

        //DISPLAYING QUESTIONS
        let allProperties = "";
        data.results.map(object => {
            allProperties += `<h4><div class = "question">${object.question}</div></h4>
            <div class = "options-holder">
                <input name = "button" type = "radio" /><div class = "correct-option">${object.correct_answer}</div>
                <input name = "button" type = "radio" /><div class = "incorrect-option-1">${object.incorrect_answers[0]}</div>
                <input name = "button" type = "radio" /><div class = "incorrect-option-3">${object.incorrect_answers[1]}</div>
                <input name = "button" type = "radio" /><div class = "incorrect-option-4">${object.incorrect_answers[2]}</div>
            </div>`
        })

        console.log(allProperties);
        let quizBox = document.querySelector(".quiz-box");
        quizBox.innerHTML = allProperties;

        // data.results.map(object => {
        //     questions += `<div class = "question">${object.question}`
        //     correctOptions += `<input name = "button" type = "radio" />${object.correct_answer}`
        //     incorrectOption1 += `<input name = "button" type = "radio" />${object.incorrect_answers[0]}`
        //     incorrectOption2 += `<input name = "button" type = "radio" />${object.incorrect_answers[1]}`
        //     incorrectOption3 += `<input name = "button" type = "radio" />${object.incorrect_answers[2]}`
        // })

        // console.log(questions);
        // console.log(correctOptions);
        // console.log(incorrectOption1);
        // console.log(incorrectOption2);
        // console.log(incorrectOption3);
        // let question = document.querySelector(".question");
        // let option1 = document.querySelector(".correct-option");
        // let option2 = document.querySelector(".incorrect-option-2");
        // let option3 = document.querySelector(".incorrect-option-3");
        // let option4 = document.querySelector(".incorrect-option-4");
        // question.innerHTML = questions;
        // option1.innerHTML = correctOptions;
        // option2.innerHTML = incorrectOption1;
        // option3.innerHTML = incorrectOption2;
        // option4.innerHTML = incorrectOption3;
        
    //     let tableData;
    //     data.countries_stat.map(object => {
    //       tableData += `<tr>   //reduce function array higher order function
    //       <td class = "country-name-data">${object.country_name}</td>
    //       <td class = "cases-data">${object.cases}</td>
    //       <td class = "deaths-data">${object.deaths}</td>
    //    </tr>`;
    //     })
        // let tableBody = document.querySelector(".table-body");
        // tableBody.innerHTML = tableData
        
    })
    .catch(err => console.error(err));