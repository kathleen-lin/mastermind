import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AnswerComponent } from './components/answer/answer.component';
import { GuessesComponent } from './components/guesses/guesses.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  @ViewChild(AnswerComponent)
  ansComponent!: AnswerComponent

  @ViewChild(GuessesComponent)
  guessesComponent!: GuessesComponent
  
  answer: string[] = []
  guess: string[] = []

  black: number = 0
  white: number = 0

  feedbacks: string[] = []

  ngAfterViewInit(): void {  }

  compareAns(){
    this.answer = this.ansComponent.answerRow
    this.guess = this.guessesComponent.latestGuess
    // console.log(">>> answer: ", this.answer)
    // console.log(">>> guess: ", this.guess)
    // this.hint = this.masterMindLogic(this.answer, this.guess)
    // console.log(">>>HINT: " ,this.hint)
    this.masterMindLogic(this.answer, this.guess)
    const feedback = "black: " + this.black + "     white: " + this.white
    this.feedbacks.push(feedback)
  }

  masterMindLogic(answer: string[], guess: string[]) {
    this.black = 0
    this.white = 0
    for (let i = 0; i < answer.length; i++){
      if (answer[i] == guess[i]){
        this.black++
        // answer.splice(i,1)
        // guess.splice(i,1)
        // console.log(answer)
        // console.log(answer)
      }
    }
    for (let j = 0; j < answer.length; j++){
      for (let k = 0; k < guess.length; k++){
        if (answer[j] == guess[k]){
          this.white++
        }
      }
    }
    this.white -= this.black
  console.log("black: ", this.black)
  console.log("white: ", this.white)

  }

}
