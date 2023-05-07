// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "./nodemailer";


 const CONTACT_MESSAGE_FIELDS = {
  name : "name",
  phone : "phone",
  email : "email",
  city : "city",
  address : "address",
  total : "total",
  productInfos : "productInfos"

 };

const generateEmailContent = (data) => {

  const stringData = Object.entries(data).reduce((str, [key,val]) => {
   return str += `<h1 align="left">${CONTACT_MESSAGE_FIELDS[key]} </h1> <p>${val}</p>`;
  },"")

  return {  
    html : stringData
  }
};

const handler = async  (req, res) =>  {

  console.log(req.method);
  if (req.method === "POST"){
    const data = req.body;
    console.log(data);
   
    try{
      await transporter.sendMail({
        ...mailOptions,
        subject: `${data.name} Just Placed an other`,
        text : `Contact the customer Asap`,
        ...generateEmailContent(data),
      })

    }catch (error){
      console.log(error);
    return  res.status(400).json({message : "Bad request"});
    }
  }
    return  res.status(400).json({message : "Bad request"});
 };

 export default handler;
