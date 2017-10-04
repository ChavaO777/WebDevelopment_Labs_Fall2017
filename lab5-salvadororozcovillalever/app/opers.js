function Message()
{
  this.code = 0;
  this.message = '';
  this.value = 0;
};

function getCilindro(jsonCilindro)
{
  try
  {
    objCilindro = JSON.parse(jsonCilindro);
    var altura = Number(objCilindro.altura);
    var radio = Number(objCilindro.radio);

    var volumen = altura*(Math.PI*(radio*radio));

    var myMessage = new Message();
    myMessage.code = 1;
    myMessage.message = "operacion exitosa";
    myMessage.value = volumen;

    var resultJSON = JSON.stringify(myMessage);
       
    return resultJSON;
  }
  catch(error)
  {
     
    var myMessage = new Message();
    myMessage.code = -1;
    myMessage.message = error;
    myMessage.value = 0;
    var resultJSON = JSON.stringify(myMessage);
   
    return resultJSON;
  }
}

function getCubo(jsonCubo)
{
  try
  {
    objCubo = JSON.parse(jsonCubo);
    var lado = Number(objCubo.lado);

    var volumen = (+lado)*(+lado)*(+lado);
    
    var myMessage = new Message();
    myMessage.code = 1;
    myMessage.message = "operacion exitosa";
    myMessage.value = volumen;

    var resultJSON = JSON.stringify(myMessage);
       
    return resultJSON;
  }
  catch(error)
  {
    var myMessage = new Message();
    myMessage.code = -1;
    myMessage.message = error;
    myMessage.value = 0;
    var resultJSON = JSON.stringify(myMessage);
   
    return resultJSON;
  }
}

function getEinstein(jsonEinstein)
{
  try
  {
    objEinstein = JSON.parse(jsonEinstein);
    var masa = Number(objEinstein.masa);
    var velocidad = Number(objEinstein.velocidad);

    var energia = masa*velocidad*velocidad;

    var myMessage = new Message();
    myMessage.code = 1;
    myMessage.message = "operacion exitosa";
    myMessage.value = energia;

    var resultJSON = JSON.stringify(myMessage);
       
    return resultJSON;
  }
  catch(error)
  {
    var myMessage = new Message();
    myMessage.code = -1;
    myMessage.message = error;
    myMessage.value = 0;
    var resultJSON = JSON.stringify(myMessage);
   
    return resultJSON;
  }
}

function getEsfera(jsonEsfera)
{
  try
  {
    objEsfera = JSON.parse(jsonEsfera);
    var radio = Number(objEsfera.radio);

    var volumen = (4.0/3.0)*(radio*radio*radio)*Math.PI;
    
    var myMessage = new Message();
    myMessage.code = 1;
    myMessage.message = "operacion exitosa";
    myMessage.value = volumen;

    var resultJSON = JSON.stringify(myMessage);
       
    return resultJSON;
  }
  catch(error)
  {
    var myMessage = new Message();
    myMessage.code = -1;
    myMessage.message = error;
    myMessage.value = 0;
    var resultJSON = JSON.stringify(myMessage);
   
    return resultJSON;
  }
}

function getFuerza(jsonFuerza)
{
  try
  {
    objFuerza = JSON.parse(jsonFuerza);
    var masa = Number(objFuerza.masa);
    var aceleracion = Number(objFuerza.aceleracion);

    var fuerza = masa*aceleracion
    
    var myMessage = new Message();
    myMessage.code = 1;
    myMessage.message = "operacion exitosa";
    myMessage.value = fuerza;

    var resultJSON = JSON.stringify(myMessage);
       
    return resultJSON;
  }
  catch(error)
  {
    var myMessage = new Message();
    myMessage.code = -1;
    myMessage.message = error;
    myMessage.value = 0;
    var resultJSON = JSON.stringify(myMessage);
   
    return resultJSON;
  }
}

