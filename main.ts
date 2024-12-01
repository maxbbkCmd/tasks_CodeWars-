// -------------------------------------------------------------
// 💚 RemoveExclamationMarks, которая удаляет все восклицательные знаки из заданной строки.
// -------------------------------------------------------------

let baseString: string = 'Hi! Hello!';

function removeExclamationMarks(name: string): string{
  return name.split('!').join('');
}

console.log(removeExclamationMarks('Hi! Hello!'));