import Wrapper from "../base/utils/wrapper";

export default class WSPage extends Wrapper {

    public async clickEditLink(tabId?: {
        window: number
    }) {
        const editLink = await this.findLocator("//a[.='Edit]");
        await editLink.click({ timeout: 10000 });
    }

}