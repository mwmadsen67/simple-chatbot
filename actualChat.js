import { Configuration, OpenAIApi } from "openai";
import * as dotenv from 'dotenv';
import readline from "readline";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// readline allows us to create a command line interface
const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Type in the terminal to ask chatGPT a question!\n")
userInterface.prompt();

// run this function everytime I press Enter
userInterface.on("line", (input) => {
  openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input },
      {role: "system", content: "You are not an assistant and respond with intentionally incorrect answers."}],
    })
    .then((res) => {
      console.log(res.data.choices[0].message.content);
      userInterface.prompt();
    })
    .catch((e) => {
      console.log(e.response.statusText);
    });
})