export const environment = {
  production: true,

  /* Options */
  documentos:[    
    {value:null, name:"Selecciona tu tipo de Identificación"},
    {value:1, name:"Cédula de Ciudadanía"},
    {value:2, name:"Cédula de Extranjería"},
    {value:3, name:"NIT"}
   ],

   min: 1200000,
   minF: 10000000,

   ocupaciones:[
    {value:null, name:"Selecciona tu ocupación"},
    {value:1, name:"Pensionado"}, /* 15 */
    {value:11, name:"Empleado"}, /* 16 */
    {value:2, name:"Independiente"} /* 3 */
   ],

  /* Regex */
  patternLetter: "^[a-zA-Z áéíóúñÁÉÍÓÚÑ]+$",
  patternNumber: "[0-9]+$",
  patternCel: "^3+[0-9]{0,10}$",
  patternMail: "^(([^<>()\[\]\\.,;:\s@]+(\.[^<>()\[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$",

  /* Urls */
  urlAp: "https://api.premiercredit.co:11444/PremierServices_API_EXT/api/login/authenticateEncoded",
  urlVp: "https://api.premiercredit.co:11444/premierservices_api_ext/api/viabilizacion/getViabilizacionModular",

  /* Credentials */
  userpass: "dgBvAGwAawBzAHcAYQBnAGUAbgA6AHYAMABsAGsAcwB3ADQAZwAzAG4A",
  respuesta: {}
};
