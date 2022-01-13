import React, { useState } from 'react';
import './App.css';
import List from './components/List';

const PEOPLE_DATA: IState['people'][] = [
  {
    name: "Ahmed Khattab",
    url: "",
    age: 30,
    note: "He is a front end developer"
  },
  {
    name: "Jose Angle",
    url: "",
    age: 25,
    note: "He is a good javascript developer",
  }
]

interface IState {
  people: {
    name: string;
    url: string;
    age: number;
    note: string;
  }
}


function App() {

  const [people, setPeople] = useState<IState['people'][]>(PEOPLE_DATA);


  return (
    <div className="App">
      <h1>Invite people to my party</h1>
      <List people={people}></List>

    </div>
  );
}

export default App;
