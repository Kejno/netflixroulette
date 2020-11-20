export const geSearchParamsFromObj = (opts: any) => {
  return Object.entries(opts)
    .map((value) => value.join('='))
    .join('&');
};
