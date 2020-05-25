let instruction = document.getElementById('instruction');
let msg = document.getElementById('msg');

// adding Comma to the number
function addCommas(nStr) {
    nStr += '';
    let x = nStr.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

// Selection of numbers
function select(n) {

    // different msg for different levels
    //1
    if (n == 10) {
        instruction.innerHTML =
            `So This Is The Easiest Level,<br> We Have selected a Number Between <span id="levelDisplay1">1</span> And <span id="levelDisplay">10</span>. <br><span class="intro2"> See if you can guess it. </span>`;
    }

    // 2
    if (n == 100) {
        instruction.innerHTML =
            `So This Is an Easy Level,<br> We Have selected a Number Between <span id="levelDisplay1">1</span> And <span id="levelDisplay">10</span>. <br><span class="intro2"> See if you can guess it. </span>`;
    }

    //3
    if (n == 1000) {
        instruction.innerHTML =
            `So This Is a Moderate Level,<br> We Have selected a Number Between <span id="levelDisplay1">1</span> And <span id="levelDisplay">10</span>.<br><span class="intro2"> See if you can guess it. </span>`;
    }

    //4
    if (n == 10000) {
        instruction.innerHTML =
            `So This Is a pretty challenging Level,<br> We Have selected a Number Between <span id="levelDisplay1">1</span> And <span id="levelDisplay">10</span>. <br><span class="intro2"> See if you can guess it. </span>`;
    }

    //5
    if (n == 100000) {
        instruction.innerHTML =
            `Try this Ultra pro Level,<br> We Have selected a Number Between <span id="levelDisplay1">1</span> And <span id="levelDisplay">10</span> <br><span class="intro2"> See if you can guess it. </span>`;
    }

    //6
    if (n == 1000000) {
        instruction.innerHTML =
            `Beware this is only for the Legends,<br> We Have selected a Number Between <span id="levelDisplay1">1</span> And <span id="levelDisplay">10</span> <br><span class="intro2"> See if you can guess it. </span>`;
    }

    //7
    if (n == 10000000) {
        instruction.innerHTML =
            `Only The God of Guesses can pass this,<br> We Have selected a Number Between <span id="levelDisplay1">1</span> And <span id="levelDisplay">10</span> <br><span class="intro2"> See if you can guess it. </span>`;
    }

    //8
    if (n == 10000000000) {
        instruction.innerHTML =
            `Wait what?... Okay let's do it, <br> We Have selected a Number Between <span id="levelDisplay1">1</span> And <span id="levelDisplay">10</span> <br><span class="intro2"> See if you can guess it. </span>`;
    }

    //9
    if (n == 10000000000000000) {
        instruction.innerHTML =
            `Yup debit cards are the most important, <br> We Have selected a Number Between <span id="levelDisplay1">1</span> And <span id="levelDisplay">10</span> <br><span class="intro2"> See if you can guess it. </span>`;
    }
    // Dom element
    document.getElementById('input').style.display = "block";
    document.getElementById('levelDisplay1').innerHTML = addCommas(n / 10);
    document.getElementById('levelDisplay').innerHTML = addCommas(n);


    // getting number function
    function getNum() {
        a = Math.floor(Math.random() * n + 1);

        // checking the numbers are in given range
        while (a < n / 10) {
            a = Math.floor(Math.random() * n + 1);
        }

        return a;
    }

    let y = getNum(); //computer generate number
    // console.log("y = " + y);
    let guess = 1; //number of guesses made by the user
    let ans = [0]; //array of input numbers


    document.getElementById("submitguess").onclick = function () {

        // input by user
        let x = document.getElementById("guessField").value;

        // checking the validity of the number 
        if (x > n || x < n / 10) {
            msg.innerHTML =
                `Enter a Number Between <b>${addCommas(n / 10)}</b> to <b>${addCommas(n)}</b>`;
        } else {
            ans.push(parseInt(x)); //string to number
            // console.log(ans);

            // if the user guess is correct
            if (x == y) {
                msg.innerHTML = "<span class='intro2'>CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " +
                    guess + " GUESSES</span> <br><br> A new number has been generated....<br> Select a new level or play along.....";

                guess = 0;
                y = getNum();
                ans = [0];
                // console.log(y);
            }

            //for 2nd onward guesses 
            else if (ans[ans.length - 2] != 0) {

                //if the guess is closer than the previous guess
                if (Math.abs(y - x) < Math.abs(y - ans[ans.length - 2])) {
                    msg.innerHTML = `<span class="intro2">Your guess is ${x} Getting Closer</span>`
                    guess++;
                }
                //if the guess is farther away
                else {
                    msg.innerHTML = `<span class="red">Your guess is ${x} You Are Going Far Away</span>`
                    guess++;
                }
            }

            //for the first guess
            else {
                //in range 
                if (Math.abs(y - x) <= n / 10) {
                    msg.innerHTML = `<span class="intro2">Your guess is ${x} Very Close</span>`
                    guess++;
                }

                //far away 
                else {
                    msg.innerHTML = `<span class="red">Your guess is ${x} Still Far Away </span>`
                    guess++;
                }
            }
        }
    }
}