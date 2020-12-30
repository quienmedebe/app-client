export const PENDING = () => ({value: 'PENDING', label: 'Pendiente'});
PENDING.value = 'PENDING';

export const PAID = () => ({value: 'PAID', label: 'Pagado'});
PAID.value = 'PAID';

export const STATUS = (...args) => [PENDING(...args), PAID(...args)];
