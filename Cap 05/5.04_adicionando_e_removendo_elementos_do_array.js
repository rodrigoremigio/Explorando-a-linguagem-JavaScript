var emails = [];

//PUSH adiciona elementos no array, sempre no fim.
emails.push('joao@email.com');
console.log(emails[0]);
emails.push('maria@email.com');
console.log(emails);
emails.push('jose@email.com');
console.log(emails);

//POP remove elementos do array, sempre o último.
emails.pop();
console.log(emails);

//UNSHIFT insere elementos no início do array
emails.unshift('pedro@email.com');
console.log(emails);

//SHIFT remove o primeiro elemento do array
emails.shift();
console.log(emails);