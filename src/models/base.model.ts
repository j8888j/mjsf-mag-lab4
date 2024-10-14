export class BaseModel {
    constructor(data: any) {
        this.init(data)
    }
    protected init(data: any) {
        Object.assign(this, data)
    }

}
