class BaseResponse {
  constructor(status, message, data, statusCode = null) {
    this.status = status,
      this.message = message,
      this.data = data;
    if (statusCode !== null)
      this.statusCode = statusCode
  }
}
class SuccessResponse extends BaseResponse {
  constructor(message, data, statusCode = null) {
    super(true, message, data, statusCode);
  }
}
class ErrorResponse extends BaseResponse {
  constructor(message, statusCode = null) {
    super(false, message, null, statusCode);
  }
}

module.exports = { SuccessResponse, ErrorResponse };
