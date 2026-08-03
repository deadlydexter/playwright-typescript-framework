import { test, expect } from '../../fixtures/testFixtures';

test.describe('Posts API tests', () => {
  test('get a post by ID', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    const responseBody = await response.json();

    expect(responseBody).toEqual(
      expect.objectContaining({
        id: 1,
        userId: 1,
      })
    );

    expect(responseBody.title).toBeTruthy();
    expect(responseBody.body).toBeTruthy();
  });
  test('create a new post', async ({ request }) => {
    const requestBody = {
      title: 'Playwright API test',
      body: 'Creating test data using Playwright',
      userId: 1,
    };

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: requestBody,
    });

    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();

    const responseBody = await response.json();

    expect(responseBody).toEqual(
      expect.objectContaining({
        title: requestBody.title,
        body: requestBody.body,
        userId: requestBody.userId,
      })
    );

    expect(responseBody.id).toBeDefined();
  });
  test('returns 404 for a missing post', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/999999');

    expect(response.status()).toBe(404);
    expect(response.ok()).toBeFalsy();

    const responseBody = await response.json();

    expect(responseBody).toEqual({});
  });
});
