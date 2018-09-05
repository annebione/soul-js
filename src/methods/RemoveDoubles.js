Object.defineProperty(Array.prototype, "RemoveDoubles", {
    enumerable: false,
    writable: true,
    value: function() {
        return this.sort().filter((item, pos, source) => {
            return item != source[pos - 1]
        })
    }
});