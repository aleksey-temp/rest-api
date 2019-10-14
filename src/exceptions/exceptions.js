export class ValidationException extends Error {
  constructor(errors) {
    super();

    this.errors = errors;
  }
}

export class NotFoundException extends Error {}
