import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Hi We are Craete Angular'

  cnt = 0
  handleCnt(val: string) {
    if (val == 'inc') {
      this.cnt++;
    } else if (val == 'dec' && this.cnt > 0) {
      this.cnt--;
    } else if (val == 'reset') {
      this.cnt = 0;
    }
  }
  calFun(val: string, num1: number, num2: number) {
    if (val == 'add') {
      return num1 + num2;
    } else if (val == 'sub') {
      return num1 - num2;
    } else if (val == 'mul') {
      return num1 * num2;
    } else if (val == 'div') {
      return num1 / num2;
    }
    return 0;
  }

  result = signal(0)

  handleCal(val: string, num1: number, num2: number) {
    this.result.set(this.calFun(val, num1, num2))
  }
  name = ""
  displayName="";

  getName(event : Event){
    this.name = (event.target as HTMLInputElement).value
  }
  disName(){
    this.displayName = this.name
  }
  display = signal(false)

  toggle(){
    this.display.set(!this.display())
  }
  hide(){
    this.display.set(false)
  }
  show(){
    this.display.set(true)
  }

}


