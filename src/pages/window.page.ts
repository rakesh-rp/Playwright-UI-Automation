import Wrapper from "../base/utils/wrapper"

export default class WindowPage extends Wrapper {

    public async clickOpenHomePage() {
        Promise.all([
            this.page.waitForEvent("popup"),
            this.page.click("#home")
        ])
    }
}