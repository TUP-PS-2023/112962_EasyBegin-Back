const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient(); 

const jwt = require("jsonwebtoken")
const secret = process.env.SECRET

 router.get('/a', function(req, res) {
    res.send('hello teams')
  });


  router.post('/login', async (req, res) => {
    const { mail, password } = req.body;
  
   
    const usuario = await prisma.usuarios.findFirst({
      where: {
        AND: [
          { mail: mail },
          { password: password }
        ]
      }
    })
  
    if (!usuario) {
      return res.status(401).send('Correo electrónico o contraseña incorrectos');
    }
  else{
     const token = jwt.sign({
      mail,
      password,
      exp: Date.now() + 60 * 1000
    }, secret);

    res.send({ token });
  }}


  );

 

  router.get("/usuarios", async function(req, res) {
    try {
      const usuarios = await prisma.usuarios.findMany({
          include: {rol : true}
      });
      res.status(200).json({
        message: "success",
        data: usuarios,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: error,
      });
    }
  }); 
  
  router.post("/alta", async function(req, res) {
    try {
      const { nombre, mail, password, id_rol } = req.body;
      const result = await prisma.usuarios.create({
        data: {
          nombre,
          mail,
          password,
          id_rol
        },
      });
      res.status(200).json({
        message: "success",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  });



  router.get("/:id", async function(req, res) {
    try {
      const usuarios = await prisma.usuarios.findUnique({
        where: { id_usuario: +req.params.id },
        include: {rol: true}
      });
      res.status(200).json({
        message: "success",
        data: usuarios,
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  });

  router.put("/edit/:id", async function(req, res) {
    try {
      const {  password } = req.body;
      const result = await prisma.usuarios.update({
        where: { id_usuario: +req.params.id },
        data: { password },
      });
      res.status(200).json({
        message: "success",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  });

  router.delete("/delete/:id", async function(req, res) {
    try {
      const result = await prisma.usuarios.delete({
        where: { id_usuario: +req.params.id },
      });
      res.status(200).json({
        message: "success",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  });

/*   router.post("/token", (req, res) => {

         const mail = 'nikgonzalo@gmail.com';
        const password = '123456';
         
        const {mail: mail, password} = {id: "lrodasz", password: "Guillermo"}
       
              const token = jwt.sign({
                mail,
                password,
                exp: Date.now() + 60 * 1000
              }, secret);
      
              res.send({ token });
            }
        );
      
        
    router.get("/public", (req, res) => {
        
        
        res.send("I'm Public")
    
    });
    


  router.get("/private", (req, res) => {
    
      try {
          //bearer
          const token = req.headers.authorization.split(" ")[1]
          const payload = jwt.verify(token, secret)
  
          if(Date.now() > payload.exp){
              return res.status(401).send({error: "Token expirado"})
          }
  
          res.send("I'm Private")
      } catch (error) {
          res.status(401).send({error: error.message})
      }
    
  
  });  */




module.exports = router;

