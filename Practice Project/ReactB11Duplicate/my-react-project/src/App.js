
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Welcome from './Welcome';
// import ClassCompBody from './ClassCompBody';
// import ClassCompBodyTwo from './ClassCompBodyTwo';
import APIIntUsingFetch from "./ApiIntegrationInClassComp/APIIntUsingFetch";
{
  /* The following line can be included in your src/index.js or App.js file */
}

function App() {
  return (
    <div className="App">
      {/* <Welcome/>
      <ClassCompBody/>
      <ClassCompBodyTwo/> */}
      <APIIntUsingFetch />
    </div>
  );
}

export default App;
