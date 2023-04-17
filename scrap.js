const chrome = require('selenium-webdriver/chrome');
const { Builder, By, key, until } = require('selenium-webdriver');

async function scrap() {

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    let driver = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().windowSize(screen)).build();
    // let driver = new Builder()
    //   .forBrowser('chrome')
    //   .setChromeOptions(new chrome.Options().headless().addArguments('--disable-dev-shm-using').windowSize(screen))
    //   .build();

    await driver.get('https://www.google.com/search?q=alkyl+amines+share+price');

    let mailingAddress = await driver.wait(until.elementLocated(By.xpath('//*[@id="knowledge-finance-wholepage__entity-summary"]/div[3]/g-card-section/div/g-card-section/div/div/span[1]/span/span[1]')), 2000).getText();
    //*[@id="knowledge-finance-wholepage__entity-summary"]/div[3]/g-card-section/div/g-card-section/div/div/span[1]/span/span[1]
    await sleep(4000);
    console.log(mailingAddress);
    driver.close();
}

module.export = { scrap };

// let m;

// let today = new Date().toISOString().slice(0, 10);

// // <-- initializing xlsx file details -->
// let fileName = xlsx.readFile('mapwise-test.xlsx');
// const sheetNames = fileName.SheetNames;
// const totalSheets = sheetNames.length;

// let allData = [];
//   let dataArray = [];
//   let notFoundArray = [];

//   // <--- reading whole sheet data and convert into json --->
//   let myPromise = new Promise(function (myResolve, myReject) {
//     for (m = 0; m < totalSheets; m++) {
//       const tempData = xlsx.utils.sheet_to_json(fileName.Sheets[sheetNames[m]]);
//       // tempData.shift();
//       allData.push(...tempData);
//     }
//     myResolve();
//   });

//   myPromise.then(function () {
//     f1();
//   });

//   tempData = null;

//   async function f1() {
   

//     let [
//       { op: op1, ed: ed1 },
//       // { op: op2, ed: ed2 },
//       // { op: op3, ed: ed3 },
//       // { op: op4, ed: ed4 },
//       // { op: op5, ed: ed5 },
//     ] = await Promise.all([
//       mapwiseFunction(allData, 'vinnie@vinniegrantinc.com', '9c530568aab1952', 15000),
//       // mapwiseFunction(allData.slice(0, chunkRows * 1), id[0], password[0], 5000),
//       // mapwiseFunction(allData.slice(chunkRows * 1, chunkRows * 2), id[1], password[1], 15000),
//       // mapwiseFunction(allData.slice(chunkRows * 2, chunkRows * 3), id[2], password[2], 25000),
//       // // mapwiseFunction(allData.slice(chunkRows * 3, totalRows), id[3], password[3], 15000),
//       // mapwiseFunction(allData.slice(chunkRows * 3, chunkRows * 4), id[3], password[3], 35000),
//       // mapwiseFunction(allData.slice(chunkRows * 4, totalRows), id[4], password[4], 45000),
//     ]);

//     op = null;
//     ed = null;
//     allData = null;

//     let myPromise = new Promise(function (myResolve, myReject) {
//       dataArray = [...op1];
//       notFoundArray = [...ed1];
//       // dataArray = [...op1, ...op2, ...op3, ...op4, ...op5];
//       // notFoundArray = [...ed1, ...ed2, ...ed3, ...ed4, ...ed5];
//       myResolve();
//     });

//     // op1 = null; op2 = null; op3 = null; op4 = null; op5 = null;
//     // ed1 = null; ed2 = null; ed3 = null; ed4 = null; ed5 = null;

//     myPromise.then(function () {
//       f2();
//     });

