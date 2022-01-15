import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
  people: {
    name: string;
    url: string;
    age: number;
    note: string;
  }[]
}


function App() {

  const [people, setPeople] = useState<IState['people']>([
    {
      name: "Ahmed Khattab",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFjJO0hz4oD-fIlwa-zOwFpcawqEb5NHdFRszPEH9Ykr3F0vv52Dg-uZPd0gNlYb_0UWg&usqp=CAU",
      age: 30,
      note: "He is a front end developer"
    },
    {
      name: "Jose Angle",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThWSKworQHZx8ntBfpm0eiLyzhr4IVZRC-C7w_cfDiB3jT_thE5hLbbArzigez5U3tOr0&usqp=CAU",
      age: 25,
      note: "He is a good javascript developer",
    }
  ]);


  return (
    <div className="App">
      <h1>Invite people to my party</h1>
      <List people={people}></List>
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
