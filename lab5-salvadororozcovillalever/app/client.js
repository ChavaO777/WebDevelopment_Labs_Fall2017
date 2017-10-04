function Cilindro()
{
  this.altura = 0;
  this.radio = 0;
}

function cilindro()
{
  try{

    var val_altura = $('#cilindro_altura').val();
    var val_radio = $('#cilindro_radio').val();

    var myCilindro = new Cilindro();
    myCilindro.altura = val_altura;
    myCilindro.radio = val_radio;

    var cilindroJSON = JSON.stringify(myCilindro);
    alert(cilindroJSON);

    var jsonResult = getCilindro(cilindroJSON);

    objResult = JSON.parse(jsonResult);

    $('#cilindro_volumen').val(objResult.value);

    alert("codigo " + objResult.code + " : " + objResult.message + " Valor: " + objResult.value);
  }
  catch(error)
  {
    alert(error);
  }
}

function Cubo(){

  this.lado = 0;
}

function cubo(){

  try{

    var val_lado = $('#cubo_lado').val();

    var myCubo = new Cubo();
    myCubo.lado = val_lado;

    var cuboJSON = JSON.stringify(myCubo);
    alert(cuboJSON);

    var jsonResult = getCubo(cuboJSON);

    objResult = JSON.parse(jsonResult);

    $('#cubo_volumen').val(objResult.value);

    alert("codigo " + objResult.code + " : " + objResult.message + " Valor: " + objResult.value);
  }
  catch(error)
  {
    alert(error);
  }  
}

function Einstein(){

  this.masa = 0;
  this.velocidad = 0;
}

function einstein(){

  try{

    var val_masa = $('#einstein_masa').val();
    var val_velocidad = $('#einstein_velocidad').val();

    var myEinstein = new Einstein();
    myEinstein.masa = val_masa;
    myEinstein.velocidad = val_velocidad;

    var einsteinJSON = JSON.stringify(myEinstein);
    alert(einsteinJSON);

    var jsonResult = getEinstein(einsteinJSON);

    objResult = JSON.parse(jsonResult);

    $('#einstein_energia').val(objResult.value);

    alert("codigo " + objResult.code + " : " + objResult.message + " Valor: " + objResult.value);
  }
  catch(error)
  {
    alert(error);
  }  
}

function Esfera(){

  this.radio = 0;
}

function esfera(){

  try{

    var val_radio = $('#esfera_radio').val();

    var myEsfera = new Esfera();
    myEsfera.radio = val_radio;

    var esferaJSON = JSON.stringify(myEsfera);
    alert(esferaJSON);

    var jsonResult = getEsfera(esferaJSON);

    objResult = JSON.parse(jsonResult);

    $('#esfera_volumen').val(objResult.value);

    alert("codigo " + objResult.code + " : " + objResult.message + " Valor: " + objResult.value);
  }
  catch(error)
  {
    alert(error);
  }  
}

function Cuerpo(){

  this.masa = 0;
  this.aceleracion = 0;
}

function fuerza(){

  try{

    var val_masa = $('#cuerpo_masa').val();
    var val_aceleracion = $('#cuerpo_aceleracion').val();

    var myCuerpo = new Cuerpo();
    myCuerpo.masa = val_masa;
    myCuerpo.aceleracion = val_aceleracion;

    var fuerzaJSON = JSON.stringify(myCuerpo);
    alert(fuerzaJSON);

    var jsonResult = getFuerza(fuerzaJSON);

    objResult = JSON.parse(jsonResult);

    $('#cuerpo_fuerza').val(objResult.value);

    alert("codigo " + objResult.code + " : " + objResult.message + " Valor: " + objResult.value);
  }
  catch(error)
  {
    alert(error);
  }
}

function Piramide(){

  this.altura = 0;
  this.radio = 0;
}

function piramide(){

  try{

    var val_altura = $('#piramide_altura').val();
    var val_radio = $('#piramide_radio').val();

    var myPiramide = new Piramide();
    myPiramide.altura = val_altura;
    myPiramide.radio = val_radio;

    var piramideJSON = JSON.stringify(myPiramide);
    alert(piramideJSON);

    var jsonResult = getPiramide(piramideJSON);

    objResult = JSON.parse(jsonResult);

    $('#piramide_volumen').val(objResult.value);

    alert("codigo " + objResult.code + " : " + objResult.message + " Valor: " + objResult.value);
  }
  catch(error)
  {
    alert(error);
  }
}

