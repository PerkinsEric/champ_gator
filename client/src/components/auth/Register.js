import { AuthConsumer } from "../../providers/AuthProvider";
import { useState } from "react";
import Flash from "../shared/Flash";
// import { propTypes } from "react-bootstrap/esm/Image";

const Register = ({ handleRegister, errors, setErrors}) => {

    const [user, setUser] = useState({ 
        email: '',
        name: '',
        nickname: '',
        password: '',
        passwordConfirmation: '' 
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (user.password === user.passwordConfirmation){
            handleRegister({email:user.email, name:user.name, nickname:user.nickname, password:user.password})
        } else {
            alert('Passwords Do Not Match')
        }
    }

    return (
        <>
            { errors ?
                <Flash 
                    variant={errors.variant}
                    msg={errors.msg}
                    setErrors={setErrors}
                />
            : null
            }
            <h1>Create an Account!</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input 
                    type='email'
                    name='email'
                    value={user.email}
                    onChange={ (e) => setUser({ ...user, email: e.target.value })}
                    required
                    placeholder='Email'
                />
                <label>Name</label>
                <input 
                    name='name'
                    value={user.name}
                    onChange={ (e) => setUser({ ...user, name: e.target.value })}
                    required
                    placeholder='Name'
                />
                <label>Username</label>
                <input 
                    name='nickname'
                    value={user.nickname}
                    onChange={ (e) => setUser({ ...user, nickname: e.target.value })}
                    required
                    placeholder='Username'
                />
                <label>Password</label>
                <input 
                    type='password'
                    name='password'
                    value={user.password}
                    onChange={ (e) => setUser({ ...user, password: e.target.value })}
                    required
                    placeholder='Password'
                />
                <label>Password Confirmation</label>
                <input 
                    type='password'
                    name='passwordConfirmation'
                    value={user.passwordConfirmation}
                    onChange={ (e) => setUser({ ...user, passwordConfirmation: e.target.value })}
                    required
                    placeholder='Password Confirmation'
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

const ConnectedRegister = (props) => (
    <AuthConsumer>
        { value => <Register {...props} {...value} />}
    </AuthConsumer>
)

export default ConnectedRegister;