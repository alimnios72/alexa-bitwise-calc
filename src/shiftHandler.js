import { BitwiseCalculator } from './calc';

export const ShiftHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'shiftIntent';
    },
    handle(handlerInput) {
        const { requestEnvelope, responseBuilder } = handlerInput;
        const { intent } = requestEnvelope.request;
        const number = intent.slots.integer.value;
        const direction = intent.slots.direction.value;
        const type = intent.slots.type.value;
        const bits = intent.slots.bits.value;
        let ans;
        if (direction === 'left') {
            ans = BitwiseCalculator.leftShift(number, bits);
        } else {
            const logical = type === 'logical';
            ans = BitwiseCalculator.rightShift(number, logical, bits);
        }
        let text = 'Sorry, there was an error with the request. Please try again.';
        if (ans !== null) {
            text = `The answer is ${ans}`;
        }

      return responseBuilder
        .speak(text)
        .getResponse();
    },
  };
