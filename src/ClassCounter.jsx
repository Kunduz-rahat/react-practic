import React from "react";

class ClassCounter extends React.Component{
	constructor(props){
		super(props);
		this.state={
			count:0
		}
	this.ink = this.ink.bind(this)
	this.desk = this.desk.bind(this)
	}
	ink(){
		this.setState({count:this.state.count +1})
	}
	desk(){
		this.setState({count:this.state.count +1})
	}
	render(){
		return(
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.ink}>Inkeremetn</button>
				<button onClick={this.desk}>Deskrement</button>
			</div>
		)
	}
}

export default ClassCounter