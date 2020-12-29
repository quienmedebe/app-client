export const privateId = {
  type: 'number',
  minimum: 1,
};

export const publicId = {
  type: 'string',
  format: 'uuid',
};

export const dateTime = {
  type: 'object',
  format: 'date-time',
};
