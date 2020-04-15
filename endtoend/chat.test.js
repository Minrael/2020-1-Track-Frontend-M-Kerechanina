const path = require('path');

describe('app', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000/2020-1-Track-Frontend-M-Kerechanina/')
    })

    it('should display index page, go to user infopage, go to chat page', async () => {
    
        await expect(page).toMatch('Messenger');
        await page.waitFor(2000);
        await page.click(`a[name="signInLink"]`);
        await page.waitFor(2000);
        await page.click(`a[name="chatsLink"]`);  
    }, 60000)

    it('should write a message, click to button send, display the message', async () => {
    
        await expect(page).toMatch('Дженнифер');
        await page.focus('.input-form');
        await page.waitFor(2000);
        await page.type('.input-form', 'Hello!');
        await page.waitFor(2000);
        await page.click('#submit');
        await page.waitFor(2000);
        await expect(page).toMatch('Hello!');       
    }, 60000)

    it('should write a message with emoji, click to button send, display the message', async () => {
    
        await page.focus('.input-form');
        await page.type('.input-form', 'Hello!');
        await page.waitFor(2000);
        await page.click('#emoji');
        await page.waitFor(2000);
        await page.click('i.smile.emoji');
        await page.waitFor(2000);
        await page.click('#submit');
        await page.waitFor(2000); 
    }, 60000)
})