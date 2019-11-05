import React, { Component } from 'react';
import './App.css';
import OrderTable from "./components/OrderTable";
import { CSVLink } from "react-csv";

class App extends Component {
  constructor() {
      super();

      this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  handlePriceChange(id, newPrice) {
      const items = this.state.items.slice();
      let item = items.find(item => item.id === id);
      item.price = newPrice * 100;

      this.setState({
          items: [...items]
      });
  }

  static countPayers(accumulator, currentPayment) {
      return currentPayment.price > 0 ? (accumulator + 1) : accumulator;
  }

  render() {
    const { app } = this.props;

    return (
        <div>
          <OrderTable items={app.items}
                      delivery={app.delivery}
                      payers={app.payers}
                      paymentGroups={app.paymentGroups}
                      totalPrice={app.totalPaid}
                      handlePriceChange={this.handlePriceChange}
          />
          <CSVLink data={app.csvData}>Download CSV</CSVLink>
        </div>
    );
  }
}

export default App;
