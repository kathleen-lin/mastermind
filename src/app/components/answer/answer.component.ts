import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Row } from 'src/app/Models';
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  answerForm!: FormGroup 

  answerRow: string[] = []

  hidden: boolean = false

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.hidden = false
      this.answerForm = this.fb.group({
        firstColor: this.fb.control<string>('', [Validators.required]),
        secondColor: this.fb.control<string>('', [Validators.required]),
        thirdColor: this.fb.control<string>('', [Validators.required]),
        fourthColor: this.fb.control<string>('', [Validators.required])

      })
  }

  saveAns(){
    this.answerRow.push(this.answerForm.get('firstColor')?.value)
    this.answerRow.push(this.answerForm.get('secondColor')?.value)
    this.answerRow.push(this.answerForm.get('thirdColor')?.value)
    this.answerRow.push(this.answerForm.get('fourthColor')?.value)
    console.log(this.answerRow)

  }

  hideAns(){
    this.hidden = true
  }

  unhideAns(){
    this.hidden = false
  }

}
