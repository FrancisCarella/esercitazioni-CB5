///////////// UTILIZZO PARAMETRO REST
const myArgs = process.argv;
const argv = myArgs.slice(2);
const args = argv.slice(1);

function calculator(operation, ...numbers) {
  let res = 0;
  switch (operation) {
    case "somma":
      for (let i in numbers) {
        res += parseInt(numbers[i]);
      }
      console.log(`La ${operation} di ${numbers} è ${res}`);
      break;
    case "sottrazione":
      res = numbers[0];
      for (let i = 1; i < numbers.length; i++) {
        res -= numbers[i];
      }
      console.log(`La ${operation} di ${numbers} è ${res}`);
      break;
    case "moltiplicazione":
      res = 1;
      for (let i = 0; i < numbers.length; i++) {
        res *= numbers[i];
      }
      console.log(`La ${operation} di ${numbers} è ${res}`);
      break;
    case "divisione":
      if (numbers[1] == 0) {
        console.log("Errore, operazione non valida");
        break;
      }
      res = numbers[0] / numbers[1];
      console.log(`La ${operation} di ${numbers} è ${res}`);
      break;
    default:
      console.log("Errore, operazione non valida");
  }
  return res;
}

calculator(argv[0], ...args);
