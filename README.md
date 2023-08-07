## simple chatgpt app

* this app is from a twitch live stream on August 6 2023

* It is meant to show a basic example on how to use the gpt API
* Note that this requires you to be on a paid plan with openAI,
However it is not expensive so should be accessible to anyone 
who wants to mess around with the API for fun.

To get this setup for the first time just run

`npm install`

in the directory, create a `.env` file with your API key inside like
so:
```
OPENAI_API_KEY=<< insert your api key here without the <<>> brackets >>
```

check the openAI docs for reference on how to generate an API key.

To run the file just enter

`node basicChat.js`

or 

`node actualChat.js`

This project is based on a tutorial from freecodecamp linked below:

https://www.freecodecamp.org/news/how-to-build-a-chatbot-with-openai-chatgpt-nodejs-and-react/

Thanks!