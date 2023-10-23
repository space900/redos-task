import LoginForm from "../../components/login-form/LoginForm.jsx";

const Login = (props) => {
    return (
        <>
          <LoginForm setIsLoggedIn={props.setIsLoggedIn} />
        </>
    );
};

export default Login;