
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import FakeStore from './FakeStore/FakeStore';
import DataBindingClassComp from './Class-Componennts/dataBinding-classComp';
import StateInClass from './Class-Componennts/state-in-class';
import SetStateAtMount from './Class-Componennts/SetStateAtMount';
import ClassAndStyleBinding from './Class-Componennts/ClassAndStyleBinding';
// import StorageDemo from './storage-demo/StorageDemo';
// import HookFormDemo from './Hook-Form-Demo/HookFormDemo';
// import FormikSpreadApproach from './formik-validation/formik-spreadApproach';
// import FormikComponent from './FormikComponent/FormikComponent';
// import FormStateValidation from './Form-state-validation/FormStateValidation';
// import FormikValidationsDemo from './formik-validation/formik-validations';
// import YupValidationSchema from './formik-yupValidationSchema/yup-validationSchema';
// import IntervalDemo from './interval-demo/interval-demo';
// import FormDemo from './form-demo/form-demo';
// import FormikDemo from './formik-demo/formik-demo';
// import FakestoreCarousel from './fakestore-carousel/fakestore-carousel';
// import AddCategory from './video-library/add-category';
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import Details from './Details/Details';
// import FakestoreIndex from './Fakestore-Routing/fakestore-index';
// import KeyDemo from './KeyDemo';
// import TimeoutDemo from './TimerEvents/TimeoutDemo';
// import RegisterUser from './Class-Componennts/RegisterUser';
// import ConditionalRendering from './Conditional-rendering/ConditionalRendering';
// import ReducerDemo from './ReducerDemo/ReducerDemo';
// import ContextDemo from './Context-Demo/ContextDemo';
// import MyUseCallbackHook from './UseCallbackHook/MyUseCallbackHook';
// import MyComponent from './UseCallbackHook/MyComponent';
// import FakeStore from './FakeStore/FakeStore';
// import Fakestore1 from './FakeStore/Fakestore1';
// import ParentCallback from './UseCallbackTest/ParentCallback';
// import FilterComponent from './Project/FilterComponent';

// import UseMemoParent from './useMemoTest/UseMemoParent';
// import UserProfile from './Practice/UserProfile';
// import UseMemoParent from './MemoTest/UseMemoParent';
// import UseRefHookInForm from './useRefHookAdvFormHandling/UseRefHookInFor';
// import UseRefHookInClassCompForm from './useRefHookAdvFormHandling/UseRefHookInClassCompForm';
// import CounterInterview from './Assignment250524/CounterInterview';
// import Welcome from './Welcome';
// import FunctionalComponentOne from './FunctionalComponentOne';
// import FunctionalComponentTwo from './FunctionalComponentTwo';
// import ClassCompBodyOne from './ClassCompBodyOne';
// import ClassCompBodyTwo from './ClassCompBodyTwo';
// import FragmentTest from './FragmentTest/FragmentTest';
// import FragmentTest1 from './FragmentTest/FragmentTest1';
// import ConditionalRendering from './ConditionalRendering/ConditionalRendering';
// import ConditionalRendering2 from './ConditionalRendering/ConditionalRendering2';
// import WelcomeCompCall from './ComponentCall/WelcomeCompCall';
// import WelcomeScreen from './Assignment2405/WelcomeScreen';
// import ParentComponent from './Assignment2305/ParentComponent';
// import WithoutStateInClassComp from './StateInClassComp/WithoutStateInClassComp';
// import StateInClassComp from './StateInClassComp/StateInClassComp';
// import CounterComponent from './Assignment250524/CounterComponent';
// import StateInFunctComp from './StateInClassComp/StateInFunctComp';
// import Main from './RoutingTest/Main';
// import ArrayInClassComp from './StateInClassComp/ArrayInClassComponent';
// import ClassCompLifeCycle from './ClassCompLifeCycle/ClassCompLifeCycle';
// import LifeCycleTask from './Assignment310524/LifeCycleTask';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import EmployeeList from './CRUD_Using_ContextAPI/EmployeeList';
// import AddEmployee from './CRUD_Using_ContextAPI/AddEmployee';
// import EditEmployee from './CRUD_Using_ContextAPI/EditEmployee';
// import { EmployeeProvider } from './CRUD_Using_ContextAPI/EmployeeStore';

// import ControlledDemo from './Custom-components/controlled-demo';

// import UseEffectHook from './UseEffectHook/UseEffectHook';
// import UseEffectHook1 from './UseEffectHook/UseEffectHook1';
// import UseEffectHook2 from './UseEffectHook/UseEffectHook2';



