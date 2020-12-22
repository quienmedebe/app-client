export const DEBT = () => ({value: 'DEBT', label: 'A deber'});
export const CREDIT = () => ({value: 'CREDIT', label: 'A cobrar'});

export const TYPES = (...args) => [DEBT(...args), CREDIT(...args)];
