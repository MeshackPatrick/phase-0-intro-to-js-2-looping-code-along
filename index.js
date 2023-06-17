
function writeCards(names, eventName) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    messages.push(message);
  }
  return messages;
}
const result = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(result);




function countDown(integers){
  while (integers >=0){
    console.log (integers);
    integers--;
  }
}countDown(10);
