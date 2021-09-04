import React from 'react'
import ValueChecker from '../../../helpers/ValueChecker';

const checkSize = (size) =>{
	let sizes = ["default", "lg", "sm"];
	return ValueChecker.validateValue(size) != "" && sizes.includes(size) && size != 'default'  ? ` form-control-${size}`: "";
}

const checkType = (type) => {
	let types = ["text", "date", "email", "number", "password"];
	return ValueChecker.validateValue(types) != "" && types.includes(type) ? type: "text";
} 

// const handleChange = (event, props) =>{
// 	if(ValueChecker.validateValue(props.onchange) != "" && typeof props.onchange === "function"){
// 		props.onchange(event);
// 	}
// }

const TextField = (props) => {
	
	let size = checkSize(props.size);
	let type = checkType(props.type);
	let round = props.round == true ? ` input-round`: "";

	return (
		<React.Fragment>
			<input 
				type={type} 
				className={`form-control${size}${round}${' ' + props.className}` } 
				placeholder={props.placeholder}
				{ ...( props.name && { name:props.name } )}
				{ ...( props.id && { id:props.id } )}
				{ ...( props.autoComplete && { autoComplete: props.autoComplete } ) }
				onChange = {props.onChange}
			/>
			
		</React.Fragment>
	)
}

TextField.defaultProps = {
	type: "text",
	placeholder: "",
	size: "default",
	name: "",
	id: "",
	round: false,
	onChange: () => {}
}

export default TextField
