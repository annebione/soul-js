import typeIsCorrect from '../utils/typeIsCorrect';

export default function SetRanking(array, property, quantity) {
    try {
        // Rankings to be returned. Since we're working with "top" and "bottom" results in 2
        // Max number: 3, returns top, bottom and middle results
        const RANKING_ROWS = 2;
        
        const DEFAULT_ROWS = 2;
        const MAX_RANKING_ROWS_QUANTITY = 3;
        const CURRENT_RANKING_ROW = 1;

        // output  array
        let _output = [];

        // Set ranking rows in output according to settings
        for (var i = 0; i < RANKING_ROWS; i++) {
            _output.push(new Array())
        }
        
        const areTruthy = [ 
            Array.isArray(array),
            typeIsCorrect(property, 'string'),
            Number.isInteger(quantity) 
        ]
        // Check type of arguments, else throw TypeError
        if (!areTruthy.includes(false)) {

            // Results to be returned in each ranking row. 
            // If quantity * RANKING_ROWS is minor than array length, 
            // quantity equals array length divided by ranking rows
            let _results = quantity * RANKING_ROWS >= array.length ? quantity : array.length / RANKING_ROWS;

            for (var i = 0, max = array.length; i < max; i++) {
                array.sort(function(a, b) {
                    return a[property] < b[property];
                })
            }

            _output[0].push(array.slice(0, _results))
            _output[1].push(array.slice(-_results))
            
            if (RANKING_ROWS == MAX_RANKING_ROWS_QUANTITY) {
                _output[RANKING_ROWS].push(array.splice(-results, _results * (RANKING_ROWS - CURRENT_RANKING_ROW)))
            }

            if (RANKING_ROWS > MAX_RANKING_ROWS_QUANTITY) {
                _output = _output.slice(0, DEFAULT_ROWS)
            }

            return new Promise((resolve, reject) => {
                return resolve(_output);
            }) 
    

        } else {
            throw new TypeError();
        }
    } catch(e) {
        console.error(e);
    }
}