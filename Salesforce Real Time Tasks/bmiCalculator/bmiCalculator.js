import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height=''
    weight=''
    bmivalue=''
    result =''

    inputHandler(event){
        const {name, value} = event.target
        if(name==='height'){
            this.height =value
        }
        if(name==='weight'){
            this.weight =value
        }
    }

    submitHandler(event){
        event.preventDefault()
        this.calculate()
        
    }

    calculate(){
        let height = Number(this.height)/100;
        let bmi = Number(this.weight)/(height*height);
        this.bmivalue = Number (bmi.toFixed(2))

        if(this.bmivalue <18.5){
            this.result ="Underweight"
        }else if(this.bmivalue>=18.5 && this.bmivalue <25){
            this.result ="Healty"
        }else if(this.bmivalue>=25 && this.bmivalue <30){
            this.result ="Overweight"
        } else {
            this.result ="Obese"
        }
    }

    reCalculate(){
        this.height =''
        this.weight =''
        this.bmivalue=''
        this.result=''

    }
}