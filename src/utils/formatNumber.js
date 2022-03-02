export default (number) => {
  const formatNumber = Intl.NumberFormat("id-ID");
  return formatNumber.format(number);
};
