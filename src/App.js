import React, { Component } from 'react';
import './App.css';
import OrderTable from "./components/OrderTable";

class App extends Component {
  constructor() {
      super();
      this.state = {
          items: [
              {"id": "1", "name":"Sure Men Active Dry Anti-Perspirant Deodorant Aerosol 250ml","price":"150","quantity":"1"},
              {"id": "2", "name":"Sainsbury's Non Bio Concentrated Laundry Liquid 1800ml","price":"500","quantity":"1"},
              {"id": "3", "name":"Sainsbury's Barn Eggs, Basics x15","price":"435","quantity":"3"},
              {"id": "4", "name":"Sainsbury's Pineapple Pieces In Juice, Basics 227g","price":"035","quantity":"1"},
              {"id": "5", "name":"Sainsbury's Coarse Sea Salt 350g","price":"090","quantity":"1"},
              {"id": "6", "name":"Del Monte Sliced Pineapple in Juice 435g","price":"085","quantity":"1"},
              {"id": "7", "name":"Laciate 3.2% Uht Milk 1L","price":"900","quantity":"10"},
              {"id": "8", "name":"Sainsbury's Baked Beans 4x400g","price":"200","quantity":"2"},
              {"id": "9", "name":"Sainsbury's Medium Pineapple","price":"200","quantity":"2"},
              {"id": "10", "name":"Sainsbury's Peanut Butter Smooth 700g","price":"235","quantity":"1"},
              {"id": "11", "name":"Sainsbury's Scottish Porridge Oats 1kg","price":"110","quantity":"1"},
              {"id": "12", "name":"Sainsbury's Fairtrade Bananas Loose","price":"186","quantity":"14"},
              {"id": "13", "name":"Sainsbury's Naturally Sweet Sweetcorn In Water 3x325g (3x260g*)","price":"360","quantity":"2"},
              {"id": "14", "name":"Sainsbury's Mild White Cheddar Cheese, Basics 625g","price":"300","quantity":"1"},
              {"id": "15", "name":"Highland Spring Still Water 6x1.5L","price":"250","quantity":"1"},
              {"id": "16", "name":"Sainsbury's Cake Decorations, Coloured Vermicelli 70g","price":"100","quantity":"1"},
              {"id": "17", "name":"Sainsbury's Cake Decorations, Chocolate Vermicelli 69g","price":"100","quantity":"1"},
              {"id": "18", "name":"Sainsbury's Honey, Basics 340g","price":"100","quantity":"1"},
              {"id": "19", "name":"Sainsbury's Pineapple Slices in Natural Juice 432g","price":"080","quantity":"1"},
              {"id": "20", "name":"Sainsbury's Rosemary 22g","price":"100","quantity":"1"},
              {"id": "21", "name":"Andrex Supreme Quilts Toilet Tissue 16 Rolls","price":"925","quantity":"1"},
              {"id": "22", "name":"Princes Tuna Chunks in Spring Water 4x145g (112g*)","price":"350","quantity":"1"},
              {"id": "23", "name":"Sainsbury's Lettuce, Round","price":"065","quantity":"1"},
              {"id": "24", "name":"Sainsbury's Sardines in Chilli Oil 120g (90g*)","price":"100","quantity":"2"},
              {"id": "25", "name":"Sainsbury's Fabric Conditioner, Clear Skies 1.26L (42 Washes)","price":"250","quantity":"2"},
              {"id": "26", "name":"Sainsbury's Honey, Clear 340g","price":"105","quantity":"1"},
              {"id": "27", "name":"KTC Chopped Tomatoes 400g","price":"180","quantity":"6"},
              {"id": "28", "name":"Sainsbury's Sardines in Sunflower Oil 120g (90g*)","price":"100","quantity":"2"}
          ],
          delivery: {"price":"200"},
          payers: [
              {id: 1, name: "Kriszcson"},
              {id: 2, name: "Snajder"},
              {id: 3, name: "Szabo"},
          ],
      }
  }

  render() {
    const { items, delivery, payers } = this.state;

    console.log('items');
    console.log(items);
    console.log(payers);

    return (
        <OrderTable items={this.sanitizeItems(items)} delivery={delivery} payers={payers}/>
    );
  }

  sanitizeItems(items) {
    return items.map(item => ({
        id: parseInt(item.id),
        name: item.name.trim(),
        quantity: parseInt(item.quantity),
        price: parseInt(item.price),
    }));
  }
}

export default App;
