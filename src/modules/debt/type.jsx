export const DEBT = () => ({value: 'DEBT', label: 'A deber'});
DEBT.value = 'DEBT';
export const CREDIT = () => ({value: 'CREDIT', label: 'A cobrar'});
CREDIT.value = 'CREDIT';

export const TYPES = (...args) => [DEBT(...args), CREDIT(...args)];
