import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { ProductsContext } from "../components/productsContext";
import { sendContactForm } from "../lib/api";


export default function CheckoutPage(){
    const {selectedProducts, setSelectedProducts} = useContext(ProductsContext);
    const [productInfos,setProductInfos] = useState([]);
    const [address,setAddress] = useState("");
    const [city,setCity] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [name,setName] = useState("");


    const onSubmit = async () => {
        await sendContactForm({productInfos,name,phone,email,city,address,total});
    }


    useEffect(()=>{
        const uniqIds = [...new Set(selectedProducts)];
        fetch('/api/products?ids='+uniqIds.join(','))
        .then(response => response.json())
        .then(json => setProductInfos(json));
    },[selectedProducts]);

    let total = 0;
    if(selectedProducts?.length){
     for(let id of selectedProducts){
         const price = productInfos.find(p=> p._id === id)?.price || 0;
         total += price;
     }
    }
  

    function moreOfThisProduct(id){ 
        setSelectedProducts(prev => [...prev,id])
    }

    function lessOfThisProduct(id){
        const pos = selectedProducts.indexOf(id);
        if (pos != -1) {

            const newSelectedProducts = selectedProducts.filter((value, index) => index !== pos);
            setSelectedProducts(
                prev => {
                    return prev.filter((value,index) => index !== pos);
                }
            );
        }
    }

    
  console.log(productInfos.length);

    return(
        <Layout>
           {!productInfos.length && (
            <div>
                No product in your shopping cart
            </div>
           )}
           
           {
            productInfos.length && productInfos.map(
                productInfos=>(
                    <div className="flex mb-5 " key={productInfos._id} >
                        <div className="bg-gray-100 p-3 rounded-xl shrink-0">
                            <img className="w-24" src={productInfos.picture} alt=""/>
                        </div>
                        <div className="pl-4 w-full">
                            <h3 className="font-bold text-lg">
                                {productInfos.name}
                            </h3>
                            <p className="text-sm leading-4 text-gray-400">{productInfos.description}</p>
                            <div className="flex">
                            <div className="grow">GH₵{productInfos.price}</div>
                            <div >
                                <button onClick={
                                    
                                    ()=>lessOfThisProduct(productInfos._id)
                                    } className="border border-emerald-500 px-2 rounded-lg text-emerald-500">-</button>
                           
                            <span className="px-2"> {selectedProducts.filter(id=> id === productInfos._id).length}</span>
                                <button onClick={()=>moreOfThisProduct(productInfos._id)} className="bg-emerald-500 px-2 rounded-lg text-white">+</button>
                        </div>
                        </div>
                        
                        </div>
                      
                        
                    </div>
                )
            )
           }
           <div>
            <input value={address} onChange={e => setAddress(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="Address"/>
            <input value={city} onChange={e => setCity(e.target.value)}  className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2"  type="text" placeholder="City"/>
            <input value={email} onChange={e => setEmail(e.target.value)}  className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2"  type="text" placeholder="Email address"/>
            <input value={phone} onChange={e => setPhone(e.target.value)}  className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="Phone Number"/>
            <input value={name} onChange={e => setName(e.target.value)}  className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2"  type="text" placeholder="Your Name"/>
           </div>
           <div className="mt-4">
            <div className="flex my-3">
            <h3 className="grow font-bold text-gray-400">Total</h3>
            <h3 className="font-bold"> GH₵{total}</h3>
            </div>
           
           </div>

            <button onClick={onSubmit} className="bg-emerald-500 px py-2  rounded-xl font-bold text-white w-full">Pay GH₵{total}</button>
        </Layout>
    );
    
}