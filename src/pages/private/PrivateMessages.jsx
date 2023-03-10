
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import MessageItem from '../../components/MessageItem'
import { BackButton } from '../../components/shared/BackButton'
import Spinner from '../../components/shared/spinner/Spinner'

import { getMessages } from '../../features/message/messageSlice'

function PrivateMessages() {
  const {messages, isLoading, isSuccess, isError} = useSelector((state) => state.message)

  const dispatch = useDispatch()


  useEffect(() => {
      dispatch(getMessages())
  }, [dispatch])

  console.log(messages.data);

  if(isLoading || !messages.data) {
      return <Spinner/>
  }
return (
  <>
  <section className="heading">
      <BackButton url={'/private/home'}/>
      <h3>Liste des Messages</h3>
      <p>Gestion des messages recu via le site internet</p>
  </section>
  <section>
      <div className="tickets">
          <div className="ticket-headings">
              <div>date</div>
              <div >objet</div>
              <div >Status</div>
          </div>
         
              {messages.data.filter(message => message.status === "not_read").map((message) =>(
               <MessageItem key={message.id} message={message}/>
            ) )}
      </div>
  </section>
  <Link to={'/private/messages-archived'} className='btn btn-block'>Voir les messages archivé</Link>
  </>
)
}

export default PrivateMessages