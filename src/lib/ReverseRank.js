


export default function ReverseRank(array) {
    try {
        if (Array.isArray(array)) {
            if (arguments[1]) {
                for (var i = 0; i < array.length; i ++) {
                    if (typeof array[i][arguments[1]] == 'number') {
                        return array[i][arguments[1]].sort(function(a, b) {
                            return a < b
                        }).reverse()    
                    }
                    if (typeof array[i][arguments[1]] == 'string') {
                        return array[i][arguments[1]].sort().reverse()
                    }
                } 
            } else {
                array.sort().reverse();
            }
        } else {
            throw new TypeError('Soul.Rank: ' + typeof(array) + ' is not an Array')
        }
    } catch(e) {
        console.error(e);
    }
}