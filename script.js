class TicTacToe {
    constructor() {
        this.data = [
            ["", "", "",
            "", "", "",
            "", "", ""],
        ];
        this.currentOption = "x";
        this.state = null;
        this.cubes = document.querySelectorAll(".cube")
    }

    main() {
        this.drawTicTacToe();
    }

    drawTicTacToe() {
        this.cubes.forEach((cube, i) => {
            cube.addEventListener("click", () => {
                if (this.state !== null) return;
                if (this.data[i] === "x" || this.data[i] === "o") return;
                this.data[i] = this.currentOption;
                this.addImg(this.currentOption, cube);
                this.checkWin(this.currentOption, this.data);
                this.checkDraw(this.data);
                this.currentOption === "o" ? this.currentOption = "x" : this.currentOption = "o";
            });
        })

    }

    addImg(option, cube) {
        const img = document.createElement("img");
        option === "x" ? img.src = "./assets/x.svg" : img.src = "./assets/o.svg";
        cube.appendChild(img);
    }

    checkWin(option, arr) {
        if ((arr[0] === option && arr[1] === option && arr[2] === option) ||
            (arr[3] === option && arr[4] === option && arr[5] === option) ||
            (arr[6] === option && arr[7] === option && arr[8] === option) ||
            (arr[0] === option && arr[3] === option && arr[6] === option) ||
            (arr[1] === option && arr[4] === option && arr[7] === option) ||
            (arr[2] === option && arr[5] === option && arr[8] === option) ||
            (arr[0] === option && arr[4] === option && arr[8] === option) ||
            (arr[2] === option && arr[4] === option && arr[6] === option))
            this.over(option);
    }

    checkDraw(data) {
        let count = 0;
        data.forEach((item) => {
            if(item !== '') count++;
        })
        if(count === 9) this.over();
    }

    over(option) {
        if(this.state === 'over') return;
        this.state = 'over';
        let str;
        option === undefined ? str = `<p class="over-text">Its draw</p>` : str = `<p class="over-text">The Player ${option} win</p>`
        setTimeout (() => {
            document.querySelector(".tic-tac-toe").style.display = 'none';
            const div = document.querySelector(".over");
            div.style.display = "flex";
            div.innerHTML = str + `<p class="over-text">To Restart Game Reload The Page</p>`;
        }, 1000);
    }
}

const ticTacToe = new TicTacToe;
ticTacToe.main()
