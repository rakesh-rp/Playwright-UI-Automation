import Wrapper from "../base/utils/wrapper";

export default class LoginPage extends Wrapper{
    static enterUserName: any;

    public async enterUserName (username: string) {
        const user = await this.findLocator("input[name='email']");
        await user.waitFor({ state: "attached"});
        await user.type(username);
    }

    public async enterPassword(password: string) {
        const pass = await this.findLocator("input[name='password']");
        await pass.waitFor({ state: "attached"});
        await pass.type(password);
    }
}