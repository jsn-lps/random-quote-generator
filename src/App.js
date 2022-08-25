import './App.css';
import React from 'react';



function App() {
  return (
    <div className="App">
      <header className="App-header">       
      </header>
      <div id="quote-box">        
          <div className="bigMark">
            <p id="bigMarks-left"><em>"</em></p>
            <p id="bigMarks-right"><em>"</em></p>
            </div>
          <h1>
            <QuotesMachine /> 
            </h1>
      </div>
    </div>
  );
}

export default App;

class QuotesMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          index: 0,
            quote: "dog",
            author: '',
            authors: [
              "Jason L", 
              "Lason J", 
              "Jasoj Lel",
              "Monkey Man",
              "Some guy",
              "Frederic Chopin"
              ],
              quotes: [
                "A monkey is not a fan, it is a monkey.", 
                "Wiping with a Q-Tip is not ideal. Try a skateboard",
                "Often times it is you that it's often times mistakes happen you are think about where you're wrong",
                "... Can't think of things to write",
                "Not all adventures are fruitful, but all adventures are adventures",
                "As long as I have health and strength, I will gladly work all my days."
                ]
          };
        }
         
  rollIndex = this.rollIndex.bind(this);

  rollIndex() {
    let ind = Math.floor(Math.random()*this.state.quotes.length);
    this.setState({
      index: ind
    }, () => {console.log(this.state.index + " wtf")});
  }

  componentDidMount() {
    this.rollIndex();
  } 

  render() {
      return (
      <div id="formatter">
        <div id="quoteContainer">
        <h1 id="text">
        <QuoteGrabber index={this.state.index} quotes={this.state.quotes}/>
        </h1>
          <div id="author">
            <em> 
              <AuthorGrabber index={this.state.index} authors={this.state.authors} />
            </em> 
          </div> 
          </div>
          <div id="bottomBar"> 
            <div id="socials">
              <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" >
              <img id="socialBTN" src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png" ></img>
                </a>
              </div>
          <div id="new-quote">

            <NewQuote rollIndex={this.rollIndex} />

            </div>
          </div>
        </div>
      )  
    }
}


class QuoteGrabber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ""
    }
  }

  render() {
    return (
      <p>{this.props.quotes[this.props.index]}</p>
    )
  }
}


class AuthorGrabber extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    author: ""
    }
  }
  render() {
    return (
      <p>
        {("~") + this.props.authors[this.props.index]}
        </p>
    )
  }
}

class NewQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      twitter: ""
    }
  }
  render() {
    return (
      <div>

        <button id="quoteBTN" onClick={this.props.rollIndex} >New Quote</button>
 
      </div>
    )
  }
}