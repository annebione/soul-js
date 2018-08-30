export default function SetRanking(array, property, quantity) {
    try {
        // output multidimensional array
        let _output = [[], []];

        // Rankings to be returned. Since we're working with "top" and "bottom" results in 2
        const RANKING_ROWS = 2;
        
        // Check type of arguments, else throw TypeError
        if (
            Array.isArray(array)
            && typeof(property) == 'string' 
            && Number.isInteger(quantity)
        ) {

            // Results to be returned in each ranking row. 
            // If quantity * RANKING_ROWS is minor than array length, 
            // quantity equals array length divided by ranking rows
            let _results = quantity * RANKING_ROWS >= array.length ? quantity : array.length / RANKING_ROWS;

            for (var i = 0; i < array.length; i++) {
                array.sort(function(a, b) {
                    return a[property] < b[property];
                })
            }
            _output[0].push(array.slice(0, _results))
            _output[1].push(array.slice(-_results, _results))

            return _output;

        } else {
            throw new TypeError();
        }
    } catch(e) {
        console.error(e);
    }
}