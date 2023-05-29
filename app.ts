import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { FirstAccount } from "./class/FirstAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Wellington", 1);
peopleAccount.deposit(10);
console.log(peopleAccount.withdraw(5));
console.log(peopleAccount.getName());
peopleAccount.getBalance();

const firstAccount: FirstAccount = new FirstAccount("Felix", 2);
firstAccount.deposit(100);
console.log(firstAccount.getBalance());
firstAccount.withdraw(10);
console.log(firstAccount.getBalance());
console.log(firstAccount.getName());

const companyAccount: CompanyAccount = new CompanyAccount("Cruz", 3);
companyAccount.deposit(100);
companyAccount.getLoan(50);
console.log(companyAccount.getBalance());
companyAccount.withdraw(50);
console.log(companyAccount.getBalance());
console.log(companyAccount.getName());
