var words = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quo eaque est itaque consequatur labore unde blanditiis porro ex provident expedita rerum, temporibus aliquid? Omnis porro ab sint nemo'

var sysText = $('#sysText').text();
$('#userText').text('');
console.log(($('#userText').val().length))

$('#userText').keyup(function (e) {
    let userText = $('#userText').val();
    console.log(userText)
    console.log('sys text' + sysText.slice(0, userText.length))
    if(userText === sysText.slice(0, userText.length)){
        $('#userText').css('color', 'blue');
    }else{
        $('#userText').css('color', 'red');
    }
});

$('#words').keyup(function (e) { 
    let userSentence = $('#words').text();
    var userWord = userSentence.split(' ');
    console.log(userWord)
    userWord.forEach(function(word) {
        console.log(word)
        // let ids = 'word' + userWord.length - 1
        // $('#words').before("<span>"+word+"</span>");
    });
    var currentId = "word" + userWord.length - 1
    if (userText === sysText.slice(0, userText.length)) {
        $(currentId).css('color', 'blue');
    } else {
        $(currentId).css('color', 'red');
    }
});