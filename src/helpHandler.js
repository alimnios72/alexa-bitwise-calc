export const HelpHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'HelpIntent';
    },
    handle(handlerInput) {
        const { responseBuilder } = handlerInput;
        let text = `Welcome to bitwise calculator, you can try saying left shift 3 2 bits positions or what is 6 and 8`;

      return responseBuilder
        .speak(text)
        .getResponse();
    },
  };
