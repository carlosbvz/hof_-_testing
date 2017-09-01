function clearString(...words) {
    return words
                .map( (word) => { return word.trim().replace(/\s+/g, '_') })
                .join('_')
                .toLowerCase();
}

console.log(clearString('    uno  ', 'dos de la manana', 'tres es mas que dos', 'cuatro CANCIONES PUEDO TOCAR '));
