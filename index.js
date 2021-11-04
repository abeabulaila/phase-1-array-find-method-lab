const record = [
    { year: "1970", result: "N/A"},
    { year: "1969", result: "W"},
    { year: "1968", result: "N/A"},
    { year: "1967", result: "N/A"},
    { year: "1966", result: "L"},
  ]

function findWin(win){
    return win.result === 'W';
}
    function superbowlWin(array) {
        if (array.find(findWin) === undefined){
            return array.find(findWin)
        }
        else {
	    return array.find(findWin).year
    }
}

superbowlWin(record)

