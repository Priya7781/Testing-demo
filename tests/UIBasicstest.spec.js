// const {test, expect} = require('@playwright/test');

// test('First Playwright test', async ({ browser}) =>
//     {
//         // const userName=page.locator('#username');
//         const context= await browser.newContext();
//         const page = await context.newPage();
//         await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
//         const userName=page.locator('#username');
//         const signInBtn=page.locator('#signInBtn');
//         const cardTitles=page.locator(".card-body a");
//         console.log(await page.title());
//         await userName.fill('rahulshetty');
//         await page.locator('#password').fill('learning');
//         await signInBtn.click();
//         console.log(await page.locator("[style*='block']").textContent());
//         await expect(page.locator("[style*='block']")).toContainText('Incorrect');

//         await userName.fill("");
//         await userName.fill("rahulshettyacademy");
//         await signInBtn.click();
//         // console.log(await cardTitles.nth(0).textContent());
//         // console.log(await cardTitles.nth(1).textContent());
//         // await page.waitForLoadState('networkidle');
//         await page.waitForSelector('.card-body a');
//         const allTitles=await cardTitles.allTextContents();
//         console.log(allTitles);

    

//         // await userName.fill('rahulshettyacademy');



//     });


//     test('UI Controls', async ({ page}) => 
//         {
//             // const context= await browser.newContext();
//             // const page = await context.newPage();
//             await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
//             const userName=page.locator('#username');
//             const signInBtn=page.locator('#signInBtn');
//             const dropdown=page.locator('select.form-control');
//             const documentLink=page.locator("[href*='documents-request']");
//             await dropdown.selectOption("consult");
//             await page.locator(".radiotextsty").last().click();
//             await page.locator("#okayBtn").click();
//             console.log(await page.locator(".radiotextsty").last().textContent());
//             console.log(await page.locator(".radiotextsty").last().isChecked());
//             await expect(page.locator(".radiotextsty").last()).toBeChecked();
//             await (page.locator("#terms")).click();
//             await expect(page.locator("#terms")).toBeChecked();
//             await page.locator("#terms").uncheck();
//             expect(await page.locator("#terms").isChecked()).toBe(false);
//             await expect(documentLink).toHaveAttribute('class','blinkingText');
//             // await page.pause();

    
//         });

//         test('Child windows handling', async ({browser}) =>
//         {
//             const context= await browser.newContext();
//             const page = await context.newPage();
//             await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
//             const userName=page.locator('#username');
//             const documentLink=page.locator("[href*='documents-request']");
//             const [newPage]=await Promise.all(
//             [
//                 context.waitForEvent('page'), //listen for any new page pending, rejected, fulfilled
//                 documentLink.click(),
//             ])

//             const text = await newPage.locator(".red").textContent();
//             const arraytext= text.split("@");
//             const domain=arraytext[1].split(" ")[0];
//             // console.log(domain);
//             await page.locator('#username').fill(domain);

//             //Print the text which we entered above
//             console.log(await page.locator('#username').textContent());
 
//         });



// test('test', async ({ page }) => {
//   await page.goto('https://www.google.com/');
//   await page.getByLabel('Search', { exact: true }).click();
//   await page.getByLabel('Search', { exact: true }).fill('baby john');
//   await page.goto('https://www.google.com/search?q=baby+john&sca_esv=6f81cb1eb6e63dc2&source=hp&ei=crWDZ4-uBfTDvr0P1LrmoQg&iflsig=AL9hbdgAAAAAZ4PDgvlMB6AeH-AkpOqoRhvHB6PH15q_&ved=0ahUKEwiPr5C7l_CKAxX0oa8BHVSdOYQQ4dUDCBA&uact=5&oq=baby+john&gs_lp=Egdnd3Mtd2l6IgliYWJ5IGpvaG4yCBAuGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQMyCxAAGIAEGLEDGIMBMggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMgsQABiABBixAxiDATIIEAAYgAQYsQMyCBAAGIAEGLEDSKttUP9BWM5ccAF4AJABAJgBfqAB4geqAQMwLjm4AQPIAQD4AQGYAgqgApcIqAIKwgIKEAAYAxjqAhiPAcICDhAAGIAEGLEDGIMBGIoFwgIFEAAYgATCAg4QLhiABBixAxjRAxjHAcICCxAuGIAEGLEDGIMBwgIFEC4YgATCAg4QLhiABBixAxiDARiKBcICDhAuGIAEGLEDGMcBGK8BwgILEC4YgAQYsQMYigWYAwnxBRpqXtaNzVk6kgcDMS45oAfbYg&sclient=gws-wiz');
//   await page.getByRole('link', { name: 'Baby John (film) Wikipedia' }).click();
//   await page.getByRole('link', { name: 'Varun Dhawan', exact: true }).nth(1).click();
//   await page.getByRole('link', { name: 'Celebrity' }).first().click();
// });