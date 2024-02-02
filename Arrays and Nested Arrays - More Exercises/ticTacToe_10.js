function game(data) {
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]

    let isFirstPlayer = true;

    for (let coordinates of data) {
        let [x, y] = coordinates.split(" ");
        if (dashboard[x][y]) {
            console.log(`This place is already taken. Please choose another!`);
            continue;
        }
        let marker = isFirstPlayer ? "X" : "O";
        dashboard[x][y] = marker;
        if (checkWin(dashboard, marker)) {
            console.log(`Player ${marker} wins!`);
            return printDashboard(dashboard);
        }
        if (!checkFreeSpace(dashboard)) {
            console.log(`The game ended! Nobody wins :(`);
            return printDashboard(dashboard);
        }
        
        isFirstPlayer = !isFirstPlayer;
    }

    function printDashboard(dashboard) {
        dashboard.forEach(row => {
            console.log(row.join("\t"));
        })
    }

    function checkFreeSpace(dashboard) {
        return !!dashboard.flat().filter(x => !x).length;
    }

    function checkWin(dashboard, marker) {
        for (let i = 0; i < dashboard.length; i++) {
            if (dashboard[i][0] === marker &&
                dashboard[i][1] === marker &&
                dashboard[i][2] === marker) {
                return true;
            }
            else if (dashboard[0][i] === marker &&
                dashboard[1][i] === marker &&
                dashboard[2][i] === marker) {
                return true;
            }
            else if (dashboard[0][0] === marker &&
                dashboard[1][1] === marker &&
                dashboard[2][2] === marker) {
                return true;
            }
            else if (dashboard[0][2] === marker &&
                dashboard[1][1] === marker &&
                dashboard[2][0] === marker) {
                return true;
            }

        }
    }
}