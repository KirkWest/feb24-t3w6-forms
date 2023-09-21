import {Component} from "react";

import BusinessCardDisplay from "./BusinessCardDisplay";

export default class BusinessCardParent extends Component {
	constructor(){
		super();

		this.state = {
			editMode: false
		}
	}

	render(){
		if (this.state.editMode){
			// if edit is true, show the form 
		} else {
			return(
				<div>
					<BusinessCardDisplay
					email=""
					name=""
					 />
				</div>
			)
		}
	}
}

// import elephant from "react";
// class BlahBlah extends elephant.Component {
// 	constructor(){

// 	}
// }
