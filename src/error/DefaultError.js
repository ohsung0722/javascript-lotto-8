import { ERROR_PREFIX } from "../constants/message";

class DefaultError extends Error {
  constructor(message) {
    super(ERROR_PREFIX(message));
    this.name = this.constructor.name;
  }
}

export default DefaultError;
