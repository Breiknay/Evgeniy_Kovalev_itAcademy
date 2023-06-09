import { GRID_SIZE, BOX_SIZE } from "./Utilits/utitlits.js";
import { generationSudoku, findEmptyCell } from "./genetationSudoku.js";

export class Sudoku {
    constructor(difficulty) {
        this.grid = generationSudoku(difficulty); //сетка судоку
    }
//кордианаты всех дублирующих значений
    getDuplicatePositions(row, column, value) {
        const duplicatesInColumn = this.getDuplicatePositionsInColumn(row, column, value)
        const duplicatesInRow = this.getDuplicatePositionsInRow(row, column, value);
        const duplicatesInBox = this.getDuplicatePositionsInBox(row, column, value);

        const duplicates = [...duplicatesInColumn, ...duplicatesInRow];
        duplicatesInBox.forEach(duplicateInBox => {
            if (duplicateInBox.row !== row && duplicateInBox.column !== column) duplicates.push(duplicateInBox);
        });

        return duplicates;
    }

    getDuplicatePositionsInColumn(row, column, value) {
        const duplicates = [];
        for (let iRow = 0; iRow < GRID_SIZE; iRow++) {
            if (this.grid[iRow][column] === value && iRow !== row) {
                duplicates.push({ row: iRow, column });
            }
        }
        return duplicates;
    }

    getDuplicatePositionsInRow(row, column, value) {
        const duplicates = [];
        for (let iColumn = 0; iColumn < GRID_SIZE; iColumn++) {
            if (this.grid[row][iColumn] === value && iColumn !== column) {
                duplicates.push({ row, column: iColumn });
            }
        }
        return duplicates;
    }

    getDuplicatePositionsInBox(row, column, value) {
        const duplicates = [];
        const firstRowInBox = row - row % BOX_SIZE;
        const firstColumnInBox = column - column % BOX_SIZE;

        for (let iRow = firstRowInBox; iRow < firstRowInBox + BOX_SIZE; iRow++) {
            for (let iColumn = firstColumnInBox; iColumn < firstColumnInBox + BOX_SIZE; iColumn++) {
                if (this.grid[iRow][iColumn] === value && iRow !== row && iColumn !== column) {
                    duplicates.push({ row: iRow, column: iColumn });
                }
            }
        }
        return duplicates;
    }
//проверка на заполнение всех полей
    hasEmptyCells() {
        return Boolean(findEmptyCell(this.grid));
    }
}