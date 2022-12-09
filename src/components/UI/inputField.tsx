import React from "react";
import {Field} from "react-final-form";


interface Values {
    name?: any;
    password?: string | number;
    value?: string;
    component?: any;
    onInputChange: any;
    id?: string | number;
    type?: string;
    placeholder?: string;
    isRevealPwd: any;
    setIsRevealPwd: any;
}


const InputField: React.FC<Values> = ({id, type, placeholder, name, value, component, onInputChange}) => {


    return (

        <div style={{marginBottom:5}}>


            <Field id={id} type={type}
                   value={value} name={name} component={component}
                   placeholder={placeholder}
                   onInputChange={onInputChange}
            />
            {/*<Field id={id} type={type}*/}
            {/*       value={value} name={name} component={component}*/}
            {/*       placeholder={placeholder}*/}
            {/*       onInputChange*/}
            {/*/>*/}

            {/*<PropInput*/}
            {/*    type={"text"}*/}
            {/*    placeholder={"Login"}*/}
            {/*    id={s.firstInput}*/}
            {/*    name={"name"}*/}
            {/*    component={"input"}*/}
            {/*    onInputChange*/}

            {/*/>*/}
            {/*<PropInput*/}
            {/*    id={s.secondInput}*/}
            {/*    placeholder={"Password"}*/}
            {/*    type={isRevealPwd ? "text" : "password"}*/}
            {/*    value={password}*/}
            {/*    name={"password"}*/}
            {/*    component={"input"}*/}
            {/*    onInputChange={setPassword}*/}

            {/*/>*/}


        </div>
    )
}


export default React.memo(InputField);


