import typeIsCorrect from '../utils/typeIsCorrect';

export default function Render(
    config = {
        data: [],
        element: '',
        value: false 
    }) {
    try {
        const _elementClass = element.indexOf('.') > -1 ? element : `. ${element}`;
        const _args = arguments;
        const _values = [];

        if (typeIsCorrect(config.data, 'array') && config.value) {
            config.data.forEach((key, index, array) => {
                _values.push(key[config.value])
            })

            document.querySelector(_elementClass).innerHTML= _values.join(' - ');

            return new Promise((resolve, reject) => {
                return resolve(config);
            })

        }
        else {
            throw new TypeError()
        }

    } catch(e) {
        console.error(e);
    }
}