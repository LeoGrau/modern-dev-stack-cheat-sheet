/**
 * Open/Closed Principle
   ------------------------------------------------------------------------
 * Definition: Software entities (classes, modules, functions) 
 * should be open for extension but closed for modification.
 * ------------------------------------------------------------------------
 * Before (Violation): If we want to add a new payment type (e.g., PayPal), 
 * we have to modify the PaymentProcessor class by adding another 
 * case to the switch.
 */

class PaymentProcessor {
  processPayment(amount: number, type: "credit" | "debit" | 'paypal') {
    if (type == "credit") {
      console.log(`Credit Payment with amount: ${amount}`);
    } else if (type == "debit") {
      console.log(`Dedit Payment with amount: ${amount}`);
    } else if(type == 'paypal') {
      console.log(`Paypayl Payment and other payment feature???? R U serious?????? ${amount}`)
    }
  }
}

function main() {
  const paymentProcessor = new PaymentProcessor();
  paymentProcessor.processPayment(12002, "credit");
  paymentProcessor.processPayment(12200, "debit");
  paymentProcessor.processPayment(12200, "paypal");
}

main()