import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: "apple", nCorrect: 0};
    this.handleGuess = this.handleGuess.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    if (this.state.nWrong >= this.props.maxWrong) {
      return (
        <div>
          <h2>{`Correct word is: ${this.state.answer}`}</h2>
        </div>
      )
    }
    else {
      return (
        <p className='Hangman-word'>
          {this.state.answer
            .split("")
            .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"))}
        </p>
      );
    }
  }
/*
To calculate the exact number of correct guesses.
*/
char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    let newnCorrect = this.char_count(this.state.answer,ltr);
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
      nCorrect: st.nCorrect + newnCorrect
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    let k = 0;
    if (this.state.nWrong >= this.props.maxWrong) {
      return (
        <div>
          <h1>Game over. You lose</h1>
        </div>
      );
    }
    else if(this.state.nCorrect === this.state.answer.length){
      return(
        <div>
          <h1>Game over. You win.</h1>
        </div>
      );
    }
    else {
      return (
        <p className='Hangman-btns'>
          {"abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
            <button
              key={++k}
              value={ltr}
              onClick={this.handleGuess}
              disabled={this.state.guessed.has(ltr)}
            >
              {ltr}
            </button>

          ))};
      </p>
      );
    }
  }

  /** render: render game */
  render() {
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt={`${this.state.nWrong} wrong guesses`} />
        <p>No. of wrong guesses is: {this.state.nWrong}</p>
        {this.guessedWord()}
        {this.generateButtons()}
      </div>
    );
  }
}

export default Hangman;
