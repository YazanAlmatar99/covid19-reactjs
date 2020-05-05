import React from "react";
import { Pie } from "react-chartjs-2";
import { Card } from "semantic-ui-react";
class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ["Total Confirmed", "Total Deaths", "Total Recovered"],
      datasets: [
        {
          data: [
            this.props.data.TotalConfirmed,
            this.props.data.TotalDeaths,
            this.props.data.TotalRecovered,
          ],
          backgroundColor: ["#44bcd8", "#cb0042", "#009452"],
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <div className="pie-chart-wrapper">
          <Pie
            data={{
              labels: this.state.labels,
              datasets: this.state.datasets,
            }}
          />
        </div>
        <div className="stats-wrapper">
          <Card.Group>
            <Card
              fluid
              color="blue"
              header={`Confirmed: ${this.props.data.TotalConfirmed}`}
            />
            <Card
              fluid
              color="red"
              header={`Deaths: ${this.props.data.TotalDeaths}`}
            />
            <Card
              fluid
              color="green"
              header={`Recovered: ${this.props.data.TotalRecovered}`}
            />
          </Card.Group>
        </div>
      </div>
    );
  }
}
export default PieChart;
