import { test, expect } from '@playwright/test';
import exp from 'constants';
test('Verify login details of post Request', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/login', {
    data: {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
    }
  })
  // expect(response.status().toBe(201));
  const text = await response.text();
  console.log(await response.json());
  console.log(response.status());
})