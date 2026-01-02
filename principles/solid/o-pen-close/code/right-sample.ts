/**
 * Open/Closed Principle
   ------------------------------------------------------------------------
 * Definition: Software entities (classes, modules, functions) 
 * should be open for extension but closed for modification.
*/

interface PaymentMethod {
  _processPayment: (amount: number) => void
  processPayment(amount: number): void
}

class DebitPayment implements PaymentMethod {
  processPayment(amount: number) : void {
    console.log(`Debit Payment with amount: ${amount}$`)
  }
  _processPayment(amount: number) : void {
    console.log(`Debit Payment with amount: ${amount}$`)
  }
}

class CreditPayment implements PaymentMethod {
  processPayment(amount: number) : void {
    console.log(`Credit Payment with amount: ${amount}$`)
  }
  _processPayment(amount: number) : void {
    console.log(`Credit Payment with amount: ${amount}$`)
  }
}

class PaypalPayment implements PaymentMethod {
  processPayment(amount: number) : void {
    console.log(`Paypal Payment with amount: ${amount}$`)
  }
  _processPayment(amount: number) : void {
    console.log(`Paypal Payment with amount: ${amount}$`)
  }
}

function processPayment(amount: number, method: PaymentMethod) {
  method.processPayment(amount)
}

function main() {
  const debitPayment = new DebitPayment()
  const creditPayment = new CreditPayment()
  const paypalPayment = new PaypalPayment()

  processPayment(1200, debitPayment)
  processPayment(1300, creditPayment)
  processPayment(1400, paypalPayment)
}

main()