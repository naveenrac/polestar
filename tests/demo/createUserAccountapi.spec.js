import { test, expect } from '@playwright/test';
//import exp from 'constants';
test('API POST Request', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      "name": "morpheus",
      "job": "leader"
    }
  })
  expect(response.status().toBe(201));
  const text = await response.text();
  console.log(response.json());
  console.log(response.status());
})