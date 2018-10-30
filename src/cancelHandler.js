export const CancelHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && 
        (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent' || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent');
    },
    handle(handlerInput) {
        const { responseBuilder } = handlerInput;
        let text = `Alright, you got it`;

      return responseBuilder
        .speak(text)
        .getResponse();
    },
  };
