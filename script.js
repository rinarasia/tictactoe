window.onload = function() {

    function Gameboard() {
        const rows = 3;
        const columns = 3;
        const board = [];

        for(let i = 0; i < rows; i++) {
            board[i] = [];
            for(let j = 0; j < columns; j++) {
                board[i].push('X');
            }
        }

        const getBoard = () => board;
        console.log(board);
        logArray(board[0]);
        logArray(board[1]);
        logArray(board[2]);
    }

    function Player(name, marker) {
        this.name = name;
        this.marker = marker;
    }
    
    function logArray(array) {
        let gameboard = document.getElementById('gameboard');

        array.forEach(element => {
            let div = document.createElement("div");
            let mark = element;
            div.innerHTML = mark;

            gameboard.appendChild(div);
            console.log(element);
        });
    }

    Gameboard();
}