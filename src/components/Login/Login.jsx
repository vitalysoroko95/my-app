import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";


const LoginForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Login"} name={"login"} component={Input} validate={[required]}/></div>
            <div><Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}/></div>
            <div><Field component={"input"} name={"rememberMe"} type={"checkbox"}/> Remember me</div>
            <div>
                <button>Log IN</button>
            </div>
        </form>
    )

}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const LoginPage = (formData) => {

    const onSubmit = (formData) = {

    }

    return <div>
        <h1>Login </h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


export default LoginPage;