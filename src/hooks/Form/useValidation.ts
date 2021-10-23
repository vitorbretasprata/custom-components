import { useState } from "react";

/**
 * params:
 * initValues,
 * options 
 * cb()
 */
export const useValidation = (initValues : any, options : any, cb : () => void) => {

    const [values, setValues] = useState(initValues || {});
    const [errors, setErrors] = useState(initValues || {});

    const handleChange = (key) => (e) => {
        

        setValues({
            ...values,
            [key]: e.target.value
        })
    }

    const submitForm = () => {
        let isValid;

        let formErrors = errors;

        for(const k in options) {
            const value = values[k];

            const validation = options[k];

            if(validation.required.value && !value) {
                isValid = false;

                formErrors[k] = validation.required.errorMessage;
            }

            const pattern = validation.pattern;
            if(pattern.value && !RegExp(pattern.value).test(value)) {
                isValid = false;

                formErrors[k] = pattern.errorMessage;
            }
            const custom = validation.custom;
            if(custom.isValid && !custom.isValid(value)) {
                isValid = false;

                formErrors[k] = custom.errorMessage;
            }
        }

        if(!isValid) {
            setErrors(formErrors);

            return;
        }

        setErrors({});
        cb();
    }

    return {
        handleChange,
        values,
        submitForm,
        errors
    }
}