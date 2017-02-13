var test = {
	createTitle: function() {
		var title = document.createElement('h3');
		title.classList = "center";
		title.style.textAlign = 'center';
		title.style.marginTop = '20px';
		title.style.marginBottom = '20px';
		title.innerHTML = "Тест по программированию"

		var body = document.querySelector('body');

		body.appendChild(title);
	},
	createForm: function() {
		var form = document.createElement('form');

		var parrent = document.querySelector('body');

		parrent.appendChild(form);
	},
	createQuestions: function() {
		var questionsList = document.createElement('ol');
		questionsList.style.marginLeft = '10%';

		var body = document.querySelector('form');

		body.appendChild(questionsList);

		var question1 = document.createElement('li');
		question1.innerHTML = "<h5>Вопрос №1</h5>"
		var question2 = document.createElement('li');
		question2.innerHTML = "<h5>Вопрос №2</h5>"
		var question3 = document.createElement('li');
		question3.innerHTML = "<h5>Вопрос №3</h5>"

		var parrent = document.querySelector('ol');

		parrent.appendChild(question1);
		parrent.appendChild(question2);
		parrent.appendChild(question3);
	},
	createAnswers: function() {
		var answer1 = document.createElement('div');
		answer1.innerHTML = '<label><input type="checkbox"> Вариант ответа №1</label> <br />' + 
		'<label><input type="checkbox"> Вариант ответа №2</label> <br />' +
		'<label><input type="checkbox"> Вариант ответа №3</label> <br />';
		var answer2 = document.createElement('label');
		answer2.innerHTML = '<label><input type="checkbox"> Вариант ответа №1</label> <br />' + 
		'<label><input type="checkbox"> Вариант ответа №2</label> <br />' +
		'<label><input type="checkbox"> Вариант ответа №3</label> <br />';
		var answer3 = document.createElement('label');
		answer3.innerHTML = '<label><input type="checkbox"> Вариант ответа №1</label> <br />' + 
		'<label><input type="checkbox"> Вариант ответа №2</label> <br />' +
		'<label><input type="checkbox"> Вариант ответа №3</label> <br />';

		var parrent = document.querySelectorAll('li');

		parrent[0].appendChild(answer1);
		parrent[1].appendChild(answer2);
		parrent[2].appendChild(answer3);
	},
	createButton: function() {
		var button = document.createElement('div');
		button.innerHTML = '<button class="btn btn-primary">Проверить мои результаты</button>'
		button.style.textAlign = 'center';

		var parrent = document.querySelector('form');

		parrent.appendChild(button);
	}
}

test.createTitle();
test.createForm();
test.createQuestions();
test.createAnswers();
test.createButton();