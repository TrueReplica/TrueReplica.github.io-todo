'use strict';
let button = document.getElementById('enter');
let input = document.getElementById('userinput');
let ul = document.querySelector('ul');

function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);

	li.addEventListener('click', function () {
		let finished = this.classList.toggle('done');
		let removeButton = document.createElement('button');
		removeButton.classList.add('deleteButton');

		if (finished) {
			removeButton.appendChild(
				document.createTextNode('Remove')
			);
			removeButton.classList = 'deleteButton';
			li.appendChild(removeButton);

			removeButton.addEventListener('click', function () {
				this.parentElement.remove();
			});
		} else {
			this.getElementsByClassName('deleteButton')[0].remove();
		}
	});
	input.value = '';
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterPress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterPress);
