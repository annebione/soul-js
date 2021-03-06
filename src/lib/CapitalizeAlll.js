export default function CapitalizeAll(string) {
    try {
        let isString = typeof(string) == 'string' ? true : false;

        if (isString) {
            return string.replace(/(\b\w)/gi, function(l) {
                return new Promise((resolve, reject) => {
                    resolve(l.toUppercase());
                })
             })
        } else {
            throw new TypeError();
        }

    } catch(e) {
        console.error(e);
    }
}