//     async function f2() {
//       try {
//         // <--- Filling the data in new sheet --->
//         const newFileName = today + '-MapwiseOutput.xlsx';
//         const ws = xlsx.utils.json_to_sheet(dataArray);
//         const wb = xlsx.utils.book_new();
//         xlsx.utils.book_append_sheet(wb, ws, 'New data');
//         xlsx.writeFile(wb, newFileName);
//         console.log('new file generated');
//       } catch (error) {
//         console.log('error---> ' + error.message);
//       }

//       try {
//         // <--- Filling the data in new sheet --->
//         const newFileName = today + '-MapwiseNotFound.xlsx';
//         const ws = xlsx.utils.json_to_sheet(notFoundArray);
//         const wb = xlsx.utils.book_new();
//         xlsx.utils.book_append_sheet(wb, ws, 'New data');
//         xlsx.writeFile(wb, newFileName);
//         console.log('new file generated');
//       } catch (error) {
//         console.log('error---> ' + error.message);
//       }

//       const file1 = today + '-MapwiseOutput.xlsx';
//       const rs1 = fs.createReadStream(today + '-MapwiseOutput.xlsx');
//       const ws1 = fs.createWriteStream('./public/' + today + '-MapwiseOutput.xlsx');
//       rs1.pipe(ws1);
//       rs1.on('end', () => {
//         fs.unlinkSync(today + '-MapwiseOutput.xlsx');
//       });

//       const file2 = today + '-MapwiseNotFound.xlsx';
//       const rs2 = fs.createReadStream(today + '-MapwiseNotFound.xlsx');
//       const ws2 = fs.createWriteStream('./public/' + today + '-MapwiseNotFound.xlsx');
//       rs2.pipe(ws2);
//       rs2.on('end', () => {
//         fs.unlinkSync(today + '-MapwiseNotFound.xlsx');
//       });

//       dataArray = null;
//       notFoundArray = null;
//     }
//   }

// // <--- create browser window --->
// const screen = {
//   width: 1366,
//   height: 1050,
// };

// async function mapwiseFunction(allData, id, password) {
//   let driver = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().windowSize(screen)).build();
//   // let driver = new Builder()
//   //   .forBrowser('chrome')
//   //   .setChromeOptions(new chrome.Options().headless().addArguments('--disable-dev-shm-using').windowSize(screen))
//   //   .build();

//   const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//   let name, county, siteAddress, zipcode;
//   let nameArray, firstName, lastName, fullName, tempFirstName;
//   let temp,
//     b = 0,
//     z = 0;
//   let len = allData.length;
//   let outputArray = [];
//   let notFoundArray = [];
//   let blankObject = {
//     Home_Address: '',
//     Unit: '',
//     City: '',
//     State: '',
//     Zipcode: '',
//   };

//   // <--- loading mapwise website --->
//   await driver.get('https://www.mapwise.com/members/login.php');

//   let userIdTextbox = await driver.wait(until.elementLocated(By.xpath('//*[@id="email"]')), 1000);
//   await userIdTextbox.sendKeys(id);
//   let passwordTextbox = await driver.findElement(By.xpath('//*[@id="pass"]'));
//   await passwordTextbox.sendKeys(password);

//   let submitButton = await driver.findElement(By.xpath('//*[@id="submit_button"]'));
//   await submitButton.click();

//   let mapViewerButton = await driver.wait(until.elementLocated(By.xpath('/html/body/div[2]/div[1]/div/div/div[2]/div[1]/div[2]/a')), 1000);
//   await mapViewerButton.click();

//   await sleep(5000);
//   let { data1, data2 } = await scrapping();

//   await sleep(2000);
//   await driver.close();
//   console.log('driver tab is closed');

//   let op = data1;
//   let ed = data2;

//   return { op, ed };

//   async function scrapping() {
//     for (let i = 0; i < len; i++) {
//       // console.log(`iteration ${i}`);
//       let obj = {
//         Mailing_Address: '',
//       };
//       let outputObj = {};