function App() {
  return (
    // <div className='container-fluid'>
    //   <BrowserRouter>
    //     <header className='bg-dark d-flex p-2 justify-content-around text-white'>
    //       <div className="fs-4 fw-bold ">Shopper.</div>
    //       <div className='fs-5'>
    //         <Link to='/' className='link-light text-decoration-none me-3'>Home</Link>
    //         <Link to='men' className='link-light text-decoration-none mx-3'>Men's Fashion</Link>
    //         <Link to='women' className='link-light text-decoration-none mx-3'>Women's Fashion</Link>
    //         <Link to='kids' className='link-light text-decoration-none'>Kid's Fashion</Link>
    //       </div>
    //       <div>
    //         <span className='bi bi-person-fill'></span>
    //         <span className='bi bi-heart-fill mx-3'></span>
    //         <span className='bi bi-cart'></span>
    //       </div>
    //     </header>
    //     <section className='d-flex '>
    //       <Routes>
    //         <Route path='/' element={
    //           <div>
    //             <h1>Welcome to online shopping</h1>
    //             <p>Mens | Women | Kids Fashion</p>
    //           </div>
    //         } />

    //         <Route path='men' element={
    //           <div >
    //             <h3>Men's Fashion</h3>
    //             <img src='men-fashion.jpeg' alt='mens-pic' width={200} height={200} />
    //           </div>
    //         } />

    //         <Route path='women' element={
    //           <div>
    //             <h3>Women's Fashion</h3>
    //             <img src='women-fashion.jpeg' alt='women-pic' width={200} height={200} />
    //           </div>
    //         } />
    //         <Route path='kids' element={
    //           <div>
    //             <h3>Kid's Fashion</h3>
    //             <img src='kids-fashion.jpg' alt='kids-pic' width={200} height={200} />
    //           </div>
    //         } />
    //         {/* Route Parameters Concept */}
    //         <Route path='details/:id/:name/:price' element={<Details/>}/>
    //         <Route path='*' element={<div>
    //           <h3>Looking for something?</h3>
    //           <code>Opp's...! Unable to find your request</code>
    //         </div>} />
    //       </Routes>
    //     </section>
    //   </BrowserRouter>
    //</div>
    <>
      {/* <FilterComponent/> */}
      {/*<div id='App'>*/}
      {/* <React.Fragment> */}
      {/* <Welcome /> */}
      {/* <ClassCompBodyOne /> */}
      {/* <ClassCompBodyTwo /> */}
      {/* <FunctionalComponentOne /> */}
      {/* <FunctionalComponentTwo /> */}
      {/* <FragmentTest /> */}
      {/* <FragmentTest1 />  */}
      {/* <WelcomeCompCall/> */}
      {/* <ParentComponent /> */}
      {/* <WelcomeScreen /> */}
      {/* <ConditionalRendering/> */}
      {/* <ConditionalRendering2/> */}
      {/* <StateInClassComp /> */}
      {/* <ArrayInClassComp /> */}
      {/* <WithoutStateInClassComp /> */}
      {/* <CounterComponent/> */}
      {/* <CounterInterview/> */}
      {/* <StateInFunctComp /> */}
      {/* <ClassCompLifeCycle /> */}
      {/* <LifeCycleTask/> */}
      {/* <UseEffectHook/> */}
      {/* <UseEffectHook1/> */}
      {/* <UseEffectHook2/> */}
      {/* </React.Fragment> */}
      {/* <Main /> */}
      {/* <UseRefHookInForm/> */}
      {/* <UseRefHookInClassCompForm/> */}
      {/* <MemoParent/> */}
      {/* <UseMemoParent/> */}
      {/* <UserProfile name="John Doe" age={30} />
     <UserProfile name="John Doe" age={30} />
     <UserProfile name="Jane Smith" age={25} />
     <UserProfile name="Jane " age={5} />
     <UserProfile name="Jane " age={5} /> */}
      {/* <MyUseCallbackHook/> */}
      {/* <MyComponent/> */}
      {/* <ParentCallback/> */}
      {/* <EmployeeProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<EmployeeList />}></Route>
            <Route exact path='/addEmployee' element={<AddEmployee />}></Route>
            <Route exact path='/editEmployee' element={<EditEmployee />}></Route>
          </Routes>
        </BrowserRouter>
      </EmployeeProvider> */}
      {/* </div> */}
      {/* <FakestoreCarousel/> */}
      {/* <IntervalDemo /> */}
      {/* <FormDemo/> */}
      {/* <FormikDemo /> */}
      {/* <FormikValidationsDemo/> */}
      {/* <YupValidationSchema/> */}
      {/* <FormikSpreadApproach/> */}
      {/* <FormikComponent/> */}
      {/* <FormStateValidation/> */}
      {/*<HookFormDemo/>*/}
      {/* <FakeStore/> */}
      {/* <ContextDemo/> */}
      {/* <ConditionalRendering/> */}
      {/* <ReducerDemo/> */}
      {/* <RegisterUser/> */}
      {/* <KeyDemo/> */}
      {/* <TimeoutDemo/> */}
      {/* <FakestoreIndex /> */}
      {/* <AddCategory/> */}
      {/* <ControlledDemo/> */}
      {/* <StorageDemo/> */}
      {/* <DataBindingClassComp/> */}
      {/* <StateInClass/> */}
      {/* <SetStateAtMount/> */}
      <ClassAndStyleBinding/>
    </>
  );
}

export default App;
