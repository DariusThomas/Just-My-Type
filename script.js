$(document).ready(function () {
    let senArr = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let senCount = 0;
    let charCount = 0;
    let letterArr = senArr[senCount].split('');
    let letterLength = letterArr.length;
    let $senContainer = $('<h4></h4>');
    $senContainer.attr('id', 'sen-div');
    $senContainer.attr('class', 'text-center p-5 m-3');
    $senContainer.appendTo($('body'));



    let $keyboardDiv = $('<div></div>')
    $keyboardDiv.attr('id', 'keyBoardDiv')
    $keyboardDiv.attr('class', 'd-flex flex-column justify-content-center align-items-center');
    $keyboardDiv.css('height', '50vh');
    $keyboardDiv.appendTo($('body'));

    let $numRow = $('<div></div>');
    $numRow.attr('id', 'numRow');
    $numRow.appendTo($keyboardDiv)
    $numRow.attr('class', 'd-flex flex-row justify-content-center');

    let $firstRow = $('<div></div>');
    $firstRow.attr('id', 'firstRow');
    $firstRow.appendTo($keyboardDiv)
    $firstRow.attr('class', 'd-flex flex-row justify-content-center');

    let $secondRow = $('<div></div>');
    $secondRow.attr('id', 'secondRow');
    $secondRow.appendTo($keyboardDiv)
    $secondRow.attr('class', 'd-flex flex-row justify-content-center');

    let $thirdRow = $('<div></div>');
    $thirdRow.attr('id', 'thirdRow');
    $thirdRow.appendTo($keyboardDiv)
    $thirdRow.attr('class', 'd-flex flex-row justify-content-center');

    let $fourthRow = $('<div></div>');
    $fourthRow.attr('id', 'thirdRow');
    $fourthRow.appendTo($keyboardDiv)
    $fourthRow.attr('class', 'd-flex flex-row justify-content-center');

    $(document).ready(setKeyUnShifted);
    $(document).ready(highlightLetter);
    $(document).keydown(highlightKey);
    $(document).keydown(highlightNextLetter);
    $(document).keyup(resetKey);

    function highlightNextLetter(e) {
        if (e.keyCode != 16) {
            $senContainer.empty()
            charCount++
            highlightLetter();
            console.log(letterLength)
            console.log(charCount)
            console.log(senCount)
            if (charCount == letterLength - 1) {
                charCount = -1
                senCount++
            }else if(senCount == senArr.length){
                let $newGameBtn = $('<button></button>');
                $newGameBtn.attr('class',' display-2 btn btn-success')
                $newGameBtn.text('New Game?');

                $senContainer.empty();
                $newGameBtn.appendTo($senContainer)

            }
        }
    }

    function highlightLetter() {
        if(senCount != senArr.length){
            let letterArr = senArr[senCount].split('');
            let letterLength = letterArr.length;
        for (let i = 0; i < letterLength; i++) {
            let $span = $('<span></span>');
            $span.attr('id', 'span' + i);
            $span.text(letterArr[i])
            $span.appendTo($senContainer);

        }
    }
        $('#span' + charCount).css('background-color', 'yellow');
    };
    function resetKey(e) {
        if (!e.shiftKey) {
            $numRow.empty()
            $firstRow.empty();
            $secondRow.empty();
            $thirdRow.empty();
            $fourthRow.empty();
            setKeyUnShifted();
        }else if(e.shiftKey){
            $numRow.empty()
            $firstRow.empty();
            $secondRow.empty();
            $thirdRow.empty();
            $fourthRow.empty();
            setKeyShifted();
        }

    };

    function highlightKey(e) {
        if (e.shiftKey) {
            $numRow.empty();
            $firstRow.empty();
            $secondRow.empty();
            $thirdRow.empty();
            $fourthRow.empty();
            setKeyShifted()
        }
        if (!e.shiftKey && $('#a' + (e.keyCode + 32)).length) {
            $('#a' + (e.keyCode + 32)).css({
                'background-color': 'blue',
                'color': 'white'
            })
        } else if ($('#a' + e.keyCode).length) {
            $('#a' + e.keyCode).css({
                'background-color': 'blue',
                'color': 'white'
            })
        }

        if (e.keyCode == 219 && !e.shiftKey) {
            $('#a91').css({
                'background-color': 'blue',
                'color': 'white'
            })
        } else if (e.keyCode == 219 && e.shiftKey) {
            $('#a123').css({
                'background-color': 'blue',
                'color': 'white'
            })
        }

        if (e.keyCode == 221 && !e.shiftKey) {
            $('#a93').css({
                'background-color': 'blue',
                'color': 'white'
            })
        } else if (e.keyCode == 221 && e.shiftKey) {
            $('#a125').css({
                'background-color': 'blue',
                'color': 'white'
            })
        }

        if (e.keyCode == 220 && !e.shiftKey) {
            $('#a92').css({
                'background-color': 'blue',
                'color': 'white'
            })
        } else if (e.keyCode == 220 && e.shiftKey) {
            $('#a124').css({
                'background-color': 'blue',
                'color': 'white'
            })
        }

        if (e.keyCode == 186 && !e.shiftKey) {
            $('#a59').css({
                'background-color': 'blue',
                'color': 'white'
            })
        } else if (e.keyCode == 186 && e.shiftKey) {
            $('#a58').css({
                'background-color': 'blue',
                'color': 'white'
            })
        }

        if (e.keyCode == 222 && !e.shiftKey) {
            $('#a39').css({
                'background-color': 'blue',
                'color': 'white'
            })
        } else if (e.keyCode == 222 && e.shiftKey) {
            $('#a34').css({
                'background-color': 'blue',
                'color': 'white'
            })
        }

        if (e.keyCode == 188 && !e.shiftKey) {
            $('#a44').css({
                'background-color': 'blue',
                'color': 'white'
            })
        } else if (e.keyCode == 188 && e.shiftKey) {
            $('#a60').css({
                'background-color': 'blue',
                'color': 'white'
            })
        }

        if (e.keyCode == 190 && !e.shiftKey) {
            $('#a46').css({
                'background-color': 'blue',
                'color': 'white'
            })
        } else if (e.keyCode == 190 && e.shiftKey) {
            $('#a62').css({
                'background-color': 'blue',
                'color': 'white'
            })
        }

        if (e.keyCode == 191 && !e.shiftKey) {
            $('#a47').css({
                'background-color': 'blue',
                'color': 'white'
            })
        } else if (e.keyCode == 191 && e.shiftKey) {
            $('#a63').css({
                'background-color': 'blue',
                'color': 'white'
            })
        }

        if (e.keyCode == 192 && !e.shiftKey) {
            $('#a96').css({
                'background-color': 'blue',
                'color': 'white'
            })
        } else if (e.keyCode == 192 && e.shiftKey) {
            $('#a126').css({
                'background-color': 'blue',
                'color': 'white'
            })
        }

        if (e.keyCode == 49 && !e.shiftKey) {
            $('#a49').css({
                'background-color': 'blue',
                'color': 'white'
            })
        } else if (e.keyCode == 49 && e.shiftKey) {
            $('#a33').css({
                'background-color': 'blue',
                'color': 'white'
            })
        }

        if (e.keyCode == 50 && !e.shiftKey) {
            $('#a50').css({
                'background-color': 'blue',
                'color': 'white'
            })
        } else if (e.keyCode == 50 && e.shiftKey) {
            $('#a64').css({
                'background-color': 'blue',
                'color': 'white'
            })
        }

        if (e.keyCode == 51 && !e.shiftKey) {
            $('#a51').css({
                'background-color': 'blue',
                'color': 'white'
            })
        } else if (e.keyCode == 51 && e.shiftKey) {
            $('#a35').css({
                'background-color': 'blue',
                'color': 'white'
            })
        }

        if (e.keyCode == 52 && !e.shiftKey) {
            $('#a52').css({
                'background-color': 'blue',
                'color': 'white'
            })
        } else if (e.keyCode == 52 && e.shiftKey) {
            $('#a36').css({
                'background-color': 'blue',
                'color': 'white'
            })
        }

        if (e.keyCode == 53 && !e.shiftKey) {
            $('#a53').css({
                'background-color': 'blue',
                'color': 'white'
            })
        } else if (e.keyCode == 53 && e.shiftKey) {
            $('#a37').css({
                'background-color': 'blue',
                'color': 'white'
            })
        }

        if (e.keyCode == 54 && !e.shiftKey) {
            $('#a54').css({
                'background-color': 'blue',
                'color': 'white'
            })
        } else if (e.keyCode == 54 && e.shiftKey) {
            $('#a94').css({
                'background-color': 'blue',
                'color': 'white'
            })
        }

        if (e.keyCode == 55 && !e.shiftKey) {
            $('#a55').css({
                'background-color': 'blue',
                'color': 'white'
            })
        } else if (e.keyCode == 55 && e.shiftKey) {
            $('#a38').css({
                'background-color': 'blue',
                'color': 'white'
            })
        }

        if (e.keyCode == 56 && !e.shiftKey) {
            $('#a56').css({
                'background-color': 'blue',
                'color': 'white'
            })
        } else if (e.keyCode == 56 && e.shiftKey) {
            $('#a42').css({
                'background-color': 'blue',
                'color': 'white'
            })
        }

        if (e.keyCode == 57 && !e.shiftKey) {
            $('#a57').css({
                'background-color': 'blue',
                'color': 'white'
            })
        } else if (e.keyCode == 57 && e.shiftKey) {
            $('#a40').css({
                'background-color': 'blue',
                'color': 'white'
            })
        }

        if (e.keyCode == 48 && !e.shiftKey) {
            $('#a48').css({
                'background-color': 'blue',
                'color': 'white'
            })
        } else if (e.keyCode == 48 && e.shiftKey) {
            $('#a41').css({
                'background-color': 'blue',
                'color': 'white'
            })
        }

        if (e.keyCode == 189 && !e.shiftKey) {
            $('#a45').css({
                'background-color': 'blue',
                'color': 'white'
            })
        } else if (e.keyCode == 189 && e.shiftKey) {
            $('#a95').css({
                'background-color': 'blue',
                'color': 'white'
            })
        }

        if (e.keyCode == 187 && !e.shiftKey) {
            $('#a61').css({
                'background-color': 'blue',
                'color': 'white'
            })
        } else if (e.keyCode == 187 && e.shiftKey) {
            $('#a43').css({
                'background-color': 'blue',
                'color': 'white'
            })
        }


    };

    function setKeyUnShifted() {
        let numRowKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=']
        let firstRowKeys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\']
        let secondRowKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\''];
        let thirdRowKeys = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];

        for (let i = 0; i < numRowKeys.length; i++) {
            let $numRowBtn = $('<button></button>');
            $numRowBtn.attr('type', 'button');
            $numRowBtn.attr('class', 'btn btn-outline-secondary m-1')
            $numRowBtn.css({
                'height': '3em',
                'width': '2.5em'
            })
            $numRowBtn.text(numRowKeys[i]);
            $numRowBtn.attr('id', 'a' + numRowKeys[i].charCodeAt(0));
            $numRowBtn.appendTo($numRow)
        }

        for (let i = 0; i < firstRowKeys.length; i++) {

            let $firstRowBtn = $('<button></button>');
            $firstRowBtn.attr('type', 'button');
            $firstRowBtn.attr('class', 'btn btn-outline-secondary m-1')
            $firstRowBtn.css({
                'height': '3em',
                'width': '2.5em'
            })
            $firstRowBtn.text(firstRowKeys[i]);
            $firstRowBtn.attr('id', 'a' + firstRowKeys[i].charCodeAt(0));
            $firstRowBtn.appendTo($firstRow)
        }

        for (let i = 0; i < secondRowKeys.length; i++) {
            let $secondRowBtn = $('<button></button>');
            $secondRowBtn.attr('type', 'button');
            $secondRowBtn.attr('class', 'btn btn-outline-secondary m-1');
            $secondRowBtn.css({
                'height': '3em',
                'width': '2.5em'
            });
            $secondRowBtn.text(secondRowKeys[i]);
            $secondRowBtn.attr('id', 'a' + secondRowKeys[i].charCodeAt(0));
            $secondRowBtn.appendTo($secondRow)
        }

        for (let i = 0; i < thirdRowKeys.length; i++) {
            let $thirdRowBtn = $('<button></button>');
            $thirdRowBtn.attr('type', 'button');
            $thirdRowBtn.attr('class', 'btn btn-outline-secondary m-1')
            $thirdRowBtn.css({
                'height': '3em',
                'width': '2.5em'
            })
            $thirdRowBtn.text(thirdRowKeys[i]);
            $thirdRowBtn.attr('id', 'a' + thirdRowKeys[i].charCodeAt(0));
            $thirdRowBtn.appendTo($thirdRow)
        }

        let $fourthRowBtn = $('<button></button>');
    $fourthRowBtn.attr('type', 'button');
    $fourthRowBtn.attr('class', 'btn btn-outline-secondary m-1')
    $fourthRowBtn.css({
        'height': '3em',
        'width': '25em'
    });
    $fourthRowBtn.text(' ');
    $fourthRowBtn.attr('id', 'a' + $fourthRowBtn.text().charCodeAt(0));
    $fourthRowBtn.appendTo($fourthRow);
    };
    function setKeyShifted() {
        let numRowKeys = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]
        let firstRowKeys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|']
        let secondRowKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"'];
        let thirdRowKeys = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'];

        for (let i = 0; i < numRowKeys.length; i++) {
            let $numRowBtn = $('<button></button>');
            $numRowBtn.attr('type', 'button');
            $numRowBtn.attr('class', 'btn btn-outline-secondary m-1')
            $numRowBtn.css({
                'height': '3em',
                'width': '2.5em'
            })
            $numRowBtn.text(numRowKeys[i]);
            $numRowBtn.attr('id', 'a' + numRowKeys[i].charCodeAt(0));
            $numRowBtn.appendTo($numRow)
        }

        for (let i = 0; i < firstRowKeys.length; i++) {
            let $firstRowBtn = $('<button></button>');
            $firstRowBtn.attr('type', 'button');
            $firstRowBtn.attr('class', 'btn btn-outline-secondary m-1')
            $firstRowBtn.css({
                'height': '3em',
                'width': '2.5em'
            })
            $firstRowBtn.text(firstRowKeys[i]);
            $firstRowBtn.attr('id', 'a' + firstRowKeys[i].charCodeAt(0));
            $firstRowBtn.appendTo($firstRow)
        }

        for (let i = 0; i < secondRowKeys.length; i++) {
            let $secondRowBtn = $('<button></button>');
            $secondRowBtn.attr('type', 'button');
            $secondRowBtn.attr('class', 'btn btn-outline-secondary m-1');
            $secondRowBtn.css({
                'height': '3em',
                'width': '2.5em'
            });
            $secondRowBtn.text(secondRowKeys[i]);
            $secondRowBtn.attr('id', 'a' + secondRowKeys[i].charCodeAt(0));
            $secondRowBtn.appendTo($secondRow)
        }

        for (let i = 0; i < thirdRowKeys.length; i++) {
            let $thirdRowBtn = $('<button></button>');
            $thirdRowBtn.attr('type', 'button');
            $thirdRowBtn.attr('class', 'btn btn-outline-secondary m-1')
            $thirdRowBtn.css({
                'height': '3em',
                'width': '2.5em'
            })
            $thirdRowBtn.text(thirdRowKeys[i]);
            $thirdRowBtn.attr('id', 'a' + thirdRowKeys[i].charCodeAt(0));
            $thirdRowBtn.appendTo($thirdRow)
        }

        let $fourthRowBtn = $('<button></button>');
    $fourthRowBtn.attr('type', 'button');
    $fourthRowBtn.attr('class', 'btn btn-outline-secondary m-1')
    $fourthRowBtn.css({
        'height': '3em',
        'width': '25em'
    });
    $fourthRowBtn.text(' ');
    $fourthRowBtn.attr('id', 'a' + $fourthRowBtn.text().charCodeAt(0));
    $fourthRowBtn.appendTo($fourthRow);
    };
})