import React from "react";
import { Dropdown } from "semantic-ui-react";
import axios from "axios";
import LineChart from "./LineChart";
class CountryCases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: "afghanistan",
      countries: null,
      countriesFormatted: null,
    };
  }
  componentDidMount() {
    axios.get("https://api.covid19api.com/countries").then((countriesArr) => {
      var countries = [];
      countriesArr.data.map((element) => {
        countries.push(element.Slug);
      });
      this.setState({ countries: countries });
      var countriesObject = [];
      this.state.countries.map((element) => {
        countriesObject.push({ text: element, value: element });
      });
      this.setState({ countriesFormatted: countriesObject });
    });
  }
  handleSelect = (event, data) => {
    // console.log(data.value);
    this.setState({ selectedCountry: data.value });
  };
  render() {
    if (this.state.countriesFormatted) {
      return (
        <div>
          <div className="dropdown-wrapper">
            <Dropdown
              button
              className="icon countries-dropdown"
              floating
              labeled
              icon="world"
              options={this.state.countriesFormatted}
              search
              text={this.state.selectedCountry}
              onChange={this.handleSelect}
            />
          </div>
          {/* <div>{this.state.selectedCountry}</div> */}
          <LineChart selected={this.state.selectedCountry} />
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

export default CountryCases;
