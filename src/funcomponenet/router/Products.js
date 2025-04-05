import React from 'react'
import { useParams,useNavigate,useSearchParams } from 'react-router-dom'
function Products() {
  const {id} = useParams();
  const navigation = useNavigate();
  const [searchParams] = useSearchParams();
  console.log(Object.fromEntries([...searchParams]));
  // console.log(id)
  return (
    <div>
      {searchParams.get('sort')}
      Product 
      <button onClick={() =>{
        navigation(-1)
      }} style={{width:200, backgroundColor:'red'}}>Back</button>
    </div>
  )
}

export default Products