function Pitagoras(){

  this.a = 0;
  this.b = 0;
}

function pitagoras(){

  try{

    var val_a = $('#pitagoras_a').val();
    var val_b = $('#pitagoras_b').val();

    var myPitagoras = new Pitagoras();
    myPitagoras.a = val_a;
    myPitagoras.b = val_b;

    var pitagorasJSON = JSON.stringify(myPitagoras);
    alert(pitagorasJSON);

    var jsonResult = getPitagoras(pitagorasJSON);

    objResult = JSON.parse(jsonResult);

    $('#pitagoras_c').val(objResult.value);

    alert("codigo " + objResult.code + " : " + objResult.message + " Valor: " + objResult.value);
  }
  catch(error)
  {
    alert(error);
  }
}

function Suma()
{
  this.x = 0;
  this.y = 0;
};

function sum()
{
  try
  {
    var val_x = $('#sum_x').val();
    var val_y = $('#sum_y').val();
    
    var mySuma = new Suma();
    mySuma.x = val_x;
    mySuma.y = val_y;
     
    var sumaJSON = JSON.stringify(mySuma);
    alert (sumaJSON);

    var jsonResult = getSum(sumaJSON);

    objResult = JSON.parse(jsonResult);
     
    $('#sum_z').val(objResult.value);

    alert ("codigo " + objResult.code + " : " + objResult.message + " Valor: " + objResult.value);
  }
  catch(error)
  {
    alert(error);
  }
}

function Trapecio(){

  this.altura = 0;
  this.basemayor = 0;
  this.basemenor = 0;
}

function trapecio(){

  try{

    var val_altura = $('#trapecio_altura').val();
    var val_basemayor = $('#trapecio_basemayor').val();
    var val_basemenor = $('#trapecio_basemenor').val();

    var myTrapecio = new Trapecio();
    myTrapecio.altura = val_altura;
    myTrapecio.basemayor = val_basemayor;
    myTrapecio.basemenor = val_basemenor;

    var trapecioJSON = JSON.stringify(myTrapecio);
    alert(trapecioJSON);

    var jsonResult = getTrapecio(trapecioJSON);

    objResult = JSON.parse(jsonResult);

    $('#trapecio_area').val(objResult.value);

    alert("codigo " + objResult.code + " : " + objResult.message + " Valor: " + objResult.value);
  }
  catch(error)
  {
    alert(error);
  }
}

function Triangulo(){

  this.base = 0;
  this.altura = 0;
}

function triangulo(){

  try{

    var val_base = $('#triangulo_base').val();
    var val_altura = $('#triangulo_altura').val();

    var myTriangulo = new Triangulo();
    myTriangulo.base = val_base;
    myTriangulo.altura = val_altura;

    var trianguloJSON = JSON.stringify(myTriangulo);
    alert(trianguloJSON);

    var jsonResult = getTriangulo(trianguloJSON);

    objResult = JSON.parse(jsonResult);

    $('#triangulo_area').val(objResult.value);

    alert("codigo " + objResult.code + " : " + objResult.message + " Valor: " + objResult.value);
  }
  catch(error)
  {
    alert(error);
  }
}

function Velocidad(){

  this.distancia = 0;
  this.tiempo = 0;
}

function velocidad(){

  try{

    var val_distancia = $('#velocidad_distancia').val();
    var val_tiempo = $('#velocidad_tiempo').val();

    var myVelocidad = new Velocidad();
    myVelocidad.distancia = val_distancia;
    myVelocidad.tiempo = val_tiempo;

    var velocidadJSON = JSON.stringify(myVelocidad);
    alert(velocidadJSON);

    var jsonResult = getVelocidad(velocidadJSON);

    objResult = JSON.parse(jsonResult);

    $('#velocidad_velocidad').val(objResult.value);

    alert("codigo " + objResult.code + " : " + objResult.message + " Valor: " + objResult.value);
  }
  catch(error)
  {
    alert(error);
  }
}