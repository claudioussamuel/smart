import { useEffect, useState } from "react"
import Product from "../components/Products";
import { initMongoose } from "../lib/mongoose";
import { findAllProducts } from "./api/products";
import Layout from "../components/Layout";
import Header from "../components/Header";


export default function Home({products}) {
   const [phrase, setPhrase] = useState("");

  const categoriesNames =[...new  Set(products.map(p => p.category))];

  if (phrase) {
    products = products.filter(p=> p.name.toLowerCase().includes(phrase));
  } 

  return (
  
 <Layout>

      
      
<input value={phrase} onChange={e => setPhrase(e.target.value)} type="text" placeholder="Search for products ......"  className="bg-grey-100 w-full py-2 px-2 rounded-xl"/>
<div>
{categoriesNames.map(categoriesName => (
  <div key = {categoriesName}>
    {products.find(p=>p.category === categoriesName) && (
      <div>
<h2 className="text-2xl py-5 capitalize">
    {categoriesName}
  </h2>
  <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide ">
  {products.filter(p => p.category === categoriesName).map(
    productInfo => (
      <div key={productInfo.id} className = "px-5">
      <Product {...productInfo}/>
      </div>        
    )
  )}
  </div> 
      </div>
    )}
  
  </div>
))}
</div>
       
</Layout>
   
   
  )
}

export async function getServerSideProps(){
  await initMongoose();
  const products = await findAllProducts();
  

  return {
    props: {
      products : JSON.parse(JSON.stringify(products)),
    }
  }
}