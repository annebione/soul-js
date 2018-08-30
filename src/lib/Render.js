export default function Rank(array) {
    try {
        // Type check, throw TypeError if necessary
        if (Array.isArray(array)) {

        } else {
            throw new TypeError('Soul.Rank: ' + typeof(array) + ' is not an Array')
        }
    } catch(e) {
        console.error(e);
    }
}