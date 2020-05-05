import React from "react";
import axios from "axios";
import Logo from "./Logo";
import CountryCases from "./CountryCases";
import PieChart from "./PieChart";
import ReactGA from "react-ga";
import { Header, Icon, Segment, Card } from "semantic-ui-react";
class covid extends React.Component {
  state = { res: null, temp: null };
  componentDidMount() {
    axios.get("https://api.covid19api.com/summary").then((response) => {
      this.setState({ res: response });
      console.log(this.state.res.data.Global);
    });
    ReactGA.initialize("UA-152312111-1");
    ReactGA.pageview("/a/covid19");
  }
  //UA-152312111-1
  track = () => {
    ReactGA.event({
      category: "User",
      action: "Clicked on Link",
    });
    console.log("link clicked");
  };
  render() {
    if (this.state.res) {
      return (
        <div className="root-wrapper">
          <div className="header-wrapper">
            <Header as="h1" icon>
              <Icon name="rss" />
              COVID19
              <Header.Subheader>
                Live data of COVID-19 cases in the world from the CDC and WHO
              </Header.Subheader>
            </Header>
          </div>
          <Segment className="shadow custom-background seg-2 margin-btm-20">
            <Header as="h2" style={{ textAlign: "center" }}>
              Worldwide
            </Header>

            <PieChart data={this.state.res.data.Global} />
          </Segment>
          <Segment className="shadow seg-3 margin-btm-20">
            <CountryCases />
          </Segment>
          <div className="footer">
            <h5>Powered by Yazan Almatar &copy;</h5>
            <a
              href="https://www.yazanalmatar.com"
              target="_blank"
              onClick={this.track}
            >
              yazanalmatar.com
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            // alignContent: "center",
            justifyContent: "center",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Logo />
        </div>
      );
    }
  }
}
export default covid;
