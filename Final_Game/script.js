"use strict";
import {Sudoku} from "./sudoku.js";
import {GRID_SIZE, BOX_SIZE, convertIndexToPosition, convertPositionToIndex} from "./Utilits/utitlits.js";
import {MAIN_AUDIO, PENCIL_AUDIO, ERROR_AUDIO, WIN_AUDIO} from "./Utilits/audio.js"
import {getInfoForGame, storeInfo, TABLE_LIDERS} from "./Utilits/getInfo.js"

let showLeaderboard = false;
const infoPlayer = await getInfoForGame()
const sudoku = new Sudoku(infoPlayer.DIFFICULTY);
// toggleLeaderboard()

let cells;
let selectedCellIndex;
let selectedCell;
const numbers = document.querySelectorAll('.number');
const remover = document.querySelector('.remove');
init();

function init() {
    initCells();
    initNumbers();
    initRemover();
    initKeyEvent();
}

function initCells() {
    cells = document.querySelectorAll('.cell');
    fillCells();
    initCellsEvent();
}

function fillCells() {
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
        const {row, column} = convertIndexToPosition(i);
// заполняем поле
        if (sudoku.grid[row][column] !== null) {
            cells[i].classList.add('filled');
            cells[i].innerHTML = sudoku.grid[row][column];
        }
    }
}

function initCellsEvent() {
    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => onCellClick(cell, index))
    });
}

function onCellClick(clickedCell, index) {
    cells.forEach(cell => cell.classList.remove('highlighted', 'selected', 'error'));
// если поле заполнено, то ничего не делаем, если наоборот, то выделяем
    if (clickedCell.classList.contains('filled')) {
        selectedCellIndex = null;
        selectedCell = null;
    } else {
        selectedCellIndex = index;
        selectedCell = clickedCell;
        clickedCell.classList.add('selected');
        highlightCellsBy(index);
    }

    if (clickedCell.innerHTML === '') return;
    cells.forEach(cell => {
        if (cell.innerHTML === clickedCell.innerHTML) cell.classList.add('selected');
    });
}

function highlightCellsBy(index) {
    highlightColumnBy(index);
    highlightRowBy(index);
    highlightBoxBy(index);
}

function highlightColumnBy(index) {
    const column = index % GRID_SIZE;
    for (let row = 0; row < GRID_SIZE; row++) {
        const cellIndex = convertPositionToIndex(row, column);
        cells[cellIndex].classList.add('highlighted');
    }
}

function highlightRowBy(index) {
    const row = Math.floor(index / GRID_SIZE);
    for (let column = 0; column < GRID_SIZE; column++) {
        const cellIndex = convertPositionToIndex(row, column);
        cells[cellIndex].classList.add('highlighted');
    }
}

function highlightBoxBy(index) {
    const column = index % GRID_SIZE;
    const row = Math.floor(index / GRID_SIZE);
    const firstRowInBox = row - row % BOX_SIZE;
    const firstColumnInBox = column - column % BOX_SIZE;

    for (let iRow = firstRowInBox; iRow < firstRowInBox + BOX_SIZE; iRow++) {
        for (let iColumn = firstColumnInBox; iColumn < firstColumnInBox + BOX_SIZE; iColumn++) {
            const cellIndex = convertPositionToIndex(iRow, iColumn)
            cells[cellIndex].classList.add('highlighted');
        }
    }
}

function initNumbers() {

    numbers.forEach((number) => {
        number.addEventListener('click', () => onNumberClick(parseInt(number.innerHTML)))
    });
}

function onNumberClick(number) {
    if (!selectedCell) return;
    if (selectedCell.classList.contains('filled')) return;

    cells.forEach(cell => cell.classList.remove('error', 'zoom', 'shake', 'selected'));
    selectedCell.classList.add('selected');
    setValueInSelectedCell(number);

    if (!sudoku.hasEmptyCells()) {
        MAIN_AUDIO.pause();
        WIN_AUDIO.play()
        setTimeout(() => winAnimation(), 500);
    }
}

