import { group } from '@angular/animations';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Row } from 'src/app/Models';

@Component({
  selector: 'app-guesses',
  templateUrl: './guesses.component.html',
  styleUrls: ['./guesses.component.css']
})
export class GuessesComponent implements OnInit{

  guessForm!: FormGroup
  guessArray!: FormArray
  latestGuess: string[] = []

  @Input()
  hints: string[] = []

  @Output()
  checkAns = new Subject<void>()

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.guessArray = this.fb.array([this.createNewGuessRow()])
    this.guessForm = this.fb.group({
      guesses: this.guessArray
    })
   
  }

  createNewGuessRow(){
    return this.fb.group({
      firstColor: this.fb.control<string>('', [Validators.required]),
      secondColor: this.fb.control<string>('', [Validators.required]),
      thirdColor: this.fb.control<string>('', [Validators.required]),
      fourthColor: this.fb.control<string>('', [Validators.required])
    })
  
  }

  processGuess(){
    // console.log(this.guessArray.value[this.guessArray.length -1])
    // convert into array
    const lastFormGroup = this.guessArray.at(this.guessArray.length -1) as FormGroup
    this.latestGuess = []
    this.latestGuess.push(lastFormGroup.get('firstColor')?.value)
    this.latestGuess.push(lastFormGroup.get('secondColor')?.value)
    this.latestGuess.push(lastFormGroup.get('thirdColor')?.value)
    this.latestGuess.push(lastFormGroup.get('fourthColor')?.value)

    console.log("last guess: ", this.latestGuess)
    this.checkAns.next()
    this.guessArray.push(this.createNewGuessRow())

  }
  
  
}
