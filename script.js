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

    $(document).ready(setKeyUnShift)

$(document).keydown(function(e){
    if(e.keyCode ==16){
        let count = 1
        $keyboardDiv.css('background','gray')
    }
});

$(document).keyup(function(e){
    if(e.keyCode ==16){
        let count = 0
        $keyboardDiv.css('background','white')
    }
});


    function setKeyUnShift() {
        let firstRowKeys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\']
        let secondRowKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\''];
        let thirdRowKeys = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];

        for (let i = 0 ; i < firstRowKeys.length; i++) {
            let $firstRowBtn = $('<button></button>');
            $firstRowBtn.attr('type', 'button');
            $firstRowBtn.attr('class', 'btn btn-outline-secondary m-1')
            $firstRowBtn.css({
                'height': '45px',
                'width': '35px'
            })
            $firstRowBtn.text(firstRowKeys[i]);
            $firstRowBtn.attr('id', firstRowKeys[i]);
            $firstRowBtn.appendTo($firstRow)
        }

        for (let i = 0; i < secondRowKeys.length; i++) {
            let $secondRowBtn = $('<button></button>');
            $secondRowBtn.attr('type', 'button');
            $secondRowBtn.attr('class', 'btn btn-outline-secondary m-1');
            $secondRowBtn.css({
                'height': '45px',
                'width': '35px'
            });
            $secondRowBtn.text(secondRowKeys[i]);
            $secondRowBtn.attr('id', secondRowKeys[i]);
            $secondRowBtn.appendTo($secondRow)
        }

        for (let i = 0; i < thirdRowKeys.length; i++) {
            let $thirdRowBtn = $('<button></button>');
            $thirdRowBtn.attr('type', 'button');
            $thirdRowBtn.attr('class', 'btn btn-outline-secondary m-1')
            $thirdRowBtn.css({
                'height': '45px',
                'width': '35px'
            })
            $thirdRowBtn.text(thirdRowKeys[i]);
            $thirdRowBtn.attr('id', thirdRowKeys[i]);
            $thirdRowBtn.appendTo($thirdRow)
        }
    };
})