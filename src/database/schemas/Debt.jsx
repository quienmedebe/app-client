export const name = 'Debt';

export default {
  name: name,
  primaryKey: 'id',
  properties: {
    id: {
      type: 'int',
    },
    public_id: {
      type: 'string',
      indexed: true,
    },
    name: {
      type: 'string',
    },
    amount: {
      type: 'double',
    },
    type: {
      type: 'string',
      indexed: true,
    },
    description: {
      type: 'string',
      optional: true,
    },
    status: {
      type: 'string',
      indexed: true,
    },
    created_at: {
      type: 'date',
      indexed: true,
    },
    updated_at: {
      type: 'date',
    },
    deleted_at: {
      type: 'date',
      optional: true,
    },
  },
};
