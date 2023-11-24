import React, {Component} from 'react';
// import { ReactPropTypes } from 'react;
// import PropTypes from 'prop-types'
// import PropTypes from 'prop-types'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import App from './components/App';
import reportWebVitals from './reportWebVitals';
import MyAppWithProps from './components/MyAppWithProps';
import RegistrationForm from './components/RegisterForm';

// class ComponentExample extends React.Component{
  class Test extends React.Component{
    // Hàm khởi tạo Object => step 1 Initialization
    constructor(props){
      //super: gọi các phương thức khởi tạo(constructor) của lớp(class) cha. Dùng lại các phương thức của lớp cha
      super(props);
      // This: gọi đối tượng(Object) hiện tại của class.
      this.state = {hello: "world!"};
    }
    //Mounting 
    //Step 2
    componentDidMount(){
      console.log("componentDidMount()");
    }
    //Step 3  
    changeState(){
      this.setState({hello: "FPT-Aptech"});
    }

    render(){
      return(
        <div>
          <h1>Hello{this.state.hello}</h1>
          <h2>
            <a onClick={this.changeState.bind(this)}>Click here</a>
          </h2>
        </div>
      );
    }
    //Step 4
    shouldComponentUpdate(nextProp, nextState){
      console.log("shouldComponentUpdate()");
      return true;
    }
    //Step 5
    componentDidUpdate(){
      console.log("componentDidUpdate()");
    }
  }


// componentClassName.propTypes: import kiểu(dữ liệu) của các property
// ComponentExample.propTypes={
//   arrayProp:PropTypes.array,
//   stringProp:PropTypes.string,
//   numberProp:PropTypes.number,
//   boolProp:PropTypes.bool,
// }
// ComponentExample.defaultProps ={
//   arrayProp:['Ngoc', 'Binh', 'Thanh'],
//   stringProp:"fpt-aptech",
//   numberProp:20,
//   boolProp:true,
// }





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <ComponentExample/> */}
    {/* <Login></Login> */}
    {/* <Test/> */}
    {/* <MyAppWithProps></MyAppWithProps> */}
    {/* <RegistrationForm></RegistrationForm> */}
    {/* <App/> */}
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
