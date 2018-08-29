


export default function Rank(array) {
    try {
        if (Array.isArray(array)) {
            if (arguments[1]) {
                for (var i = 0; i < array.length; i ++) {
                    if (typeof array[i][arguments[1]] == 'number') {
                        return array.sort(function(a, b) {
                            return a[i][arguments[1]] < b[i][arguments[1]]
                        })    
                    }

                    if (typeof array[i][arguments[1]] == 'array') {
                        const _rankedArrayKey = array[i][arguments[1]].sort();
                        
                        

                    }
                    if (typeof array[i][arguments[1]] == 'string') {

                    }

                } 
            } else {
                array.sort()    
            }
        } else {
            throw new TypeError('Soul.Rank: ' + typeof(array) + ' is not an Array')
        }
    } catch(e) {
        console.error(e);
    }
}