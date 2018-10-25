const React = require("react");
const styles = require("./styles.scss"); // Mostly global
const d3 = Object.assign({}, require("d3-selection"));

const Portal = require("../Portal"); // To inject components into other page areas
const AgeChooser = require("../AgeChooser");
const GenerationStories = require("../GenerationStories");

const generations = ["genz", "millennials", "genx", "boomers", "builders"];

class App extends React.Component {
  state = { myGeneration: "" };

  setGeneration = whatGeneration => {
    this.setState({ myGeneration: whatGeneration });
  };

  clearGeneration = () => {
    this.setState({ myGeneration: "" });
  };

  componentDidMount() {
    hideOtherGenrations(this.state.myGeneration);
  }

  componentDidUpdate() {
    hideOtherGenrations(this.state.myGeneration);
  }

  render() {
    return (
      <div>
        {/*
          This is the "What age-group are you interested in?"
          with various buttons or a drop-down on mobile.
          It sets the App state to whichever generation the
          user is interested in learning about.
        */}
        <Portal into={document.querySelector(".hashchooser")}>
          <AgeChooser
            setGeneration={this.setGeneration}
            clearGeneration={this.clearGeneration}
            currentGeneration={this.state.myGeneration}
          />
        </Portal>

        {/* 
          The Generation Stories component displays different content
          depending on the current generation.
        */}
        <Portal into={document.querySelector(".hashcharts")}>
          <GenerationStories currentGeneration={this.state.myGeneration} />
        </Portal>
      </div>
    );
  }
}

function hideOtherGenrations(visibleGeneration) {
  console.log(visibleGeneration);
  generations.forEach(generation => {
    const gens = d3.selectAll("." + generation);
    if (visibleGeneration === "") {
      console.log("none");
      gens.classed(styles.hidden, true);
    }
    if (visibleGeneration === "allages" || generation === visibleGeneration)
      gens.classed(styles.hidden, false);
    else {
      gens.classed(styles.hidden, true);
    }
  });
}

module.exports = App;
