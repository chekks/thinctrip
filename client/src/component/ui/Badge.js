import React from 'react'
import ValueChecker from '../../helpers/ValueChecker';

const checkVariant = (variant) => {
    let variants = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "notification"];
    return ValueChecker.validateValue(variant) != "" && variants.includes(variant) ? ` badge-${variant}` : "";
}

const checkType = (type) => {
    let types = ["text", "number"]
    return ValueChecker.validateValue(type) != "" && types.includes(type) ? ` badge-${type}` : "";
}

const Badge = (props) => {
    let variant = checkVariant(props.variant);
    let type = checkType(props.type);

    return (
        <span  className={`badge ${variant} ${type}`}>
            {props.value}
        </span>
    )
}

Badge.defaultProps = {
	id: "",
	variant: "",
	class: "",
}

export default Badge