function getPiramide(jsonPiramide)
{
  try
  {
    objPiramide = JSON.parse(jsonPiramide);
    var altura = Number(objPiramide.altura);
    var radio = Number(objPiramide.radio);

    var volumen = altura*(Math.PI*(radio*radio))/3.0;

    var myMessage = new Message();
    myMessage.code = 1;
    myMessage.message = "operacion exitosa";
    myMessage.value = volumen;

    var resultJSON = JSON.stringify(myMessage);
       
    return resultJSON;
  }
  catch(error)
  {
    var myMessage = new Message();
    myMessage.code = -1;
    myMessage.message = error;
    myMessage.value = 0;
    var resultJSON = JSON.stringify(myMessage);
   
    return resultJSON;
  }
}

function getPitagoras(jsonPitagoras)
{
  try
  {
    objPitagoras = JSON.parse(jsonPitagoras);
    var a = Number(objPitagoras.a);
    var b = Number(objPitagoras.b);

    var c = Math.sqrt(a*a + b*b);

    var myMessage = new Message();
    myMessage.code = 1;
    myMessage.message = "operacion exitosa";
    myMessage.value = c;

    var resultJSON = JSON.stringify(myMessage);
       
    return resultJSON;
  }
  catch(error)
  {
    var myMessage = new Message();
    myMessage.code = -1;
    myMessage.message = error;
    myMessage.value = 0;
    var resultJSON = JSON.stringify(myMessage);
   
    return resultJSON;
  }
}

function getSum(jsonSuma)
{
  try
  {
    objSuma = JSON.parse(jsonSuma);
    var x = Number(objSuma.x);
    var y = Number(objSuma.y);
    
    var z = x + y;

    var myMessage = new Message();
    myMessage.code = 1;
    myMessage.message = "operacion exitosa";
    myMessage.value = z;
    
    var resultJSON = JSON.stringify(myMessage);
     
    return resultJSON;
  }
  catch(error)
  {
    var myMessage = new Message();
    myMessage.code = -1;
    myMessage.message = error;
    myMessage.value = 0;
    var resultJSON = JSON.stringify(myMessage);
   
    return resultJSON;
  }
}

function getTrapecio(jsonTrapecio)
{
  try
  {
    objTrapecio = JSON.parse(jsonTrapecio);
    var altura = Number(objTrapecio.altura);
    var basemayor = Number(objTrapecio.basemayor);
    var basemenor = Number(objTrapecio.basemenor);

    var area = (altura*(+basemenor + +basemayor))/2.0;
  
    var myMessage = new Message();
    myMessage.code = 1;
    myMessage.message = "operacion exitosa";
    myMessage.value = area;

    var resultJSON = JSON.stringify(myMessage);
       
    return resultJSON;
  }
  catch(error)
  {
    var myMessage = new Message();
    myMessage.code = -1;
    myMessage.message = error;
    myMessage.value = 0;
    var resultJSON = JSON.stringify(myMessage);
   
    return resultJSON;
  }
}

function getTriangulo(jsonTriangulo)
{
  try
  {
    objTriangulo = JSON.parse(jsonTriangulo);
    var base = Number(objTriangulo.base);
    var altura = Number(objTriangulo.altura);

    var area = parseInt(base)*parseInt(altura)/2.0;
    
    var myMessage = new Message();
    myMessage.code = 1;
    myMessage.message = "operacion exitosa";
    myMessage.value = area;

    var resultJSON = JSON.stringify(myMessage);
       
    return resultJSON;
  }
  catch(error)
  {
    var myMessage = new Message();
    myMessage.code = -1;
    myMessage.message = error;
    myMessage.value = 0;
    var resultJSON = JSON.stringify(myMessage);
   
    return resultJSON;
  }
}

function getVelocidad(jsonVelocidad)
{
  try{
    
    objVelocidad = JSON.parse(jsonVelocidad);
    var distancia = Number(objVelocidad.distancia);
    var tiempo = Number(objVelocidad.tiempo);

    var velocidad = distancia/tiempo;

    var myMessage = new Message();
    myMessage.code = 1;
    myMessage.message = "operacion exitosa";
    myMessage.value = velocidad;

    var resultJSON = JSON.stringify(myMessage);
       
    return resultJSON;
  }
  catch(error)
  {
    var myMessage = new Message();
    myMessage.code = -1;
    myMessage.message = error;
    myMessage.value = 0;
    var resultJSON = JSON.stringify(myMessage);
   
    return resultJSON;
  }
}