//       try {
//         // if (allData[i].Principle_Address === '' || allData[i].Name === '') {
//         //   await driver.navigate().refresh();
//         //   await sleep(2000);
//         //   continue;
//         // } else {
//         await variableAssignment(i);
//         await sleep(2000);

//         outputObj = {
//           Condo_Association: allData[i].Condo_Name,
//           County: allData[i].County,
//           Title: allData[i].Title,
//           First_Name: firstName,
//           Last_Name: lastName,
//           Page_URL: allData[i].Page_URL,
//         };

//         try {
//           setTimeout(async () => {
//             let parcelButton = await driver.findElement(By.xpath('//*[@id="ext-gen71"]/em/span/span'));
//             await parcelButton.click();
//             let searchButton = await driver.findElement(By.xpath('//*[@id="ext-gen87"]/em/span/span'));
//             await searchButton.click();

//             try {
//               let lastNameTextbox = await driver.findElement(By.xpath('//*[@id="formSearchOwner1"]'));
//               await lastNameTextbox.clear();
//               let addressTextbox = await driver.findElement(By.xpath('//*[@id="formSearchAddress1"]'));
//               await addressTextbox.clear();
//               let zipcodeTextbox = await driver.findElement(By.xpath('//*[@id="formSearchZipcode"]'));
//               await zipcodeTextbox.clear();
//             } catch (err) {}
//           }, 3000);

//           await sleep(3200);

//           let lastNameTextbox = await driver.findElement(By.xpath('//*[@id="formSearchOwner1"]'));
//           await lastNameTextbox.sendKeys(lastName);
//           let addressTextbox = await driver.findElement(By.xpath('//*[@id="formSearchAddress1"]'));
//           await addressTextbox.sendKeys(siteAddress);
//           let zipcodeTextbox = await driver.findElement(By.xpath('//*[@id="formSearchZipcode"]'));
//           await zipcodeTextbox.sendKeys(zipcode);

//           let countyTextbox = await driver.findElement(By.xpath('//*[@id="formSearchCounty"]'));
//           await countyTextbox.click();

//           await sleep(4000);
//           await countySelect(county);

//           let searchButton = await driver.wait(until.elementLocated(By.xpath('//*[@id="ext-gen97"]')), 1000);
//           await searchButton.click();

//           let d = 1,
//             j;
//           let dateArray = [];

//           while (d <= 5) {
//             try {
//               dateInfo = await driver
//                 .wait(until.elementLocated(By.xpath(`//*[@id="ext-gen432"]/div[${d}]/table/tbody/tr/td[16]/div`)), 2000)
//                 .getText();
//               dateArray.push(new Date(dateInfo));
//               d++;
//             } catch (error) {
//               break;
//             }
//           }

//           if (dateArray.length === 0) {
//           } else if (dateArray.length === 1) {
//             await driver.findElement(By.xpath(`//*[@id="ext-gen432"]/div/table/tbody/tr/td[3]/div/a`)).click();

//             let mailingAddress = await driver
//               .wait(until.elementLocated(By.xpath('//*[@id="pi2_left_col"]/table[1]/tbody/tr[3]/td[2]')), 2000)
//               .getText();

//             obj = { Mailing_Address: mailingAddress };

//             tempObj = await breakDown(mailingAddress);

//             outputArray[z] = { ...outputObj, ...tempObj };
//             z++;
//             continue;
//           } else {
//             let val = dateArray.reduce((a, b) => {
//               return new Date(a.MeasureDate) > new Date(b.MeasureDate) ? a : b;
//             });
//             d - 2;

//             for (j = 0; j < d; j++) {
//               if (dateArray[j] === val) {
//                 break;
//               }
//             }
//             j++;

//             let link = await driver.wait(until.elementLocated(By.xpath(`//*[@id="ext-gen432"]/div[${j}]/table/tbody/tr/td[3]/div/a`)), 1000);
//             await link.click();

