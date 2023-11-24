import React,{Component} from "react";

class MyAppWithProps extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name: "fptaptech",
            email: "fptaptech@gmail.com"
        }
    }

    render(){
        return(
            <div>
                <h1>Demo State and Props</h1>
                <h2>Welcome to {this.state.name}</h2><br/>
                <h3>email: {this.state.email}</h3>
            </div>
        );
    }
}
export default MyAppWithProps;