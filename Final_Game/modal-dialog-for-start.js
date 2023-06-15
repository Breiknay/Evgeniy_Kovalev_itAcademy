import {MAIN_AUDIO} from "./Utilits/audio.js"

export let DIFFICULTY_STRING = "";
export let NAME = ""

export function startGame() {
    return new Promise(function (resolve, reject) {

        let tableDiv = document.createElement('div');
        tableDiv.classList.add('tableDivMaterialForDialog');

        let nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('name', 'name')
        nameInput.setAttribute('placeholder', 'Введите ваше имя');
        nameInput.classList.add('inputField');
        tableDiv.appendChild(nameInput);

        let errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        tableDiv.appendChild(errorMessage);

        let difficultySelect = document.createElement('select');
        difficultySelect.classList.add('selectField');
        // Добавьте остальные нужные стили

        let easyOption = document.createElement('option');
        easyOption.value = 'Легко';
        easyOption.text = 'Легко';
        difficultySelect.appendChild(easyOption);

        let mediumOption = document.createElement('option');
        mediumOption.value = 'Средне';
        mediumOption.text = 'Средне';
        difficultySelect.appendChild(mediumOption);

        let hardOption = document.createElement('option');
        hardOption.value = 'Сложно';
        hardOption.text = 'Сложно';
        difficultySelect.appendChild(hardOption);

        tableDiv.appendChild(difficultySelect);

        let continueButton = document.createElement('button');
        continueButton.textContent = 'Начать игру';
        continueButton.classList.add('continueButton');
        // Добавьте остальные нужные стили

        continueButton.addEventListener('click', function () {
            // Проверка наличия введенного имени
            if (nameInput.value.trim() === '') {
                nameInput.classList.add('invalid');
                errorMessage.textContent = 'Пожалуйста, введите имя';
                errorMessage.style.display = 'block';
            } else {
                MAIN_AUDIO.play();
                NAME = nameInput.value;
                DIFFICULTY_STRING = difficultySelect.value
                resolve()
                document.body.removeChild(tableDiv);
            }
        });

        tableDiv.appendChild(continueButton);

        document.body.appendChild(tableDiv);
    });
}