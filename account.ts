import  Customer  from "./customer";
export default class Account{
    accountId : number;
    customer:Customer;
    balance: number=0.0;
    constructor(accountId : number,customer:Customer,balance: number){
        this.accountId = accountId;
        this.customer = customer;
        this.balance = balance;   
    }

    getId():number{
        console.log(this.accountId);
        return this.accountId;
    }

    getCustomer():Customer{
        return this.customer;
    }
    getBalance():number{
        console.log(this.balance);
        return this.balance;
    }
    setBalance(balance:number){
        this.balance = balance;
    }
    toString():string{
       return `name: ${this.customer.name} balance: ${this.balance}`
    }
    getCustomerName():string{
        return this.customer.name;
    }
    deposit(amount:number){
        this.balance = this.balance+amount;
        
    }
    withdraw(amount:number):number{
        if(this.balance-amount>=0){
            this.balance = this.balance-amount;
            return 1;
        }else{
            console.log("insufficient balance");
            return 0;
        }
    }
}