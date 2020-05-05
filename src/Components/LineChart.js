import React from "react";
import axios from "axios";
import Logo from "./Logo";
import { Button, Header } from "semantic-ui-react";
import { Line } from "react-chartjs-2";
class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCases: null,
      totalDeaths: null,
      totalRecovered: null,
      datesArr1: [],
      chartData1: [],
      datesArr2: [],
      chartData2: [],
      datesArr3: [],
      chartData3: [],
      options: {
        legend: {
          labels: {
            fontSize: 10,
          },
        },
      },
    };
  }
  componentDidMount() {
    this.setState({ selectedCountry: this.props.selected });
    // console.log(this.props.selected);
    this.handleClick();
  }
  updateConfirmed = () => {
    axios
      .get(
        `https://api.covid19api.com/total/dayone/country/${this.props.selected}/status/confirmed`
      )
      .then((res) => {
        var dates = [];
        var cases = [];
        res.data.map((element) => {
          var dateFormatted = element.Date.slice(0, 10);
          cases.push(element.Cases);
          dates.push(dateFormatted);
          return 0;
        });

        this.setState({ totalCases: cases.slice(-1)[0] });

        this.setState({
          datesArr1: dates,
          chartData1: [
            {
              label: "Confirmed Cases",
              data: cases,
              backgroundColor: "#44bcd8",
            },
          ],
        });
        //console.log(cases);
      });
    this.setState({ selectedCountry: this.props.selected });
  };
  updateDeaths = () => {
    console.log("clik");
    axios
      .get(
        `https://api.covid19api.com/total/dayone/country/${this.props.selected}/status/deaths`
      )
      .then((res) => {
        console.log(res.data);
        var datesArr = [];
        var deathsArr = [];
        res.data.map((element) => {
          var dateFormatted = element.Date.slice(0, 10);
          datesArr.push(dateFormatted);
          deathsArr.push(element.Cases);
          return 0;
        });
        this.setState({ totalDeaths: deathsArr.slice(-1)[0] });
        this.setState({
          datesArr2: datesArr,
          chartData2: [
            {
              label: "Death Cases",
              data: deathsArr,
              backgroundColor: "#cb0042",
            },
          ],
        });
      });
  };
  updateRecovered = () => {
    axios
      .get(
        `https://api.covid19api.com/total/dayone/country/${this.props.selected}/status/recovered`
      )
      .then((res) => {
        var datesArr = [];
        var recoveredArr = [];
        res.data.map((element) => {
          var dateFormatted = element.Date.slice(0, 10);
          datesArr.push(dateFormatted);
          recoveredArr.push(element.Cases);
          return 0;
        });
        this.setState({ totalRecovered: recoveredArr.slice(-1)[0] });
        this.setState({
          datesArr3: datesArr,
          chartData3: [
            {
              label: "Recovered Cases",
              data: recoveredArr,
              backgroundColor: "#009452",
            },
          ],
        });
      });
  };
  handleClick = () => {
    console.log("clicked");
    this.updateConfirmed();
    this.updateDeaths();
    this.updateRecovered();
    console.log(this.state.chartData2);
  };

  render() {
    var totalCases = this.state.totalCases;
    var totalDeaths = this.state.totalDeaths;
    var totalRecovered = this.state.totalRecovered;
    var selectedCountry = this.state.selectedCountry;
    var data1 = {
      labels: this.state.datesArr1,
      datasets: this.state.chartData1,
      options: this.state.options,
    };
    var data2 = {
      labels: this.state.datesArr2,
      datasets: this.state.chartData2,
      options: this.state.options,
    };
    var data3 = {
      labels: this.state.datesArr3,
      datasets: this.state.chartData3,
      options: this.state.options,
    };
    if (
      this.state.selectedCountry &&
      this.state.datesArr1 &&
      this.state.chartData1
    ) {
      return (
        <div>
          <div className="search-button">
            <Button
              className="update-button ui primary"
              onClick={this.handleClick}
            >
              Update
            </Button>
          </div>
          <Line data={data1} />
          <Header as="h4" block>
            Confirmed: <span> {totalCases} Case</span>
          </Header>
          <Line data={data2} />
          <Header as="h4" block>
            Deaths: <span> {totalDeaths} Case</span>
          </Header>
          <Line data={data3} />
          <Header as="h4" block>
            Recovered: <span> {totalRecovered} Case</span>
          </Header>
        </div>
      );
    } else {
      return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Logo />
        </div>
      );
    }
  }
}
export default LineChart;