//             let mailingAddress = await driver
//               .wait(until.elementLocated(By.xpath('//*[@id="pi2_left_col"]/table[1]/tbody/tr[3]/td[2]')), 1000)
//               .getText();

//             obj = { Mailing_Address: mailingAddress };
//             tempObj = await breakDown(mailingAddress);
//             outputArray[z] = { ...outputObj, ...tempObj };
//             z++;

//             continue;
//           }

//           await driver.navigate().refresh();
//           await sleep(2200);
//         } catch (err) {
//           await driver.navigate().refresh();
//           await sleep(2000);
//         }

//         if (obj.Mailing_Address === '') {
//           try {
//             setTimeout(async () => {
//               let parcelButton = await driver.findElement(By.xpath('//*[@id="ext-gen71"]/em/span/span'));
//               await parcelButton.click();
//               let searchButton = await driver.findElement(By.xpath('//*[@id="ext-gen87"]/em/span/span'));
//               await searchButton.click();

//               try {
//                 let lastNameTextbox = await driver.findElement(By.xpath('//*[@id="formSearchOwner1"]'));
//                 await lastNameTextbox.clear();
//                 let addressTextbox = await driver.findElement(By.xpath('//*[@id="formSearchAddress1"]'));
//                 await addressTextbox.clear();
//                 let zipcodeTextbox = await driver.findElement(By.xpath('//*[@id="formSearchZipcode"]'));
//                 await zipcodeTextbox.clear();
//               } catch (err) {}
//             }, 3000);

//             await sleep(3200);

//             let firstNameTextbox = await driver.findElement(By.xpath('//*[@id="formSearchOwner1"]'));
//             await firstNameTextbox.sendKeys(fullName);

//             let countyTextbox = await driver.findElement(By.xpath('//*[@id="formSearchCounty"]'));
//             await countyTextbox.click();
//             await sleep(4000);
//             await countySelect(county);

//             let searchButton = await driver.wait(until.elementLocated(By.xpath('//*[@id="ext-gen97"]')), 1000);
//             await searchButton.click();

//             let j,
//               d = 1;

//             let dateArray = [];

//             while (d <= 5) {
//               try {
//                 dateInfo = await driver
//                   .wait(until.elementLocated(By.xpath(`//*[@id="ext-gen432"]/div[${d}]/table/tbody/tr/td[16]/div`)), 2000)
//                   .getText();
//                 dateArray.push(new Date(dateInfo));
//                 d++;
//               } catch (error) {
//                 break;
//               }
//             }

//             if (dateArray.length === 0) {
//             } else if (dateArray.length === 1) {
//               await driver.findElement(By.xpath(`//*[@id="ext-gen432"]/div/table/tbody/tr/td[3]/div/a`)).click();
//               let mailingAddress = await driver
//                 .wait(until.elementLocated(By.xpath('//*[@id="pi2_left_col"]/table[1]/tbody/tr[3]/td[2]')), 2000)
//                 .getText();

//               obj = { Mailing_Address: mailingAddress };
//               tempObj = await breakDown(mailingAddress);
//               outputArray[z] = { ...outputObj, ...tempObj };
//               z++;

//               continue;
//             } else {
//               let val = dateArray.reduce((a, b) => {
//                 return new Date(a.MeasureDate) > new Date(b.MeasureDate) ? a : b;
//               });
//               d - 2;

//               for (j = 0; j < d; j++) {
//                 if (dateArray[j] === val) {
//                   break;
//                 }
//               }
//               j++;

//               let link = await driver.wait(until.elementLocated(By.xpath(`//*[@id="ext-gen432"]/div[${j}]/table/tbody/tr/td[3]/div/a`)), 1000);
//               await link.click();

//               let mailingAddress = await driver
//                 .wait(until.elementLocated(By.xpath('//*[@id="pi2_left_col"]/table[1]/tbody/tr[3]/td[2]')), 1000)
//                 .getText();

