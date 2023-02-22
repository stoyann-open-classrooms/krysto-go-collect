
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BackButton } from '../../components/BackButton'
import MessageItem from '../../components/MessageItem'
import Spinner from '../../components/spinner/Spinner'
import { getMessages } from '../../features/message/messageSlice'

function PrivateMessageArchived() {
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
      <BackButton url={'/private/messages'}/>
      <h3>Liste des Messages archivées</h3>
  </section>
  <section>
      <div className="tickets">
          <div className="ticket-headings">
              <div>date</div>
              <div >objet</div>
              <div >Status</div>
          </div>
         
              {messages.data.filter(message => message.status === "Archived").map((message) =>(
               <MessageItem key={message.id} message={message}/>
            ) )}
      </div>
  </section>
  
  </>
)
}

export default PrivateMessageArchived