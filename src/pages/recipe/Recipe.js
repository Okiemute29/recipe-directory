// Style 
import "./Recipe.css"

import { useParams } from "react-router-dom"
import { useTheme } from "../../hooks/useTheme"
import { useEffect, useState } from "react"
import { projectFirestore } from "../../firebase/config"

const Recipe = () => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)
  const {id} = useParams()
  const {mode} = useTheme()

  useEffect(()=>{
    setIsPending(true)
    const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc)=>{
      if(doc.exists){
        setIsPending(false)
        setData(doc.data())
      }else{
        setIsPending(false)
        setError('could not find that recipe')
      }
    }, (err)=>{
      setIsPending(false)
      setError(err.message)
    })
    return () => unsub()
  },[id])

  const handleupdate = () =>{
    projectFirestore.collection('recipes').doc(id).update({
      title: 'something completely different'
    })
  }
  console.log(data)
  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && (
        <>
          <h2 className="page-title">{data.title}</h2>
          <p>Takes {data.cookingTime}</p>
          <ul>
            {data.ingredient.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method ">{data.method}</p>
          <button onClick={()=> handleupdate()}>Update me</button>
        </>
      )}
    </div>
  )
}

export default Recipe
