import  Customer  from "./customer";
export default class Invoice{
    invoiceId: number;
    customer: Customer;
    amount:number;
    constructor(invoiceId: number,customer: Customer,amount:number){
        this.invoiceId = invoiceId;
        this.customer = customer;
        this.amount = amount;
    }
    getCustomer():Customer{
        console.log(this.customer);
        return this.customer;
    }
    setCustomer(customer:Customer){
        this.customer = customer;
    }
    getAmount():string{
        console.log(`${this.amount}`);
        return `${this.amount}`;
    }
    setAmount(amount:number):void{
        this.amount = amount;
    }
    getCustomerName():string{
        console.log(this.customer.name);
        return this.customer.name;
    }
    getAmountAfterDiscount():number{
        return (this.amount*(100-this.customer.discount)/100); 
    }
}