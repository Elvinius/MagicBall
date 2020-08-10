import * as React from 'react';

class MagicEightBall extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           inputValue: '',
           randomIndex: '',
       }
       this.ask = this.ask.bind(this);
       this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
       this.setState({
           inputValue : event.target.value
       })
   }
   ask() {
       if(this.state.inputValue) {
        this.setState( {
            randomIndex: Math.floor(Math.random() * 20),
            inputValue: ''
       });
    }
   }
   render() {
    const possibleAnswers = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        'Don\'t count on it',
        'My reply is no',
        'My sources say no',
        'Most likely',
        'Outlook not so good',
        'Very doubtful'
      ];
      const answer = possibleAnswers[this.state.randomIndex]
       return (
           <div>
               <h2>Magic Ball Game</h2>
               <label htmlFor="question"> Enter Yes/No questions and get predictions!</label>
               <input id="question" value={this.state.inputValue} onChange={this.handleChange}/>
               <button onClick={this.ask}>Add</button>
               <h3>Answer:</h3>
               <p>
                {answer}
              </p>
           </div>
       )
   }

}

export default MagicEightBall;