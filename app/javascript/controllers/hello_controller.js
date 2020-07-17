// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "email", "output" ]

  connect() {
    this.say_something()
  }

  say_something() {
    if(this.emailTarget.value){
      this.outputTarget.textContent = `Hello ${this.emailTarget.value}`
    } else {
      this.outputTarget.textContent = 'Hello, Stimulus!'
    }
  }
}