function setValueInSelectedCell(value) {
    const {row, column} = convertIndexToPosition(selectedCellIndex);
    const duplicatesPositions = sudoku.getDuplicatePositions(row, column, value);
    if (duplicatesPositions.length) {
        ERROR_AUDIO.play()
        highlightDuplicates(duplicatesPositions);
        return;
    }
    sudoku.grid[row][column] = value;
    PENCIL_AUDIO.play()
    selectedCell.innerHTML = value;
    setTimeout(() => selectedCell.classList.add('zoom'), 0);
}

function highlightDuplicates(duplicatesPositions) {
    duplicatesPositions.forEach(duplicate => {
        const index = convertPositionToIndex(duplicate.row, duplicate.column);
        setTimeout(() => cells[index].classList.add('error', 'shake'), 0);
    });
}

function initRemover() {
    remover.addEventListener('click', () => onRemoveClick());
}

function onRemoveClick() {
    if (!selectedCell) return;
    if (selectedCell.classList.contains('filled')) return;

    cells.forEach(cell => cell.classList.remove('error', 'zoom', 'shake', 'selected'));
    selectedCell.classList.add('selected');
    const {row, column} = convertIndexToPosition(selectedCellIndex);
    selectedCell.innerHTML = '';
    sudoku.grid[row][column] = null;
}

function initKeyEvent() {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace') {
            onRemoveClick();
        } else if (event.key >= '1' && event.key <= '9') {
            onNumberClick(parseInt(event.key));
        }
    });
}

async function winAnimation() {
    window.onbeforeunload = null;
    remover.removeEventListener('click', onRemoveClick);
    document.removeEventListener('keydown', initKeyEvent);
    cells.forEach(cell => cell.classList.remove('highlighted', 'selected', 'zoom'));
    cells.forEach((cell, i) => {
        setTimeout(() => cell.classList.add('highlighted', 'zoom'), i * 15);
    });
    for (let i = 1; i < 8; i++) {
        setTimeout(() => cells.forEach(cell => cell.classList.toggle('highlighted')), 500 + cells.length * 15 + 300 * i);
    }

    initCells()
    showLeaderboard = true
    await storeInfo()
    toggleLeaderboard()
}

function toggleLeaderboard() {
    if (showLeaderboard) {
        let tableDiv = document.createElement('div');
        tableDiv.classList.add('tableDivMaterial');
        tableDiv.style.zIndex = "9999";
        tableDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        tableDiv.style.position = "fixed"
        let table = document.createElement('table');
        table.classList.add('leaderboard');

        let thead = document.createElement('thead');
        let trHead = document.createElement('tr');

        let thName = document.createElement('th');
        thName.textContent = 'Имя';
        thName.style.textAlign = 'center';
        trHead.appendChild(thName);

        let thDifficulty = document.createElement('th');
        thDifficulty.textContent = 'Сложность';
        thDifficulty.style.textAlign = 'center';
        trHead.appendChild(thDifficulty);

        thead.appendChild(trHead);
        table.appendChild(thead);

        let tbody = document.createElement('tbody');
        for (let i = 0; i < TABLE_LIDERS.length; i++) {
            let object = TABLE_LIDERS[i];
            let tr = document.createElement('tr');

            let tdName = document.createElement('td');
            tdName.textContent = object.player_name;
            tdName.style.textAlign = 'left';
            tr.appendChild(tdName);

            let tdDifficulty = document.createElement('td');
            tdDifficulty.textContent = object.difficulty;
            tdDifficulty.style.textAlign = 'center';
            tr.appendChild(tdDifficulty);

            tbody.appendChild(tr);
        }

        table.appendChild(tbody);

        tableDiv.appendChild(table);

        let restartButton = document.createElement('button');
        restartButton.textContent = 'Начать заново';
        restartButton.classList.add('restart-button');
        restartButton.addEventListener('click', function () {
            location.reload();
        });

        tableDiv.appendChild(restartButton);

        document.body.appendChild(tableDiv);
    }
}

window.onbeforeunload = befUnload;


function befUnload(EO) {
    EO = EO || window.event;
    EO.returnValue = 'При попытке выхода из игры, данные будут утеряны';
}