import React, {useState,useEffect} from 'react'
import ItemDetail from './Item/ItemDetail';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

  const [producto,setProducto] = useState([]);

  const {id} = useParams()

    useEffect(()=>{
        
  },[])

  console.log(id)
    
  return (
    <div>
        <h1>das</h1>
      {/* <ItemDetail producto={producto}/> */}
    </div>
  )
}

export default ProductDetail