import React, { Component } from 'react';
import './App.css';
import OrderTable from "./components/OrderTable";
import { CSVLink } from "react-csv";

class App extends Component {
  render() {
    const { app } = this.props;

    return (
        <div>
          <OrderTable items={app.items}
                      delivery={app.delivery}
                      payers={app.payers}
                      paymentGroups={app.paymentGroups}
                      totalPrice={app.totalPaid}
          />
          <CSVLink data={app.csvData}>Download CSV</CSVLink>
        </div>
    );
  }
}

export default App;
