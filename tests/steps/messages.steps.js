
import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from '../fixture/fixtures';
import { loginUser } from "./signin.steps";


const { Before, Given, When, Then, After } = createBdd(test);


Given('the user is on messages screen',  async ({signInPage,messagePage}) => {
 const pin = process.env.PIN1 || "123123";
  await loginUser(signInPage, pin);
 await messagePage.messagesMenu.click();
 // await expect(messagePage.sendNewMessageBtn).toBeVisible();
});

When('the user creates a new message and sends', async ({messagePage}) => {
    await messagePage.sendNewMessageBtn.click();
    await messagePage.relatedAccount.selectOption('xPJXS0JSVp/hesKUtzr8BRRGU2GNlRmIJlK6dKqz1Lc=');
    await messagePage.subject.selectOption('Payment query');
    await messagePage.message.fill("This is a test message");
    await messagePage.sendMessageBtn.click();
});

When('the user sends message', async ({messagePage}) => {
    //await messagePage.sendNewMessageBtn.click();
    await messagePage.relatedAccount.selectOption('xPJXS0JSVp/hesKUtzr8BRRGU2GNlRmIJlK6dKqz1Lc=');
    await messagePage.subject.selectOption('Payment query');
    await messagePage.message.fill("This is a test message");
    await messagePage.sendMessageBtn.click();
});

When('the user sends secure message', async ({messagePage}) => {
       await messagePage.message.fill("This is a test message");
    await messagePage.sendMessageBtn.click();
});

Then('message sent successfully screen should be displayed', async ({messagePage}) => {

    await expect(messagePage.returntomessagesBtn).toBeVisible();
   
  });

  Then('messages screen should be displayed', async ({messagePage}) => {

    await expect(messagePage.sendNewMessageBtn).toBeVisible();
   
  });
  When('the user does not complete all of the mandatory fields for send new message', async ({messagePage}) => {
    await messagePage.sendNewMessageBtn.click();
     await messagePage.sendMessageBtn.click();
});

Then('mandatory fields missing error message is displayed for send new message', async ({messagePage}) => {
    await expect(messagePage.accounterror).toContainText('Please select an account');
  await expect(messagePage.subjecterror).toContainText('Please select a subject');
  await expect(messagePage.messageerror).toContainText('You have not reached the minimum amount of text in your message');
});

When('the user clicks on the message', async ({messagePage}) => {
      await messagePage.messageThread1.click();
});

When('user clicks on reply', async ({messagePage}) => {
  await messagePage.replyBtn.click();
});

When('the user clicks on return to messages', async ({messagePage}) => {
  await messagePage.returntomessagesBtn.click();
});
When('the user clicks on cancel on message details screen', async ({messagePage}) => {
  await messagePage.returntomessagesfrommessagedetailsBtn.click();
});



When('the user clicks on cancel for reply message', async ({messagePage}) => {
   await messagePage.message.fill("This is a reply message");
  await messagePage.returntomessagesfromreplyBtn.click();
});

Then('message details screen should be displayed', async ({messagePage}) => {
    await expect(messagePage.returntomessagesfrommessagedetailsBtn).toBeVisible();
});

When('user replies to the message', async ({messagePage}) => {
   await messagePage.replysubmitBtn.click();
  await expect(messagePage.messageerror).toContainText('You have not reached the minimum amount of text in your message');
  await messagePage.message.fill("This is a reply message");
  await messagePage.replysubmitBtn.click();
  await messagePage.returntomessagesfromreplyBtn.click();
});