import React from 'react';
import ValueChecker from '../../helpers/ValueChecker';

const checkSize = (size) =>{
	let sizes = ["default", "lg", "sm"];
	return ValueChecker.validateValue(size) != "" && sizes.includes(size) && size != 'default'  ? ` btn-${size}`: "";
}

const checkType = (type) => {
	let types = ["button", "submit"];
	return ValueChecker.validateValue(types) != "" && types.includes(type) ? type: "text";
} 

const checkVariant = (variant) => {
	let variants = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link", "blue"];
	return ValueChecker.validateValue(variant) != "" && variants.includes(variant) ? ` btn-${variant}` : "";
} 

const Button = (props) =>  {
	console.log("inside");
	let size = checkSize(props.size);
	let type = checkType(props.type);
	let variant = checkVariant(props.variant);
	let block = props.block == true ? ` btn-block`: "";
	let additional_class = ValueChecker.validateValue(props.className) != "" ? ` ${props.className}` : "";

	return (
		<button 
			className={`btn${size}${variant}${block}${additional_class}` } 
			type={type}
			{ ...( props.name && { name: props.name } ) }
			{ ...( props.placeholder && { placeholder: props.placeholder } ) }
			{ ...( props.id && { id: props.id } ) }
			{ ...( props.onClick && { onClick:props.onClick } )}
		>
			{props.children}
		</button>
	)
}

Button.defaultProps = {
	type: "button",
	size: "default",
	name: "",
	id: "",
	label: "",
	variant: "",
	block: false,
	class: "",
	placeholder: "",
	onClick: () => {}
}




export default Button
