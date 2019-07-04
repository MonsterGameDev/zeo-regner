import { Injectable } from '@angular/core';

@Injectable()
export class RegneService {
    constructor() {}

    public generateRandomNumber(): number {
        let result = Math.floor(Math.random() * 11);

        return result;
    }

    public generateOperator() {
        let rnd = Math.floor(Math.random() * 4);
        const operators: string[] = ['+', '-', '*', '/'];
        return operators[rnd];
    }

    public generateCalculation(): string {
        const num1: string = this.generateRandomNumber().toString();
        const num2: string = this.generateRandomNumber().toString();

        const operator: string = this.generateOperator();

        const calculation: string = `${num1} ${operator} ${num2}`;

        this.result = eval(calculation);

        return calculation;
    }

    private _result: number;
    public get result(): number {
        return !!this._result ? this._result : 0;
    }
    public set result(v: number) {
        this._result = v;
    }

    private _points: number;
    public get points(): number {
        return !!this._points ? this._points : 0;
    }
    public set points(v: number) {
        this._points = v;
    }

    generate;
}
