class BaseResponse {
  constructor(status, message, data) {
    this.status = status,
      this.message = message,
      this.data = data
  }
}
class SuccesResponse extends BaseResponse {
  constructor(message, data) {
    super(true, message, data)
  }
}
class ErrorResponse extends BaseResponse {
  constructor(message) {
    super(false, message, null)
  }
}

module.exports={SuccesResponse,ErrorResponse}