import { environment } from '../../environments/environment';

export function initializer(): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };
}
