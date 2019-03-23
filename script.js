$(document).ready(function () {

    let $keyboardDiv = $('<div></div>')
    $keyboardDiv.attr('id', 'keyBoardDiv')
    $keyboardDiv.attr('class', 'd-flex flex-column justify-content-center align-items-center');
    $keyboardDiv.css('height', '100vh');
    $keyboardDiv.appendTo($('body'));

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

    let $fourthRowBtn = $('<button></button>');
    $fourthRowBtn.attr('type', 'button');
    $fourthRowBtn.attr('class', 'btn btn-outline-secondary m-1')
    $fourthRowBtn.css({
        'height': '3em',
        'width': '25em'
    });
    $fourthRowBtn.text(' ');
    $fourthRowBtn.attr('id', 'a' + $fourthRowBtn.text().charCodeAt(0))
    $fourthRowBtn.appendTo($fourthRow)

    $(document).ready(setKeyUnShifted)
    
    $(document).keydown(function (e) {

        if (e.shiftKey) {
            $firstRow.empty();
            $secondRow.empty();
            $thirdRow.empty();
            setKeyShifted()
        }
        if (!e.shiftKey && $('#a' + (e.keyCode + 32)).length) {
            console.log($('#a' + (e.keyCode + 32)).text())
            $('#a' + (e.keyCode + 32)).css({
                'background-color': 'gray',
                'color': 'white'
            })
        } else if (e.shiftKey && $('#a' + e.keyCode).length) {
            console.log($('#a' + e.keyCode).text())
            $('#a' + e.keyCode).css({
                'background-color': 'gray',
                'color': 'white'
            })
        }
    });

    $(document).keyup(function (e) {

        if (e.keyCode == 16) {
            $firstRow.empty();
            $secondRow.empty();
            $thirdRow.empty();
            setKeyUnShifted()
        }
        if ($('#a' + e.keyCode).length) {
            $('#a' + e.keyCode).css({
                'background-color': 'white',
                'color': 'gray'
            })
        } else if ($('#a' + (e.keyCode + 32)).length) {
            $('#a' + (e.keyCode + 32)).css({
                'background-color': 'white',
                'color': 'gray'
            })
        }
    });


    function setKeyUnShifted() {
        let firstRowKeys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\']
        let secondRowKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\''];
        let thirdRowKeys = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];

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
    };
    function setKeyShifted() {
        let firstRowKeys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|']
        let secondRowKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"'];
        let thirdRowKeys = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'];

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
    };
})