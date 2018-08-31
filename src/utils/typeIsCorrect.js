

export default function typeIsCorrect(data, type) {
    let result = typeof(data) == type.toLowerCase() ? true : false;

    return result;

}