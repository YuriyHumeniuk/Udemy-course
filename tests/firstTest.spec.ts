import {test} from '@playwright/test'

test.beforeEach(async ({page}) => {
        await page.goto('http://localhost:4200/')
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
})

test ('Locator syntax rules', async({page}) => {
    //locator by Tag name - just tag
    await page.locator('input').first().click()
    // by ID - #<ID>
    page.locator('#inputEmail1')
    //by Class - .<Class>
    page.locator('.shape-rectangle')
    //by attribute - [placeholder="Email"]
    page.locator('[placeholder="Email"]')
    //by Class value (full)
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //combine different selectors
    page.locator('input[placeholder="Email"]#inputEmail1')

    //by XPath [NOT RECOMENDED] - could be changed though the development
    page.locator('//*[@id="inputEmail1"]')

    //by partial text match
    page.locator(':text("Using")')
    //by exact text match
    page.locator(':text-is("Using the Grid")')
})

test ('User facing locators', async({page}) => {
    await page.getByRole('textbox', {name:"Email"}).first().click()
    await page.getByRole('button', {name:"Sign in"}).first().click()

    await page.getByLabel('Password').first().click()

    await page.getByPlaceholder('Jane Doe').click()

    await page.getByText('Using the Grid').click()

    //await page.getByTestId('SignIn').click() // we can add in programing code test id to mark element e.g. data-testid='SignIn' add into button code

    await page.getByTitle('IoT Dashboard').click()
})

test ('locating child elements', async({page}) => {
    await page.locator('nb-card nb-radio :text-is("Option 1")').click()
    await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click() //same as above, but above syntax more compact

    await page.locator('nb-card').getByRole('button', {name:"Sign in"}).first().click()

    await page.locator('nb-card').nth(3).getByRole('button').click()
})