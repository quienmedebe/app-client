function currencyFormat(locales = ['es'], options = {}) {
  return new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...options,
  });
}

export default currencyFormat;
