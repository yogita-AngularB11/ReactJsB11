
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContextProvider from './ContextAPI/UserContextProvider';
import Login from './ContextAPI/Login'
import Profile from './ContextAPI/Profile';
import UsersList from './ContextAPI/UsersList';
function App() {
  return (
    <>
   <UserContextProvider>
    <Login/>
    {/* <Profile/> */}
    <UsersList/>
   </UserContextProvider>
    
    </>
  );
}

export default App;
