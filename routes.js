const express = require('express');
const route = express.Router();
const chrome = require('selenium-webdriver/chrome');
const { Builder, By, key, until } = require('selenium-webdriver');

const screen = {
    width: 1366,
    height: 1050,
};

route.get('/', async (req, res) => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    let array = [{ company: "alkyl amines", target: 200 },
    // {company:"mtar technology", target: 1600},
    // {company:"varun beverages", target: 1400},
    // {company:"kpit", target: 870},
    // {company:"alkyl amines", target: 2300},
    // {company:"balaji amines", target: 2450},
    // {company:"avenue supermarts", target: 3490},
    // {company:"tcs", target: 3190},
    // {company:"muthoot finance", target: 1034},
    // {company:"infosys", target: 1380},
    // {company:"relaxo footwear", target: 800},
    // {company:"adani green energy", target: 940},
    // {company:"finotex chemical", target: 240},
    // {company:"dipak nitrate", target: 1850},
    // {company:"happiest mind", target: 800},
    // {company:"astral pipes", target: 1400},
    // {company:"pidilite industries", target: 2300},
    // {company:"mahindra and mahindra", target: 1200},
    // {company:"prince pipes", target: 590},
    // {company:"iex", target: 150},
    // {company:"affle", target: 930},
    // {company:"icici", target: 800},
    // {company:"irctc", target: 560},
    // {company:"nyka", target: 125},
    // {company:"paytm", target: 650},
    // {company:"tata power", target: 190},
    // {company:"hle glasscoat ltd", target: 500},
    // {company:"asian paints", target: 2725},
    // {company:"polycab india", target: 2600},
    // {company:"tvs motors", target: 1000},
    // {company:"hindustan aeronautical", target: 2600},
    // {company:"au bank", target: 600},
    // {company:"hdfc", target: 1630},
    { company: "berger paints", target: 550 }]

    let driver = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().windowSize(screen)).build();
    // let driver = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless().addArguments('--disable-dev-shm-using').windowSize(screen)).build();
    for (i = 0; i < array.length; i++) {
        console.log(array[i].company);
        await driver.get(`https://www.google.com/search?q=${array[i].company}+share+price`);

        let mailingAddress = await driver.wait(until.elementLocated(By.xpath('//*[@id="knowledge-finance-wholepage__entity-summary"]/div[3]/g-card-section/div/g-card-section/div/div/span[1]/span/span[1]')), 2000).getText();
        let str = mailingAddress.replace(',', '')
        array[i].price = Number(str);
        console.log(array[i].price);
    }

    // await sleep(2000);
    console.log(array);
    await driver.close();

    res.render('result', { array: array });
});

module.exports = route;
