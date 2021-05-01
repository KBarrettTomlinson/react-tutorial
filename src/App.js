import './App.css';
// import Documentation from './documentation/Documentation'
// import Counter from './counter/Counter'
import Employee from './employee/Employee'

const data = [
  {id: 1, firstName: "Dale", lastName: "Cooper", age: "54"},
  {id: 2, firstName: "Chet", lastName: "Desmond", age: "48"},
  {id: 3, firstName:  "Gordon", lastName: "Cole", age: "73"},
  {id: 4, firstName: "Tammy", lastName: "Preston", age: "32"}
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Directory</h1>

        {/* {data.map( (employee) => {
          const {firstName, lastName, age} = employee;
          return( 
            <Employee firstName = {firstName} lastName = {lastName} age = {age}/>
          );
        })} */}

        {data.map( (employee) => {
          return( 
            <Employee key={employee.id}{...employee}/>
          );
        })}

      </header>
    </div>
  );
}

export default App;
