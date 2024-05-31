import { test, expect } from '@playwright/test';

test('Verify delete user function', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/1');

    // Correct expect syntax
    expect(response.status()).toBe(204); // 204 is the typical status for successful delete operations

    // Log the response status
    console.log(response.status());

    // If you need to log the response body, use response.text() or response.json()
    const responseBody = await response.text(); // .text() or .json() depending on what you expect
    console.log(responseBody);
});
