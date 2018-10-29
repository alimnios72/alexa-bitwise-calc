import { BitwiseCalculator } from './calc';

export const NotHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'notIntent';
    },
    handle(handlerInput) {
        const { requestEnvelope, responseBuilder } = handlerInput;
        const { intent } = requestEnvelope.request;
        const number = intent.slots.integer.value;
        const ans = BitwiseCalculator.not(number);
        let text = 'Sorry, there was an error with the request. Please try again.';
        if (ans !== null) {
            text = `The answer is ${ans}`;
        }

      return responseBuilder
        .speak(text)
        .getResponse();
    },
  };