//               obj = { Mailing_Address: mailingAddress };
//               tempObj = await breakDown(mailingAddress);
//               outputArray[z] = { ...outputObj, ...tempObj };
//               z++;
//               continue;
//             }

//             await driver.navigate().refresh();
//             await sleep(2200);
//           } catch (err) {
//             await driver.navigate().refresh();
//             await sleep(2000);
//           }
//         }

//         if (obj.Mailing_Address === '') {
//           try {
//             setTimeout(async () => {
//               let parcelButton = await driver.findElement(By.xpath('//*[@id="ext-gen71"]/em/span/span'));
//               await parcelButton.click();
//               let searchButton = await driver.findElement(By.xpath('//*[@id="ext-gen87"]/em/span/span'));
//               await searchButton.click();

//               try {
//                 let lastNameTextbox = await driver.findElement(By.xpath('//*[@id="formSearchOwner1"]'));
//                 await lastNameTextbox.clear();
//                 let addressTextbox = await driver.findElement(By.xpath('//*[@id="formSearchAddress1"]'));
//                 await addressTextbox.clear();
//                 let zipcodeTextbox = await driver.findElement(By.xpath('//*[@id="formSearchZipcode"]'));
//                 await zipcodeTextbox.clear();
//               } catch (err) {}
//             }, 3000);

//             await sleep(3200);

//             let firstNameTextbox = await driver.findElement(By.xpath('//*[@id="formSearchOwner1"]'));
//             await firstNameTextbox.sendKeys(lastName);

//             let countyTextbox = await driver.findElement(By.xpath('//*[@id="formSearchCounty"]'));
//             await countyTextbox.click();
//             await sleep(4000);
//             await countySelect(county);

//             let searchButton = await driver.wait(until.elementLocated(By.xpath('//*[@id="ext-gen97"]')), 1000);
//             await searchButton.click();

//             let j,
//               d = 1;

//             let dateArray = [];

//             while (d <= 5) {
//               try {
//                 dateInfo = await driver
//                   .wait(until.elementLocated(By.xpath(`//*[@id="ext-gen432"]/div[${d}]/table/tbody/tr/td[16]/div`)), 2000)
//                   .getText();
//                 dateArray.push(new Date(dateInfo));
//                 d++;
//               } catch (error) {
//                 break;
//               }
//             }

//             if (dateArray.length === 0) {
//             } else if (dateArray.length === 1) {
//               await driver.findElement(By.xpath(`//*[@id="ext-gen432"]/div/table/tbody/tr/td[3]/div/a`)).click();
//               let mailingAddress = await driver
//                 .wait(until.elementLocated(By.xpath('//*[@id="pi2_left_col"]/table[1]/tbody/tr[3]/td[2]')), 2000)
//                 .getText();

//               obj = { Mailing_Address: mailingAddress };
//               tempObj = await breakDown(mailingAddress);
//               outputArray[z] = { ...outputObj, ...tempObj };
//               z++;

//               continue;
//             } else {
//               let val = dateArray.reduce((a, b) => {
//                 return new Date(a.MeasureDate) > new Date(b.MeasureDate) ? a : b;
//               });
//               d - 2;

//               for (j = 0; j < d; j++) {
//                 if (dateArray[j] === val) {
//                   break;
//                 }
//               }
//               j++;

//               let link = await driver.wait(until.elementLocated(By.xpath(`//*[@id="ext-gen432"]/div[${j}]/table/tbody/tr/td[3]/div/a`)), 1000);
//               await link.click();

//               let mailingAddress = await driver
//                 .wait(until.elementLocated(By.xpath('//*[@id="pi2_left_col"]/table[1]/tbody/tr[3]/td[2]')), 1000)
//                 .getText();

//               obj = { Mailing_Address: mailingAddress };
//               tempObj = await breakDown(mailingAddress);
//               outputArray[z] = { ...outputObj, ...tempObj };
//               z++;
//               continue;
//             }

