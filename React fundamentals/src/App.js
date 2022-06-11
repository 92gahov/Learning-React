import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Sum from './components/Sum';
import Display from './components/Name';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';

function App() {
  return (
    <div className="App">
      <Hello />
      {/* <Message/> */}
      <Sum/>
      <Display/>
      {/* <Profile name="Georgi" lastname="Gahov">
        <h3>This is a profile of a person.</h3>
      </Profile> */}
      {/* <Profile name="John" lastname="Ford"/> */}
      {/* <Message messagecode="10" messagecontent="This is a message from props"/> */}
      <Profile name="Georgi" lastname="Gahov"/>
      <Counter></Counter>
      <Resume name="Georgi"></Resume>
      <FunctionEvent></FunctionEvent>
      <ClassEvent></ClassEvent>
    </div>
  );
}

export default App;
