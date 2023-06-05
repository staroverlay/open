import Exception from './Exception';

export default class BadRequestException extends Exception {
  constructor(message: string) {
    super(400, 'BAD_REQUEST', message);
  }
}
