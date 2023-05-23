let debounceTimeout;

function handleDebouncedInput() {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(processInput, 3000);
}

function processInput() {
    const inputField = document.getElementById('input-field');
    console.log('Input:', inputField.value);

    const debouncedValue = document.querySelector(".debounced");

    debouncedValue.innerHTML = inputField.value;

    if(inputField.value === ''){
        debouncedValue.innerHTML = 'Here';
    }
}