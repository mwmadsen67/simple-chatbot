// Create a .env file - place the following line inside:
// OPENAI_API_KEY=<<paste your api key here without the surrounding <<>> marks>>

import { Configuration, OpenAIApi } from "openai";
import * as dotenv from 'dotenv';

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// the user is the input which chatgpt responds to
// the system role can assign specific behavior to chatgpts responses
// change the content to change the prompt

openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "How do I ride a bike" },
                {role: "system", content: "You are an assistant that speaks in riddles"}],
  })
  .then((res) => {
    console.log(res.data.choices[0].message.content);
  })
  .catch((e) => {
    console.log(e.response.statusText);
  });