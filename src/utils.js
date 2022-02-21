export const emailRegex = (val) => {
  let emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  let result = emailRegex.test(val)
  return result
}