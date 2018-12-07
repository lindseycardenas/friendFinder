$('#test').on('click', function () {
    alert('hello');
})


$('#submit').on('click', function () {
    const survey = {
        name: $('#name').val(),
        image: $('#image').val(),
        scores: [
            $('#question1').val(),
            $('#question2').val(),
            $('#question3').val(),
            $('#question4').val(),
            $('#question5').val(),
            $('#question6').val(),
            $('#question7').val(),
            $('#question8').val(),
            $('#question9').val(),
            $('#question10').val()
        ]
    }

    $.ajax({
        method: "POST",
        url: '/api/friend',
        data: survey
    }).then(function (res) {
        console.log(res);
    })

    console.log(survey);
})