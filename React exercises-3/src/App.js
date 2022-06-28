import './App.css';
import Employee from './Employee';
import Destructuring from './Destructuring';
import UseState from './UseState';
import Class from './Class';
import UseEffect from './useEffect';
import CustomHook from './CustomHook';
import CustomHook2 from './CustomHook2';
import CustomHook3 from './CustomHook3';

function App() {

  const EmployeeInfo = [
    {
      firstName: "Jack",
      lastName: "Smith",
      employeeId: "1"
    },
    {
      firstName: "Stephanie",
      lastName: "A",
      employeeId: "2"
    },
    {
      firstName: "Jack",
      lastName: "B",
      employeeId: "3"
    },
    {
      firstName: "Anthony",
      lastName: "C",
      employeeId: "4"
    }
  ]


  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Directory</h1>
        <Employee firstName="Jack" lastName="Smith" />
        <Employee firstName="Stephanie" lastName="A" />
        <Employee firstName="George" lastName="B" />
        <Employee firstName="Anthony" lastName="C" />
        {
          EmployeeInfo.map(employee => {
            // const { firstName, lastName } = employee;
            return (
              // <Employee firstName={firstName} lastName={lastName}></Employee>
              <Employee key={employee.employeeId} {...employee}></Employee>
            )
          })
        }

        <Destructuring />

        <UseState />

        <Class />

        <UseEffect/>

        <CustomHook/>

        <CustomHook2/>

        <CustomHook3/>

      </header>
    </div>
  );
}

export default App;
