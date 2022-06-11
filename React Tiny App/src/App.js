import './assets/App.css';
import Initial from './Components/Initial';
import Comfirm from './Components/Comfirm';
import Result from './Components/Result';
import React, { useContext } from 'react';
import { MyContext } from './Context';
import 'animate.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const context = useContext(MyContext);

  const handleComponent = () => {
    const screen = context.state.screen;
    if (screen === 0) return <Initial />
    if (screen === 1) return <Comfirm />
    if (screen === 2) return <Result />
  }

  return (
    <div>
      <div className="container">
        {handleComponent()}
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
