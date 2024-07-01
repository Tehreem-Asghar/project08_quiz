#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

async function quiz() {
  console.log(chalk.bold.bgMagenta(`\t\twelcome Quize App\t\t`));

  let point = 0;
  const question1 = await inquirer.prompt({
    message: chalk.green("What is TypeScript?"),
    name: "q1",
    type: "list",
    choices: [
      "1- A superset of JavaScript",
      "2- A framework built on top of JavaScript",
      "3- A new programming language",
      "4- superset of python",
    ],
  });

  if (question1.q1 == "1- A superset of JavaScript") {
    console.log(chalk.bgGreen("correct"));
    ++point;
  } else {
    console.log(chalk.bgRed("wrong"));
  }

  const question2 = await inquirer.prompt({
    message: chalk.green("Which of the following is true about TypeScript?"),
    name: "q2",
    type: "list",
    choices: [
      "1- TypeScript code can directly run in the browser.",
      "2- TypeScript code is transpiled to JavaScript.",
      "3- TypeScript does not support classes and interfaces.",
      "4- Both 1 And 3",
    ],
  });

  if (question2.q2 == "2- TypeScript code is transpiled to JavaScript.") {
    console.log(chalk.bgGreen("correct"));
    ++point;
  } else {
    console.log(chalk.bgRed("wrong"));
  }

  const question3 = await inquirer.prompt({
    message: chalk.green(
      "Which keyword is used to define a type alias in TypeScript?"
    ),
    name: "q3",
    type: "list",
    choices: ["1- interface", "2- class", "3- type", "4- typedef"],
  });

  if (question3.q3 == "3- type") {
    console.log(chalk.bgGreen("correct"));
    ++point;
  } else {
    console.log(chalk.bgRed("wrong"));
  }

  const question4 = await inquirer.prompt({
    message: chalk.green(
      "Which TypeScript feature allows you to combine multiple types together?"
    ),
    name: "q4",
    type: "list",
    choices: [
      "1- Type union (|)",
      "2- Type intersection (&)",
      "3- Type assertion (as)",
      "4- non",
    ],
  });

  if (question4.q4 == "1- Type union (|)") {
    console.log(chalk.bgGreen("correct"));
    ++point;
  } else {
    console.log(chalk.bgRed("wrong"));
  }

  const question5 = await inquirer.prompt({
    message: chalk.green(
      "what will be the output  \n lett message : string = 'hello everyone'; \n console.log(message);?"
    ),
    name: "q5",
    type: "list",
    choices: [
      "1- hello everyone",
      "2- type Error",
      "3- syntax Error",
      "4- non",
    ],
  });

  if (question5.q5 == "3- syntax Error") {
    console.log(chalk.bgGreen("correct"));
    ++point;
  } else {
    console.log(chalk.bgRed("wrong"));
  }

  console.log(chalk.bgMagenta(`\n\t\tYour scored ${point} out of 5 points.`));
}
quiz();