//Imports for libraries
import React, {useState} from 'react';

//Imports for components
import ExpensesCategories from './components/ExpensesCategories';


function App() {
    //States to share
    const [allExpenses, setAllExpenses] = useState([]);
  return (
    <div className="App">
      <h1>Test for tailwind</h1>
        <ExpensesCategories
            allExpenses = {allExpenses}
            setAllExpenses = {setAllExpenses}
        />
    </div>
  );
}

export default App;
