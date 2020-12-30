import {MAX_FIELD_VALUE, MAX_FIELD_LENGTH} from '../../config/config';
import {PAID, PENDING} from './status';
import {CREDIT, DEBT} from './type';

export const name = {
  type: 'string',
  maxLength: MAX_FIELD_LENGTH,
};

export const amount = {
  type: 'number',
  minimum: 0,
  maximum: MAX_FIELD_VALUE,
};

export const status = {
  type: 'string',
  enum: [PAID.value, PENDING.value],
};

export const description = {
  type: 'string',
  maxLength: MAX_FIELD_LENGTH,
};

export const type = {
  type: 'string',
  enum: [CREDIT.value, DEBT.value],
};