//             await driver.navigate().refresh();
//             await sleep(2200);
//           } catch (err) {
//             await driver.navigate().refresh();
//             await sleep(2000);
//           }
//         }

//         if (obj.Mailing_Address === '') {
//           try {
//             setTimeout(async () => {
//               let parcelButton = await driver.findElement(By.xpath('//*[@id="ext-gen71"]/em/span/span'));
//               await parcelButton.click();
//               let searchButton = await driver.findElement(By.xpath('//*[@id="ext-gen87"]/em/span/span'));
//               await searchButton.click();

//               try {
//                 let lastNameTextbox = await driver.findElement(By.xpath('//*[@id="formSearchOwner1"]'));
//                 await lastNameTextbox.clear();
//                 let addressTextbox = await driver.findElement(By.xpath('//*[@id="formSearchAddress1"]'));
//                 await addressTextbox.clear();
//                 let zipcodeTextbox = await driver.findElement(By.xpath('//*[@id="formSearchZipcode"]'));
//                 await zipcodeTextbox.clear();
//               } catch (err) {}
//             }, 3000);

//             await sleep(3200);

//             let firstNameTextbox = await driver.findElement(By.xpath('//*[@id="formSearchOwner1"]'));
//             await firstNameTextbox.sendKeys(lastName + ' ' + firstName);

//             let countyTextbox = await driver.findElement(By.xpath('//*[@id="formSearchCounty"]'));
//             await countyTextbox.click();
//             await sleep(4000);
//             await countySelect(county);

//             let searchButton = await driver.wait(until.elementLocated(By.xpath('//*[@id="ext-gen97"]')), 1000);
//             await searchButton.click();

//             let j,
//               d = 1;

//             let dateArray = [];

//             while (d <= 5) {
//               try {
//                 dateInfo = await driver
//                   .wait(until.elementLocated(By.xpath(`//*[@id="ext-gen432"]/div[${d}]/table/tbody/tr/td[16]/div`)), 2000)
//                   .getText();
//                 dateArray.push(new Date(dateInfo));
//                 d++;
//               } catch (error) {
//                 break;
//               }
//             }

//             if (dateArray.length === 0) {
//             } else if (dateArray.length === 1) {
//               await driver.findElement(By.xpath(`//*[@id="ext-gen432"]/div/table/tbody/tr/td[3]/div/a`)).click();
//               let mailingAddress = await driver
//                 .wait(until.elementLocated(By.xpath('//*[@id="pi2_left_col"]/table[1]/tbody/tr[3]/td[2]')), 2000)
//                 .getText();

//               obj = { Mailing_Address: mailingAddress };
//               tempObj = await breakDown(mailingAddress);
//               outputArray[z] = { ...outputObj, ...tempObj };
//               z++;

//               continue;
//             } else {
//               let val = dateArray.reduce((a, b) => {
//                 return new Date(a.MeasureDate) > new Date(b.MeasureDate) ? a : b;
//               });
//               d - 2;

//               for (j = 0; j < d; j++) {
//                 if (dateArray[j] === val) {
//                   break;
//                 }
//               }
//               j++;

//               let link = await driver.wait(until.elementLocated(By.xpath(`//*[@id="ext-gen432"]/div[${j}]/table/tbody/tr/td[3]/div/a`)), 1000);
//               await link.click();

//               let mailingAddress = await driver
//                 .wait(until.elementLocated(By.xpath('//*[@id="pi2_left_col"]/table[1]/tbody/tr[3]/td[2]')), 1000)
//                 .getText();

//               obj = { Mailing_Address: mailingAddress };
//               tempObj = await breakDown(mailingAddress);
//               outputArray[z] = { ...outputObj, ...tempObj };
//               z++;
//               continue;
//             }

//             await driver.navigate().refresh();
//             await sleep(2200);
//           } catch (err) {
//             await driver.navigate().refresh();
//             await sleep(2000);
//           }
//         }

