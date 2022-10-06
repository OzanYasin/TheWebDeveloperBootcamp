let input = prompt("What would you like to do?");
const todos = ["Collect Chicken Eggs", "Clean Litter Box"];
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("-----------------");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i + 1}: ${todos[i]}`);
    }
    console.log("-----------------");
  } else if (input === "add") {
    const newTodo = prompt("What is the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to list.`);
  } else if (input === "delete" || input === "del" || input === "d") {
    const index = parseInt(prompt("Enter an index to delete."));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index - 1, 1);
      console.log(`You deleted ${deleted[0]}`);
    } else {
      console.log("Unknown index!");
    }
  }
  input = prompt("What would you like to do?");
}
console.log("OK, QUIT THE APP.");
