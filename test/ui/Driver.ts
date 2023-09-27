import {Builder, Capabilities, ThenableWebDriver} from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome";

export function BuildDriver(): ThenableWebDriver {
    let options = new Options();

    if (process.env.APP_ENV === 'test') {
        options.headless().windowSize({ height: 1080, width: 1920 })
    } else {
        options.windowSize({ height: 1080, width: 1920 })
    }

    return new Builder()
        .withCapabilities(Capabilities.chrome())
        .setChromeOptions(options)
        .build();
}
