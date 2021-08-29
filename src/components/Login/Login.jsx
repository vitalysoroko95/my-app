import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "../../common/FormsControls/FormControl.module.css"



const LoginForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/></div>
            <div><Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} type={"password"}/></div>
            <div><Field component={Input} name={"rememberMe"} type={"checkbox"}/> Remember me</div>
            {props.error && <div className={style.formSummaryError}>{props.error}</div>}
            <div>
                <button>Log IN</button>
            </div>

        </form>
    )

}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const LoginPage = (props) => {

    const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login </h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps =(state)=>{
    return{
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps,{login})(LoginPage);