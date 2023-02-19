import {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import Spinner from '../../components/spinner/Spinner';
import {createUser, reset} from '../../features/user/userSlice'

function PrivateAddUserForm() {

const {isLoading, isError, isSuccess, message} = useSelector((state) => state.user)

const dispatch = useDispatch()
const navigate = useNavigate()
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        role: "",
      });


useEffect(() => {
    if(isError) {
        toast.error(message)
    }if(isSuccess) {
        dispatch(reset())
        navigate('/private/users-admin')
        toast.success('nouvel utilisateur ajoutée avec succée')
    }
    dispatch(reset())
}, [dispatch, isError, isSuccess, navigate, message])



    const onSubmit = (e) => {
        e.preventDefault()
        console.log(user);
        dispatch(createUser(user))
    }

    const handleInput = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setUser({
          ...user,
          [name]: value,
        });
      };

if(isLoading) {
    return <Spinner/>
}
  return (
    <>
    <section className='heading'>
        <h4>Ajouter un nouvelle utilisateur</h4>
        <p>Vous devez avoir le status admin pour pouvoir ajouter un nouvel utilisateur</p>
    </section>
    <section className="form">
        <form onSubmit={onSubmit}>

        <div className="form-group">
            <label htmlFor="username">Nom de l'utilisateur</label>
            <input className='form-control' name='username'    onChange={handleInput}  value={user.username} type="text"/>
        </div>
        <div className="form-group">
            <label htmlFor="email">email de l'utilisateur</label>
            <input    onChange={handleInput} className='form-control'name='email'value={user.email}  type="mail"/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input    onChange={handleInput} className='form-control' name='password'value={user.password} type="text"/>
        </div>
        <div className="form-group">
            <label htmlFor="role">role</label>
            <select name='role' id='role'  onChange={handleInput} >
                <option value="partner">Partner</option>
                <option value="admin">Admin</option>
                <option value="staff">Staff</option>
            </select>
        </div>
        <div className="form-group">

        <button type='submit'  className='btn btn-block'>ajouter</button>
        </div>
        </form>
    </section>
    </>
  )
}

export default PrivateAddUserForm