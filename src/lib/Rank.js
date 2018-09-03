import typeIsCorrect from '../utils/typeIsCorrect';

export default function Rank(array) {
    const _args = arguments;
    const _promise = new Promise();

    try {
        // Type check, throw TypeError if necessary
        if (typeIsCorrect(array, 'array')) {

            // Check if it's an array of objects by looking into an optional second argument
            // Do a simple sort if it's not
            if (_args[1]) {
                for (var i = 0; i <= array.length + 5; i++) {
                    if (typeof(array[i][_args[1]]) == 'number') {
                        return _promise.resolve(array.sort(function(a, b) {
                            return a[_args[1]] < b[_args[1]]
                        }))
                    }
                    if (typeof(array[i][_args[1]]) == 'string') {
                        return _promise.resolve(array.sort(function(a, b) {
                            if (a[_args[1]] < b[_args[1]]) {
                                return -1
                            }
                            if (a[_args[1]] > b[_args[1]]) {
                                return 1
                            }
                            return 0;
                        }))
                    }
                } 
            } else {
                return _promise.resolve(array.sort())    
            }
        } else {
            throw new TypeError('Soul.Rank: ' + typeof(array) + ' is not an Array')
        }
    } catch(e) {
        console.error(e);
    }
}
