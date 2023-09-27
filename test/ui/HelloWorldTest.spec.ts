import { describe } from 'mocha';
import { BuildDriver } from './Driver';
import {By, ThenableWebDriver} from 'selenium-webdriver';
import { expect } from 'chai';

describe('Hello World Test', async () => {
    let driver: ThenableWebDriver;

    beforeEach(async () => {
        driver = BuildDriver();
    });

    afterEach(async () => {
        await driver.quit();
    });

    it('Job Roles', async () => {
        await driver.get('https://fuwyngxgmx.eu-west-1.awsapprunner.com/');

        await driver.findElement(By.id('jobs')).click()

        await driver.findElements(By.id('description')).then(function(elements: any) {
            expect(elements).to.have.lengthOf.greaterThan(0)
        });
    });
});
