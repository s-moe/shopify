import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Form from "./components/form/Form";
import Home from "./pages/Home";
import Responses from "./components/responses/Responses";
import "./app.scss";
const { Configuration, OpenAIApi } = require("openai");

export default function App() {
  const initialTemperature = 0.5;
  const increasedTemperature = 1;
  const [companyType, setCompanyType] = useState("");
  const [responseList, setResponseList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [temperature, setTemperature] = useState(initialTemperature);
  const errorMessage =
    " Please check to make sure you have a valid API key and refresh the page.";
  const prompt = `Provide a numbered list of product ideas for a ${companyType} company`;
  const engine = "text-davinci-002";
  const maxTokens = 256;
  const topP = 1;
  const frequencyPenalty = 0;
  const presencePenalty = 0;
  const responsePrompt = `New product ideas for a ${companyType} company:`;
  const appClassName = "app";
  const keypressCode = 13;
  const scrollCoordinateX = 0;
  const scrollCoordinateY = 800;
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  // function for handling a keypress of enter rather than clicking the button
  const handleKeypress = (event) => {
    if (event.keyCode === keypressCode) {
      searchForProductIdeas();
    }
  };

  // General scroll to element function
  const scrollToResponses = () =>
    window.scrollTo(scrollCoordinateX, scrollCoordinateY);

  // function that calls the api, sets state, and scrolls to the ideas
  const searchForProductIdeas = (event) => {
    event.preventDefault();
    //calls API
    try {
      setLoading(true);
      openai
        .createCompletion(engine, {
          prompt: prompt,
          temperature: temperature,
          max_tokens: maxTokens,
          top_p: topP,
          frequency_penalty: frequencyPenalty,
          presence_penalty: presencePenalty,
        })

        // sets state
        .then((response) => {
          let responseIdeas = response.data.choices[0].text;
          let ideasArray = responseIdeas.split("\n");
          const responseObject = {
            prompt: responsePrompt,
            ideas: ideasArray,
          };

          setResponseList([responseObject, ...responseList]);
          setLoading(false);
          setCompanyType("");
          setTimeout(() => {
            scrollToResponses();
          }, 0);
        })
        .catch((error) => {
          alert(error.message + errorMessage);
          console.error(error);
        });
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  return (
    <main className={appClassName}>
      <Navbar />
      <Home />
      <Form
        companyType={companyType}
        setCompanyType={setCompanyType}
        searchForProductIdeas={searchForProductIdeas}
        handleKeypress={handleKeypress}
        setTemperature={setTemperature}
        increasedTemperature={increasedTemperature}
      />
      <Responses loading={loading} responseList={responseList} />
    </main>
  );
}
