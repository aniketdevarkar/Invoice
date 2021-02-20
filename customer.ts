export default class Customer{
    id:number;
    name: string;
    discount: number;

    constructor(id:number,name:string,discount:number){
        this.id = id;
        this.name = name;
        this.discount = discount;
    }
    
    getId():number{
        console.log(this.id);
        return this.id;
    }
    getName():string{
        console.log(this.name);
        return this.name;
    }
    getDiscount():number{
        console.log(this.discount);
        return this.discount;
    }
    setDiscount(discount:number):void{
        this.discount = discount;
        console.log(this.discount);
    }

}