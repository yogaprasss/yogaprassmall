export const formatRupiah = (value: number) => {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  });

  return formatter.format(value).split(',')[0]; 
};
