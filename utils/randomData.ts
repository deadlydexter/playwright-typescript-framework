export class RandomData {
  static generateUsername(prefix: string = 'user'): string {
    const timestamp = Date.now();
    const randomNumber = Math.floor(Math.random() * 1000);

    return `${prefix}_${timestamp}_${randomNumber}`;
  }
}
