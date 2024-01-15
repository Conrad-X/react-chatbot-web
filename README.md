## About

This project was generated with [Create React App]([https://github.com/angular/angular-cli](https://create-react-app.dev/)) with `React` version `18.2.0` and comprises of the web client interface for [chatbot-server](https://github.com/Conrad-X/chatbot-server), which generates responses based on `OpenAI` assistant.
- Run `npm start` for a dev server. Navigate to `http://localhost:3000/`.
- Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## How To Integrate the Chatbot In Your Application?
Firstly, since this chatbot is based in React, it will only be compatible with react projects <= `18.2.0`, please note all styles have written in `.css` files. Here's the breakdown of the application as stated below

    .
    ├── public                  
    ├── src                     
        ├── components
            ├── ChatPanel       
            ├── Header
            ├── MessagePanel
            ├── UserInput
        ├── App.js
        ├── App.css
        ├── index.js
        ├── index.css
    ├── package.json             
    ├── README.md                

The `ChatPanel` component acts as a wrapper of the whole chatbot functionality, if you plan on integrating it into your codebase, you would need all component folders listed here. After moving all the components, I would suggest that you take a look at `App.js` and `App.css` which transforms the `ChatPanel` component into a mini widget that can be minimized and maximized as shown in the video attached below. The styles and functionality listed in `App.css` and `App.js` would need to be replicated within the component you intend on integrating with. 

## Color Palette
[Link To Color Palette](https://colorhunt.co/palette/ecf4d69ad0c22d9596265073) 

<img width="300" alt="Screenshot 2024-01-02 at 1 12 32 AM" src="https://github.com/Conrad-X/chatbot-web/assets/6302514/8edb10ba-8dcf-4f52-88f5-de62e83c771e">

## Screenshots

The following screenshot references to the mobile view comprising of it's UI components <br/>
<img width="300" alt="Screenshot 2024-01-02 at 1 12 32 AM" src="https://github.com/Conrad-X/chatbot-web/assets/6302514/486a402c-8560-433d-ac9b-360c41649917">

## Usage Video

The following video shows how the chatbot is segregated within the host application and its functionality in terms of usage

https://github.com/Conrad-X/react-chatbot-web/assets/6302514/0d823995-d8d9-44a1-a88e-7e7e89e7231f

