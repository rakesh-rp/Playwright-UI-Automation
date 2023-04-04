import Wrapper from "../base/utils/wrapper";

export default class framePage extends Wrapper {

    public async enterFirstName(firstName: string) {
        const fName = await this.findLocator("input[name='fname']",
            { frame: "#firstfr" });
        await fName.type(firstName);
    }

    public async enterLastName(lastName: string) {
        const lName = await this.findLocator("input[name='lname']",
        { frame: "#firstfr"});
        await lName.type(lastName);
    }
}