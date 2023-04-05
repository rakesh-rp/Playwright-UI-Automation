import { test as baseTest } from "@playwright/test";
import FramePage from "../../pages/frame.page";
import LoginPage from "../../pages/login.page";
import WindowPage from "../../pages/window.page";
import WSPage from "../../pages/ws.page";
import Wrapper from "./wrapper";

const test = baseTest.extend<{
    framePage: FramePage;
    loginPage: LoginPage;
    winPage: WindowPage;
    wsPage: WSPage;
    base: Wrapper;
}>({
    framePage: async ({ page }, use) => {
        await use(new FramePage(page));
    },
    winPage: async ({ page }, use) => {
        await use(new WindowPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    wsPage: async ({ page }, use) => {
        await use(new WSPage(page));
    },
    base: async ({ page }, use) => {
        await use(new Wrapper(page));
    }
})

export default test;
export const expect = test.expect;