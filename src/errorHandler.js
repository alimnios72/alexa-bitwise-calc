export const ErrorHandler = {
    canHandle() {
      return true;
    },
    handle(handlerInput, error) {
      console.log(`Error handled: ${error.message}`);
  
    return handlerInput.responseBuilder
        .speak('Sorry, I can\'t understand the command. Please try again.')
        .reprompt('Sorry, I can\'t understand the command. Please try again.')
        .getResponse();
    },
};
