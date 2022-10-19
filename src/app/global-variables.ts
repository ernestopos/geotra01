export class GlobalVariables {

    static countMenus: number = 0;

    constructor() {        
    }

    public static enabledMenus(): number {
        let globalCount = localStorage.getItem("GlobalVariables.countMenus");
        this.countMenus =   (typeof globalCount === "string") ? parseInt(globalCount):0;
        return this.countMenus;
    }

    public static setCountNumbers(calculate:number): void {        
        localStorage.removeItem("GlobalVariables.countMenus");
        localStorage.setItem("GlobalVariables.countMenus", calculate.toString());
        let globalCount = localStorage.getItem("GlobalVariables.countMenus");
        this.countMenus =   (typeof globalCount === "string") ? parseInt(globalCount):0;
        console.log(this.countMenus);        
    }

}