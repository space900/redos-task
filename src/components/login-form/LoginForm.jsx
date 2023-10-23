import { useNavigate } from 'react-router-dom';
import {FormLabel, TextField, Button} from "@mui/material";
import axios from 'axios';

import styles from "./LoginForm.module.scss";

const LoginForm = (props) => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`data/user.json`)
            .then((res) => {
                props.setIsLoggedIn(true);
                localStorage.setItem("name", res.data.name);
                navigate('/');
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormLabel>Войти</FormLabel>
            <TextField required />
            <FormLabel>Password</FormLabel>
            <TextField  required />
            <Button variant="outlined" color="secondary" type="submit">Войти</Button>
        </form>
    );
};

export default LoginForm;