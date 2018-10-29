import { BitwiseCalculator } from './calc';

export const XorHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'xorIntent';
    },
    handle(handlerInput) {
        const { requestEnvelope, responseBuilder } = handlerInput;
        const { intent } = requestEnvelope.request;
        const number1 = intent.slots.integer_one.value;
        const number2 = intent.slots.integer_two.value;
        const ans = BitwiseCalculator.xor(number1, number2);
        let text = 'Sorry, there was an error with the request. Please try again.';
        if (ans !== null) {
            text = `The answer is ${ans}`;
        }

      handlerInput.context.succeed();
      return responseBuilder
        .speak(text)
        .getResponse();
    },
  };