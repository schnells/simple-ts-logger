type LogLevel = 'debug' | 'info' | 'warn' | 'error';

class Logger {
  private currentLevel: LogLevel;
  private static levels: LogLevel[] = ['debug', 'info', 'warn', 'error'];

  constructor() {
    const envLogLevel = (process.env.LOG_LEVEL || 'info') as LogLevel;
    this.currentLevel = envLogLevel;
  }

  private log(level: LogLevel, ...args: any[]) {
    if (Logger.levels.indexOf(level) >= Logger.levels.indexOf(this.currentLevel)) {
      if (level === 'error') {
        console.error(`[ERROR]`, ...args);
      } else {
        console.log(`[${level.toUpperCase()}]`, ...args);
      }
    }
  }

  debug(...args: any[]) {
    this.log('debug', ...args);
  }

  info(...args: any[]) {
    this.log('info', ...args);
  }

  warn(...args: any[]) {
    this.log('warn', ...args);
  }

  error(...args: any[]) {
    this.log('error', ...args);
  }
}

const logger = new Logger();
export default logger;
