import { DioAccount } from "./DioAccount";

export class FirstAccount extends DioAccount {
  constructor(name: string, accountName: number) {
    super(name, accountName);
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.setBalance(value + 10);
    } else {
      console.log("Conta Inválida");
    }
  };
}
