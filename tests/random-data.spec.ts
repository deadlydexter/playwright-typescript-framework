import { test, expect } from '../fixtures/testFixtures';
import { RandomData } from '../utils/randomData';

test.describe('Random test-data utility', () => {
  test('generate unique usernames with the requested prefix', async () => {
    const firstUsername = RandomData.generateUsername('qa');
    const secondUsername = RandomData.generateUsername('qa');

    expect(firstUsername).toMatch(/^qa_\d+_\d+$/);
    expect(secondUsername).toMatch(/^qa_\d+_\d+$/);
    expect(firstUsername).not.toBe(secondUsername);
  });
});
