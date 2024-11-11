// src/index.ts

type LogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal';

class Logger {
  private logLevel: LogLevel;
  private logLevels: Record<LogLevel, number>;

  constructor() {
    this.logLevel = (process.env.LOG_LEVEL as LogLevel) || 'info';
    this.logLevels = {
      trace: 0,
      debug: 1,
      info: 2,
      warn: 3,
      error: 4,
      fatal: 5,
    };
  }

  private log(level: LogLevel, message: string): void {
    if (this.logLevels[level] >= this.logLevels[this.logLevel]) {
      console.log(`[${level.toUpperCase()}] ${message}`);
    }
  }

  public trace(message: string): void {
    this.log('trace', message);
  }

  public debug(message: string): void {
    this.log('debug', message);
  }

  public info(message: string): void {
    this.log('info', message);
  }

  public warn(message: string): void {
    this.log('warn', message);
  }

  public error(message: string): void {
    this.log('error', message);
  }

  public fatal(message: string): void {
    this.log('fatal', message);
  }
}

const logger = new Logger();
export default logger;
