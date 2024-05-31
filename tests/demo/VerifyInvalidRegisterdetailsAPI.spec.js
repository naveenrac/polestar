import { test, expect } from '@playwright/test';
import exp from 'constants';
test('Verify invalid user details of post Request', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/register', {
        data: {
            "email": "xyz@gmail",
            "password": "Avago@123$",

        }
    })
    // expect(response.status().toBe(201));
    const text = await response.text();
    console.log(await response.json());
    console.log(response.status());
})