<DOCTYPE html>
<meta charset="utf-8">
<body>
	<input id="text" type="text" name="form-text"
	placeholder="enter word">
  	<!--<button type="submit">Сохранить</button>-->
  	<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script type = "text/javascript">
		//var words = prompt("Enter word");
		$(document).ready(function(){
			var word = $('#text').val("");
		};
 
		//$(".mytext").keyup(function() {
		         //$('#contenInput').text($(".mytext").val());
		//});
		 
		//});


		//button = function() {
		//$("#input").value; };
		
		//var word = words[Math.floor(Math.random() * words.length)];
		var answerArray = [];
		for (var i = 0; i < word.length; i++) {
		answerArray[i] = "_";
		}
		var remainingLetters = word.length;
			while (remainingLetters > 0) {
			// Показываем состояние игры
			// Запрашиваем вариант ответа
			// Обновляем answerArray и remainingLetters для каждого
			// вхождения угаданной буквы
			}
			alert(answerArray.join(" "));
			var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
			if (guess === null) {
			break;
			} else if (guess.length !== 1) {
			alert("Please, enter only one symbol!");
			} else {
			// Обновляем состояние игры
			} for (var j = 0; j < word.length; j++) {
			if (word[j] === guess) {
			answerArray[j] = guess;
			remainingLetters--;
			}
			}
</script>