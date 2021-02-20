import Customer from "./customer";
import Account from "./account";
import Invoice from "./invoice";
let accountObject = {};

let createCustomer = ():Customer=>{
    let name = (<HTMLInputElement>document.getElementById('name')).value;
    let customerId = parseInt((<HTMLInputElement>document.getElementById('customerId')).value);
    let discount = parseInt((<HTMLInputElement>document.getElementById('discount')).value);
    let customer = new Customer(customerId,name,discount);
    return customer;
}

let depositButton = document.getElementById('deposit').addEventListener('click',()=>{
   
    // account details
    let accountId = parseInt((<HTMLInputElement>document.getElementById('accountId')).value);
    let accountAmount =  parseInt((<HTMLInputElement>document.getElementById('accountAmount')).value);
    let balance =  parseInt((<HTMLInputElement>document.getElementById('balance')).value);

    //customer object created
    let customer1 = createCustomer();
    let account:Account;

    if(accountObject[accountId]===undefined){
    account = new Account(accountId,customer1,balance);
    accountObject[accountId]= account.balance;
    }else{
        account = new Account(accountId,customer1,accountObject[accountId]);
        
    }
    account.deposit(accountAmount);
    accountObject[accountId]= account.getBalance();
   // account.setBalance(account.getBalance());
   alert(`ID : ${account.accountId}\nUpdated balance=${account.getBalance()}`);
    
    //console.log(invoice.getCustomerName(),invoice.getAmount(),invoice.getAmountAfterDiscount());
    //console.log(account.getId(),account.getCustomerName(),account.getBalance(),account.withdraw(accountAmount));
})

let withDrawButton = document.getElementById('withdraw').addEventListener('click',()=>{
   
    //customer object created
    //let customer1 = createCustomer();
  
    // account details
    let accountId = parseInt((<HTMLInputElement>document.getElementById('accountId')).value);
    let accountAmount =  parseFloat((<HTMLInputElement>document.getElementById('accountAmount')).value);
    let balance =  parseFloat((<HTMLInputElement>document.getElementById('balance')).value);
    // object of Account class
    let customer1 = createCustomer();
    let account:Account;

    if(accountObject[accountId]===undefined){
    account = new Account(accountId,customer1,balance);
    accountObject[accountId]= account.balance;
    }else{
        account = new Account(accountId,customer1,accountObject[accountId]);
        
    }
    let withdraw1 =account.withdraw(accountAmount);
    accountObject[accountId]= account.getBalance();
    if(withdraw1)
    alert(`ID : ${account.accountId}\nUpdated balance=${account.getBalance()}`);
    else
    alert(`ID : ${account.accountId}\nAmount withdrawn exceeds the current balance!`);
})

let invoiceButton = document.getElementById('invoice').addEventListener('click',()=>{
    
      //customer object created
      let customer1 = createCustomer();
      let amount =  parseInt((<HTMLInputElement>document.getElementById('amount')).value);
      let invoiceId = parseInt((<HTMLInputElement>document.getElementById('invoiceId')).value);
      let invoice = new Invoice(invoiceId,customer1,amount);
      let tbody = (<HTMLTableElement>document.getElementById('tbody'));
      let tr = document.createElement('tr');
      let th = document.createElement('th');
      th.style.textAlign = "center";
      th.setAttribute('scope','row');
      th.innerText = invoice.invoiceId.toString();
      let td1 = document.createElement('td');
      td1.style.textAlign = "center";
      td1.innerText = invoice.getCustomerName();
      let td2 = document.createElement('td');
      td2.style.textAlign = "center";
      td2.innerText = invoice.getAmount();
      let td3 = document.createElement('td');
      td3.style.textAlign = "center";
      td3.innerText = invoice.getAmountAfterDiscount().toString();
      tr.append(th,td1,td2,td3);  
      tbody.append(tr);
      console.log(invoice.getCustomerName(),invoice.getAmount(),invoice.getAmountAfterDiscount());
})
