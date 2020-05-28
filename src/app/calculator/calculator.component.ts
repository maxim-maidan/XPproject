import { Component} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent{
  result: string = '';
  longButtons: string[] = ['Clear All', 'Delete'];
  buttons: string[] = ['1', '2', '3', '/', '4', '5', '6', '*', '7', '8', '9', '-', '0', '.', '=', '+'];
  private  prevValue: string = '';
  private curValue: string = '';
  addToExpression(value: string){
    if (this.result !=''){
      this.prevValue =this.curValue;
      this.curValue =value;
    }
    if(value == 'Clear All'){
      this.result = '';
    } else if (value =='Delete'){
      this.result=this.prevValue != "="? this.result.slice(0,-1): this.result;
    }else if (value == '='){
      this.result = eval(this.result);
    }else{
      this.result += value;
    }
  }

}
