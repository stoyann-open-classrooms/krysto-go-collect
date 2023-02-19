import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getUsers , reset } from "../../features/user/userSlice"
import Spinner from "../../components/spinner/Spinner" 
import UserItem from "../../components/UserItem"

function PrivateUserList() {

    const {users, isLoading, isSuccess, isError} = useSelector((state) => state.user)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    console.log(users.data);

    if(isLoading || !users.data) {
        return <Spinner/>
    }
  return (
    <>
    <section className="heading">
        <h3>Liste des uttilisateurs</h3>
        <p>supprimer ou modifier un utilisateur vous devez avoir le status admin pour effectuer ces actions.</p>
    </section>
    <section>
        Nombres d'uttilisateurs: {users.count}
        <div className="tickets">
            <div className="ticket-headings">
                <div>date de création</div>
                <div>username</div>
                <div >role</div>
            </div>
            {users.data.map((user) =>(
                <UserItem key={user.id} user={user}/>
            ) )}
        </div>
    </section>
    </>
  )
}

export default PrivateUserList