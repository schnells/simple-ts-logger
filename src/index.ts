type LogLevel = 'debug' | 'info' | 'warn' | 'error';

class Logger {
  private currentLevel: LogLevel;

  constructor() {
    // Log-Level wird aus den Umgebungsvariablen abgeleitet oder auf 'info' gesetzt
    const envLogLevel = (process.env.LOG_LEVEL || 'info') as LogLevel;
    this.currentLevel = envLogLevel;
  }

  private log(level: LogLevel, message: string) {
    const levels: LogLevel[] = ['debug', 'info', 'warn', 'error'];
    if (levels.indexOf(level) >= levels.indexOf(this.currentLevel)) {
      console.log(`[${level.toUpperCase()}] ${message}`);
    }
  }

  debug(message: string) {
    this.log('debug', message);
  }

  info(message: string) {
    this.log('info', message);
  }

  warn(message: string) {
    this.log('warn', message);
  }

  error(message: string) {
    this.log('error', message);
  }
}

const logger = new Logger();
export default logger;
