import React from "react";
import Login from "./Login";
var isLogged = true;
const hour = new Date().getHours();
console.log(hour);
function App() {
  return (
    <div className="container">
      {/* {isLogged === true ? (
        <h1>Logged In</h1>
      ) : (
        <div>
          <h1>Hello</h1>
          <Login />
        </div>
      )} */}
      {hour > 12 ? <h1>Why are youworking</h1> : <h1>Work now</h1>}
    </div>
  );
}

export default App;
