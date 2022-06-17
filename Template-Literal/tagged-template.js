const modifiers = (strings, ...values) => {
  const mod = strings.reduce((prev, current) => {
    return prev + current + (values.length ? "Mr. " + values.shift() : "");
  }, "");
  return mod;
};

const player1 = `Sakib`;
const player2 = `Tamim`;

console.log(modifiers`We have ${player1} and ${player2} in our cricket team.`);
