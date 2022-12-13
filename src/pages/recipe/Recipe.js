// Style 
import "./Recipe.css"

import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/usefetch"
import { useTheme } from "../../hooks/useTheme"

const Recipe = () => {
  const {id} = useParams()
  const {data, isPending, error} = useFetch(`http://localhost:3000/recipes/${id}`)
  const {mode} = useTheme()

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
            {data.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method ">{data.method}</p>
        </>
      )}
    </div>
  )
}

export default Recipe