//         if (obj.Mailing_Address === '') {
//           try {
//             setTimeout(async () => {
//               let parcelButton = await driver.findElement(By.xpath('//*[@id="ext-gen71"]/em/span/span'));
//               await parcelButton.click();
//               let searchButton = await driver.findElement(By.xpath('//*[@id="ext-gen87"]/em/span/span'));
//               await searchButton.click();

//               try {
//                 let lastNameTextbox = await driver.findElement(By.xpath('//*[@id="formSearchOwner1"]'));
//                 await lastNameTextbox.clear();
//                 let addressTextbox = await driver.findElement(By.xpath('//*[@id="formSearchAddress1"]'));
//                 await addressTextbox.clear();
//                 let zipcodeTextbox = await driver.findElement(By.xpath('//*[@id="formSearchZipcode"]'));
//                 await zipcodeTextbox.clear();
//               } catch (err) {}
//             }, 3000);

//             await sleep(3200);

//             let lastNameTextbox = await driver.findElement(By.xpath('//*[@id="formSearchOwner1"]'));
//             await lastNameTextbox.sendKeys(firstName);
//             let addressTextbox = await driver.findElement(By.xpath('//*[@id="formSearchAddress1"]'));
//             await addressTextbox.sendKeys(siteAddress);
//             let zipcodeTextbox = await driver.findElement(By.xpath('//*[@id="formSearchZipcode"]'));
//             await zipcodeTextbox.sendKeys(zipcode);

//             let countyTextbox = await driver.findElement(By.xpath('//*[@id="formSearchCounty"]'));
//             await countyTextbox.click();

//             await sleep(4000);
//             await countySelect(county);

//             let searchButton = await driver.wait(until.elementLocated(By.xpath('//*[@id="ext-gen97"]')), 1000);
//             await searchButton.click();

//             let d = 1,
//               j;
//             let dateArray = [];

//             while (d <= 5) {
//               try {
//                 dateInfo = await driver
//                   .wait(until.elementLocated(By.xpath(`//*[@id="ext-gen432"]/div[${d}]/table/tbody/tr/td[16]/div`)), 2000)
//                   .getText();
//                 dateArray.push(new Date(dateInfo));
//                 d++;
//               } catch (error) {
//                 break;
//               }
//             }

//             if (obj.Mailing_Address === '') {
//               notFoundArray[b] = { ...outputObj, ...blankObject };
//               // outputArray[i] = { ...outputObj, ...blankObject };
//               b++;
//               await driver.navigate().refresh();
//               await sleep(2000);
//               continue;
//             }

//             if (dateArray.length === 0) {
//             } else if (dateArray.length === 1) {
//               await driver.findElement(By.xpath(`//*[@id="ext-gen432"]/div/table/tbody/tr/td[3]/div/a`)).click();

//               let mailingAddress = await driver
//                 .wait(until.elementLocated(By.xpath('//*[@id="pi2_left_col"]/table[1]/tbody/tr[3]/td[2]')), 2000)
//                 .getText();

//               obj = { Mailing_Address: mailingAddress };
//               tempObj = await breakDown(mailingAddress);
//               outputArray[z] = { ...outputObj, ...tempObj };
//               z++;

//               continue;
//             } else {
//               let val = dateArray.reduce((a, b) => {
//                 return new Date(a.MeasureDate) > new Date(b.MeasureDate) ? a : b;
//               });
//               d - 2;

//               for (j = 0; j < d; j++) {
//                 if (dateArray[j] === val) {
//                   break;
//                 }
//               }
//               j++;

//               let link = await driver.wait(until.elementLocated(By.xpath(`//*[@id="ext-gen432"]/div[${j}]/table/tbody/tr/td[3]/div/a`)), 1000);
//               await link.click();

