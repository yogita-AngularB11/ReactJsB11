
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import MyComponent from './componentBasic/MyComponent';
import CodeMind from './componentBasic/CodeMind_Website';
import Header from './componentBasic/Header';
import ReactJS from './componentBasic/ReactJS';
import JavaScript from './componentBasic/JavaScript';
import MyClassComp from './componentBasic/MyClassComp';
import UserContextProvider from './ContextAPI/UserContextProvider';
import Login from './ContextAPI/Login';

function App() {
  return (
    <>
      {/* <MyComponent/> */}
      {/* <CodeMind/> */}
      {/* <Header/>
      <ReactJS/>
      <JavaScript/> */}
      {/* <MyClassComp/> */}
      <UserContextProvider>
        <Login />
      </UserContextProvider>
    </>
  );
}

export default App;
