class ValueChecker{
    validateValue = (value) => {
        if(value == null) {
            return "";
        }
        else if(value == undefined) {
            return "";
        }
        else if(value == "") {
            return "";
        }else{
            return value;
        }
    }
}

export default new ValueChecker();