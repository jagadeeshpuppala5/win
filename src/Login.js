import React from 'react'

class Login extends React.Component{
	state={
			username:"",
			password:""
		}
		handleChange=(j)=>{
			this.setState({
				[j.target.name]:j.target.value
			})
		}
		handleClick=()=>{
			console.log(this.state.username,this.state.password)
		}
	render(){
		return(
			<div className="login">
			<br/>
			<input name="username" onChange={this.handleChange}placeholder="Enter user name"/><br/><br/>
			<input name="password" onChange={this.handleChange}placeholder="Enter password"/><br/><br/>
			<button onClick={this.handleClick}>Submit</button>
			</div>
		);
	}
}
export default Login
