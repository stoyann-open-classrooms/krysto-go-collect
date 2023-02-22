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
const  [compagny , setCompagny] = useState({
    
})

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        role: "",
        // contact: {

        //     firstname: "",
        //     lastname:"",
        //     function:"",
        //     phone: ""
        // },
        // agent: {
        //     codeAgent: "",
        //     cafat:"",
        //     contrat:"",
        //     function: "",
        //     tauxHorraire: "",
        // },
        // compagny: {
        //     compagnyName: "",
        //     ridet:""
        // }
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


    const handleInput = (e) => {
        setUser((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }
  

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

        {/* ====================== REMPLIR LES OBJETS USERS POUR LA VALIDATION  ============================ */}


        {/* <div className="form-group">
            <label htmlFor="firstname">Prénom</label>
            <input  onChange={handleInputContact} className='form-control' name='firstname' value={contact.firstname} type="text" />
        </div>
        <div className="form-group">
            <label htmlFor="lastname">Nom</label>
            <input  onChange={handleInputContact} className='form-control' name='lastname'value={contact.lastname} type="text" />
        </div>
        <div className="form-group">
            <label htmlFor="function">Fonction</label>
            <input  onChange={handleInputContact} className='form-control' name='function'value={contact.function} type="text" />
        </div>
        <hr />
        <h5>Champs a remplir uniquement si l'utilisateur a la role partenaire (client)</h5>
        <div className="form-group">
            <label htmlFor="compagnyName">Nom de l'entreprise (raison social)</label>
            <input  onChange={handleInputCompagny} className='form-control' name='compagnyName'value={compagny.compagnyName} type="text" />
        </div>
        <div className="form-group">
            <label htmlFor="ridet">RIDET</label>
            <input  onChange={handleInputCompagny} className='form-control' name='ridet'value={compagny.ridet} type="text" />
        </div>
        <hr />
        <hr />
        <h5>Champs a remplir uniquement si l'utilisateur a la role admin, ou staff</h5>

        <div className="form-group">
            <label htmlFor="codeAgent">Code Agent</label>
            <input  onChange={handleInputAgent} className='form-control' name='codeAgent'value={agent.codeAgent} type="text" />
        </div>
        <div className="form-group">
            <label htmlFor="cafat">N° Cafat</label>
            <input  onChange={handleInputAgent} className='form-control' name='cafat' value={agent.cafat} type="text" />
        </div>
        <div className="form-group">
            <label htmlFor="contrat">Type de contrat</label>
            <select name='contrat' id='contrat'  onChange={handleInputAgent} >
                <option value="CDI">CDI</option>
                <option value="CDD">CDD</option>
                <option value="CDD-temps-partiel">CDD-temps-partiel</option>
                <option value="CDI-temps-partiel">CDI-temps-partiel</option>
                <option value="Stagiaire">Stagiaire</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="funtion">Function</label>
            <input  onChange={handleInputAgent} className='form-control' name='function'value={agent.function} type="text" />
        </div>
        <div className="form-group">
            <label htmlFor="tauxHorraire">Taux horraire brut</label>
            <input  onChange={handleInputAgent} className='form-control' name='tauxHorraire'value={agent.tauxHorraire} type="text" />
        </div> */}
        <div className="form-group">
       
        <button type='submit'  className='btn btn-block'>ajouter</button>
        </div>
        </form>
    </section>
    </>
  )
}

export default PrivateAddUserForm