//               let mailingAddress = await driver
//                 .wait(until.elementLocated(By.xpath('//*[@id="pi2_left_col"]/table[1]/tbody/tr[3]/td[2]')), 1000)
//                 .getText();

//               obj = { Mailing_Address: mailingAddress };
//               tempObj = await breakDown(mailingAddress);
//               outputArray[z] = { ...outputObj, ...tempObj };
//               z++;

//               continue;
//             }

//             await driver.navigate().refresh();
//             await sleep(2200);
//           } catch (err) {
//             obj = {
//               Mailing_Address: ' ',
//             };

//             notFoundArray[b] = { ...outputObj, ...blankObject };
//             // outputArray[i] = { ...outputObj, ...blankObject };
//             b++;
//             await driver.navigate().refresh();
//             await sleep(2000);
//             continue;
//           }
//         }

//         if (obj.Mailing_Address === '') {
//           obj = {
//             Mailing_Address: ' ',
//           };
//           // outputArray[i] = { ...outputObj, ...blankObject };
//           notFoundArray[b] = { ...outputObj, ...blankObject };
//           b++;
//           await driver.navigate().refresh();
//           await sleep(2000);
//           continue;
//         }
//         // }
//       } catch (e) {
//         obj = {
//           Mailing_Address: ' ',
//         };
//         // outputArray[i] = { ...outputObj, ...blankObject };
//         notFoundArray[b] = { ...outputObj, ...blankObject };
//         b++;
//         await driver.navigate().refresh();
//         await sleep(2000);
//         continue;
//       }
//     }

//     let data1 = outputArray;
//     let data2 = notFoundArray;

//     return { data1, data2 };
//   }

//   async function variableAssignment(i) {
//     temp = allData[i].Principle_Address;
//     name = allData[i].Name;
//     county = allData[i].County;
//     zipcode = temp.slice(-5);
//     siteAddress = temp.slice(0, 5);
//     nameArray = name.split(', ');
//     if (nameArray[1].includes(' ')) {
//       tempFirstName = nameArray[1].split(' ');
//       firstName = tempFirstName[0].trim();
//       lastName = nameArray[0].trim();
//       fullName = firstName + ' ' + lastName;
//     } else {
//       firstName = nameArray[1].trim();
//       lastName = nameArray[0].trim();
//       fullName = firstName + ' ' + lastName;
//     }
//   }

//   async function countySelect(county) {
//     for (let option = 1; option <= 68; option++) {
//       try {
//         let countyOption = await driver.findElement(By.xpath(`//*[@id="ext-gen382"]/div[${option}]`)).getText();
//         if (countyOption.includes(county) === true) {
//           let countyMatched = await driver.findElement(By.xpath(`//*[@id="ext-gen382"]/div[${option}]`));
//           await countyMatched.click();
//           break;
//         }
//       } catch (err) {}
//     }
//   }

//   async function breakDown(str2) {
//     let obj = {};
//     let str3 = str2.split('\n');
//     let unit;

//     try {
//       if (str3[0].includes('UNIT') || str3[0].includes('#')) {
//         let firstLine = str3[0].split(' ');
//         unit = firstLine.pop();
//         firstLine.pop();
//         str3[0] = firstLine.join(' ');
//       } else {
//         unit = '';
//       }

//       let homeAddress = str3[0];
//       if (str3[1]) {
//         homeAddress = str3[0].concat(' ', str3[1]);
//       }

//       let str = str3[3];
//       str = str.split(' ');
//       let zipcode = str.pop();
//       let state = str.pop();
//       let city = str.join(' ');

//       obj.Home_Address = homeAddress;
//       obj.Unit = unit;
//       obj.City = city;
//       obj.State = state;
//       obj.Zipcode = zipcode;
//       return obj;
//     } catch (err) {
//       obj.Home_Address = '';
//       obj.Unit = '';
//       obj.City = '';
//       obj.State = '';
//       obj.Zipcode = '';
//       return obj;
//     }
//   }
// };
