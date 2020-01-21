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
                      totalPrice={app.totalPrice}
          />
          <div className="csv-btn-container">
            <CSVLink filename={`${app.delivery.formattedDate}-morrisons.csv `} data={app.csvData}>Download CSV</CSVLink>
          </div>
        </div>
    );
  }
}

export default App;
