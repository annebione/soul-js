export default function Rank(array) {
    const _args = arguments;

    try {
        // Type check, throw TypeError if necessary
        if (Array.isArray(array)) {

            // Check if it's an array of objects by looking into an optional second argument
            // Do a simple sort if it's not
            if (_args[1]) {
                for (var i = 0; i <= array.length + 5; i++) {
                    if (typeof(array[i][_args[1]]) == 'number') {
                        return array.sort(function(a, b) {
                            return a[_args[1]] < b[_args[1]]
                        })
                    }
                    if (typeof(array[i][_args[1]]) == 'string') {
                        return array.sort(function(a, b) {
                            if (a[_args[1]] < b[_args[1]]) {
                                return -1
                            }
                            if (a[_args[1]] > b[_args[1]]) {
                                return 1
                            }
                            return 0;
                        })
                    }
                } 
            } else {
                return array.sort()    
            }
        } else {
            throw new TypeError('Soul.Rank: ' + typeof(array) + ' is not an Array')
        }
    } catch(e) {
        console.error(e);
    }
}
