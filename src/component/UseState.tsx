let hooks: Array<number> = [];
let currentIndex = 0;

function render() {
    console.log('render');
}

export default function useState(initialValue: number) {
    const index = currentIndex;

    if (hooks[index] === undefined) {
        hooks[index] = initialValue;
    }

    function setState(newValue: number) {
        hooks[index] = newValue;
        render();
    }

    currentIndex++;
    return [hooks[index], setState];
}