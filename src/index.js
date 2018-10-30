import { SkillBuilders } from 'ask-sdk-core';
import { HelpHandler } from './helpHandler';
import { CancelHandler } from './cancelHandler';
import { ErrorHandler } from './errorHandler';
import { AndHandler } from './andHandler';
import { OrHandler } from './orHandler';
import { XorHandler } from './xorHandler';
import { ShiftHandler } from './shiftHandler';
import { NotHandler } from './notHandler';

const skillBuilder = SkillBuilders.custom();

export const handler = skillBuilder
.addRequestHandlers(
    HelpHandler,
    CancelHandler,
    ErrorHandler,
    AndHandler,
    OrHandler,
    XorHandler,
    ShiftHandler,
    NotHandler
)
.addErrorHandlers(ErrorHandler)
.lambda();
