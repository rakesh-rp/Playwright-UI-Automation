import { Locator, Page } from "@playwright/test";

export default class Wrapper {
    constructor(public page: Page) {
    }

    public async findLocator(value: string, options?: {
        frame?: string,
        tabID?: number,
        timeout?: number,
        has?: Locator,
        hasText?: string
    }): Promise<Locator> {
        //improve this handling of windows
        if (options?.tabID) {
            this.page.context().pages()[options.tabID]
        }
        if (options?.frame) {
            return this.page.frameLocator(options.frame).locator(value);
        }

        return this.page.locator(value, {
            has: options?.has,
            hasText: options?.hasText
        })
    }
    //To Load the Url of the Page
    public getUrl(): string {
        return this.page.url();
    }
    // To close the browser or a particular tab 
    public async closeTab(options?: {
        tabId?: number
    }) {
        if (options?.tabId) {
            await this.page.context().pages()[options?.tabId].close();
        }
        else {
            await this.page.close();
        }
    }
}
