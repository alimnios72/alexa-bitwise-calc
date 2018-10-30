export const HelpHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const { responseBuilder } = handlerInput;
        let text = `<prosody rate="85%"> Welcome to bitwise calculator, you can ask to and, or, xor, two numbers, not a number, left or right shift a number by n bits. Try saying left shift 3, 2 bits positions, or, what is 6 and 8</prosody>`;

      return responseBuilder
        .speak(text)
        .getResponse();
    },
  };
