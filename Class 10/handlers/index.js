const send = async (req,res)=>{
    try{
        const mailgun = new Mailgun(formData);
        const mg = mailgun.client({
          username: process.env.USERNAME,
          key: process.env.API_KEY,
        });
    
        let out = await mg.messages.create(process.env.API_DOMAIN, req.body);
    }
}