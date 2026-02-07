
export const withTimeout = <T>(
  promise: Promise<T>,
  timeoutMs: number = 5000,
  errorMessage: string = 'Operation timed out'
): Promise<T> => {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => {
        reject(new Error(`${errorMessage} (${timeoutMs}ms)`));
      }, timeoutMs)
    ),
  ]);
};

export const timeout = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
