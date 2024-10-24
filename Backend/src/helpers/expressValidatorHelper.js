const expressValidatorHelper = (errors) => {
  const formattedErrors = errors.array().map(error => {
    return error.msg
  })
  return formattedErrors
}
module.exports=expressValidatorHelper