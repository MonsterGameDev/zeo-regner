import { Component, OnInit } from '@angular/core';
import { RegneService } from '../services/regne.service';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id,
})
export class HomeComponent implements OnInit {
  public calculation: string;
  public answer: string;
  public feedback: string;
  constructor(private regneService: RegneService) { }

  ngOnInit() {
    this.generateNew();
  }

  generateNew() {
    this.calculation = this.regneService.generateCalculation();
  }

  checkAnswer(){
    const answer: number = parseInt(this.answer, 10);
    console.log ('answer: ', answer);
    if (answer === this.regneService.result) {
      this.feedback = "Korrekt";
    } else {
      this.feedback = "Desværre";
    }
    
  }

}
