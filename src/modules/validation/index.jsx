import _isNumber from './isNumber';

export const REQUIRED = () => `Este campo es obligatorio`;
export const MIN_LENGTH = num => `La longitud mínima es de ${num} caracteres`;
export const MAX_LENGTH = num => `La longitud máxima es de ${num} caracteres`;
export const MIN_VALUE = num => `El valor mínimo es ${num}`;
export const MAX_VALUE = num => `El valor máximo es ${num}`;

export const NOT_VALID_NUMBER = () => `No es un número válido`;

export const isNumber = _isNumber;
