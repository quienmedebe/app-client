export const PENDING = () => ({value: 'PENDING', label: 'Pendiente'});
export const PAID = () => ({value: 'PAID', label: 'Pagado'});

export const STATUS = (...args) => [PENDING(...args), PAID(...args)];
