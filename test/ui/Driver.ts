import {Builder, Capabilities, ThenableWebDriver} from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome";

export function BuildDriver(): ThenableWebDriver {
    return new Builder()
        .withCapabilities(Capabilities.chrome())
        // .setChromeOptions(new Options().addArguments())
        .build();
}
