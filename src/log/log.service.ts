import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LogService {

  private readonly logger = new Logger();

  /** Actions to print messages for debug mode. */
  public debug(tag: string, message: string): void {
    // TODO: Create properties to set verbose mode.
    this.logger.debug(`[${tag}] ${message}`);
  }
}
