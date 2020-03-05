import React from "react";
import "./App.css";

let colorsData = [
  "#b21e27",
  "#4e90e2",
  "#5f7ad3",
  "#f0a32d",
  "#7a7a7a",
  "#183656",
  "#82878c",
  "#FCFCFC",
  "#8db7a8",
  "#4f6b8b",
  "#9dabac"
];

class App extends React.Component {
  state = {
    id: "",
    quoteText: "",
    author: "",
    origin: "",
    color: "#4f6b8b"
  };

  componentDidMount() {
    let quote = Math.floor(Math.random() * Math.floor(501));
    fetch("https://gist.githubusercontent.com/onit4ku/29706e164325134a6be78cf85699e8fc/raw/6432cdc903c274578e3c79f617f5bd39a5efb2d0/proquotes.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          id: data[quote].id,
          quote: data[quote].en,
          author: data[quote].author
        });
      })
      .catch(error => console.error);
  }

  newQuote = event => {
    this.componentDidMount();
    let mycolor = Math.floor(Math.random() * Math.floor(6));
    this.setState({
      color: colorsData[mycolor]
    });
  };

  render() {
    return (
      <div>
        <div
          className="main"
          style={{
            background: this.state.color,
            margin: "0 auto",
            padding: 10 + "%" + 10 + "%" + 30 + "%" + 10 + "%"
          }}
        >
          <h2
            style={{
              marginLeft: "0.8rem",
              filter: "invert(1)"
            }}
          >
            Programming Quotes
          </h2>
          <div className="container">
            <div
              id="quote-box"
              className="mx-auto center text-center"
              style={{
                padding: "3rem",
                fontWeight: "400",
                marginBottom: "0.5rem",
                borderRadius: "1.8rem",
                backgroundColor: "white"
              }}
            >
              <div id="text" className="quote">
                "{this.state.quote}"
              </div>
              <div id="author" className="author">
                -{this.state.author}
              </div>
              <div className="row">
                <div className="col-3">
                  <button
                    onClick={this.newQuote}
                    className=" btn btn-primary"
                    style={{
                      filter: "invert(1)",
                      padding: "0.5rem",
                      borderRadius: "1rem",
                      fontWeight: "bolder",
                      background: this.state.color,
                      marginTop: "1rem",
                      fontSize: 1 + "em"
                    }}
                  >
                    <small>Next Quote</small>
                  </button>
                  <a  style={{fontSize:"1.2rem", marginLeft:"1rem"}} 
                    id="tweet-quote"
                    href={
                      "https://twitter.com/intent/tweet?text=" +
                      `${this.state.quote}` +
                      ` --${this.state.author}`
                    }
                  >
                  <i class="fa fa-twitter-square" aria-hidden="true"></i> tweet this!
  
                </a>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "0.8rem", filter: "invert(1)" }} className="copy">
            by:{" "}
            <a href="https://github.com/onit4ku/" target="blank">
              onit4ku
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
