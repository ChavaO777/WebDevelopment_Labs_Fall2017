from protorpc import messages
from protorpc import message_types

class MessageNone(messages.Message):
    inti = messages.StringField(1)
# Input messages
#Recibe el token para validar
class Token(messages.Message):
    tokenint = messages.StringField(1, required=True)
    #entityKey = messages.StringField(2, required=False)
    #fromurl = messages.StringField(3)

#Recibe el token y un entityKey de cualquier base de datos para validar
class TokenKey(messages.Message):
    tokenint = messages.StringField(1, required=True)
    entityKey = messages.StringField(2, required=True)
    #fromurl = messages.StringField(3)

#Recibe el email y contrasena para la creacion de token
class EmailPasswordMessage(messages.Message):
    email = messages.StringField(1, required=True)
    password = messages.StringField(2, required=True)

# Output messages
#regresa un token
class TokenMessage(messages.Message):
    code = messages.IntegerField(1)
    message = messages.StringField(2)
    token = messages.StringField(3)

#regresa mensajes de lo ocurrido
class CodeMessage(messages.Message):
    code = messages.IntegerField(1)
    message = messages.StringField(2)

###########################
#### User
###########################
class UserInput(messages.Message):
    token = messages.StringField(1) 
    empresa_key = messages.StringField(2)
    email = messages.StringField(3)
    password = messages.StringField(4)

class UserUpdate(messages.Message):
    token = messages.StringField(1)
    email = messages.StringField(2)
    password = messages.StringField(3)
    entityKey = messages.StringField(4, required=True)

class UserList(messages.Message):
    code = messages.IntegerField(1)
    data = messages.MessageField(UserUpdate, 2, repeated=True)

###########################
#### Empresa
###########################
#Mensaje de Entrada y Salida para la base de datos Empresa
class EmpresaInput(messages.Message):
    token = messages.StringField(1, required=True) 
    codigo_empresa = messages.StringField(2)
    nombre_empresa = messages.StringField(3)

class EmpresaUpdate(messages.Message):
    token = messages.StringField(1, required=True)
    entityKey = messages.StringField(2, required=True)
    codigo_empresa = messages.StringField(3)
    nombre_empresa = messages.StringField(4)

#regresa una lista para la base de datos Empresa
class EmpresaList(messages.Message):
    code = messages.IntegerField(1)
    data = messages.MessageField(EmpresaUpdate, 2, repeated=True)

###########################
#### Tweet
###########################
#Mensaje de Entrada y Salida para Tweets
class TweetInput(messages.Message):
    token = messages.StringField(1, required=True) 
    title = messages.StringField(2)
    description = messages.StringField(3)
    urlImage = messages.StringField(5)
    
class TweetUpdate(messages.Message):
    token = messages.StringField(1, required=True)
    entityKey = messages.StringField(2, required=True)
    title = messages.StringField(3)
    description = messages.StringField(4)
    urlImage = messages.StringField(5)

#regresa una lista para la base de datos Empresa
class TweetList(messages.Message):
    code = messages.IntegerField(1)
    data = messages.MessageField(TweetUpdate, 2, repeated=True)

###########################
#### Company
###########################
class CompanyInput(messages.Message):
    token = messages.StringField(1, required=True) 
    name = messages.StringField(2)
    address = messages.StringField(3)
    RFC = messages.StringField(4)
    photourl = messages.StringField(5)
    
class CompanyUpdate(messages.Message):
    token = messages.StringField(1, required=True)
    entityKey = messages.StringField(2, required=True)
    name = messages.StringField(3)
    address = messages.StringField(4)
    RFC = messages.StringField(5)
    photourl = messages.StringField(6)

#regresa una lista para la base de datos Company
class CompanyList(messages.Message):
    code = messages.IntegerField(1)
    data = messages.MessageField(CompanyUpdate, 2, repeated=True)

###########################
#### Property
###########################
class PropertyInput(messages.Message):
    token = messages.StringField(1, required=True) 
    title = messages.StringField(2)
    latitude = messages.StringField(3)
    longitude = messages.StringField(4)
    rooms = messages.StringField(5)
    bathrooms = messages.StringField(6)
    propertyType = messages.StringField(7)
    yearBuilt = messages.StringField(8)
    squareMeters = messages.StringField(9)
    state = messages.StringField(10)
    country = messages.StringField(11)
    photourl = messages.StringField(12)

class PropertyUpdate(messages.Message):
    token = messages.StringField(1, required=True)
    entityKey = messages.StringField(2, required=True)
    title = messages.StringField(3)
    latitude = messages.StringField(5)
    longitude = messages.StringField(6)
    rooms = messages.StringField(7)
    bathrooms = messages.StringField(8)
    propertyType = messages.StringField(9)
    yearBuilt = messages.StringField(10)
    squareMeters = messages.StringField(11)
    state = messages.StringField(12)
    country = messages.StringField(13)
    photourl = messages.StringField(14)

#regresa una lista para la base de datos Property
class PropertyList(messages.Message):
    code = messages.IntegerField(1)
    data = messages.MessageField(PropertyUpdate, 2, repeated=True)

###########################
#### Product
###########################
class ProductInput(messages.Message):

    token = messages.StringField(1, required=True) 
    code = messages.StringField(2)
    description = messages.StringField(3)
    urlImage = messages.StringField(5)

class ProductUpdate(messages.Message):
    token = messages.StringField(1, required=True)
    entityKey = messages.StringField(2, required=True)
    code = messages.StringField(3)
    description = messages.StringField(4)
    urlImage = messages.StringField(5)

#regresa una lista para la base de datos Product
class ProductList(messages.Message):
    code = messages.IntegerField(1)
    data = messages.MessageField(ProductUpdate, 2, repeated=True)
