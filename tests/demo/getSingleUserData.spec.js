import { test, expect } from '@playwright/test';
//import exp from 'constants';
test('API Get Request', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users/2', {
    
  })
  expect(response.status().toBe(201));
  const text = await response.text();
  console.log(response.json());
  console.log(response.status());
})