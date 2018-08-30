export default function SetRanking(array, property, quantity) {
    try {

        let _output = [[], []];
        const RANKING_ROWS = 2;
        
        if (
            Array.isArray(array)
            && typeof property == 'string' 
            && Number.isInteger(quantity)
        ) {
            let _results = quantity * RANKING_ROWS >= array.length ? quantity : array.length / RANKING_ROWS;

            for (var i = 0; i < array.length; i++) {
                array[i][property].sort(function(a, b) {
                    return a < b;
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