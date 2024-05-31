import { test, expect } from '@playwright/test';
import exp from 'constants';
test('Verify update user', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "morpheus",
            "job": "zion resident"
        }
    })
    // expect(response.status().toBe(201));
    const text = await response.text();
    console.log(await response.json());
    console.log(response.status());
})