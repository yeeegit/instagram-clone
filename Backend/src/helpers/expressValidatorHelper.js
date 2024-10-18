const expressValidatorHelper = (errors) => {
  const formattedErrors = errors.array().map(error => {
    if (error.path === 'password') {
      return { ...error, value: undefined }
    }
    return error
  })
  return formattedErrors
}
module.exports=expressValidatorHelper