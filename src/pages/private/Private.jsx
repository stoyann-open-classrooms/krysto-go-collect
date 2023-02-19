import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function Private() {
  const user = JSON.parse(localStorage.getItem('userToken'))



//   const dispatch = useDispatch()

//   useEffect(() => {
//     return () => {
//       if (isSuccess) {
//         dispatch(reset())
//       }
//     }
//   }, [dispatch, isSuccess, isErro])



 
    if (user === undefined || !user || user === null) {
      
      return <Navigate to={'/'} />
    }
  else {



  return (
    <>
      <Outlet />
    </>
  )
  }
}

export default Private