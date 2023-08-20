import React from 'react';
import FormInput from './components/InputForm';
import classes from './Style.module.css';
function App() {
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        Seller App
      </div>
      <div >
        <FormInput />
      </div>
    </div>
  );
}
export default App;
