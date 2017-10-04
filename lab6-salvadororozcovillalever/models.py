from protorpc import remote #web service 
from endpoints_proto_datastore.ndb import EndpointsModel 
from google.appengine.ext import ndb # Import the NDB (Google's No SQL database)
#import endpoints

class CustomBaseModel(EndpointsModel):
    def populate(self, data):
        super(self.__class__, self).__init__()
        for attr in self._message_fields_schema:
            if hasattr(data, attr):
                setattr(self, attr, getattr(data, attr))

#####USUARIOS#########
class Usuarios(CustomBaseModel): #Equivalente al 'Create Table'
    _message_fields_schema = ('email', 'password', 'nickname', 'age', 'photourl')
    email = ndb.StringProperty()
    password = ndb.StringProperty()
    nickname = ndb.StringProperty()
    age = ndb.StringProperty()
    photourl = ndb.StringProperty()

#####TWEETS#########
class Tweets(CustomBaseModel):
    _message_fields_schema = ('usuario', 'tweet')
    usuario = ndb.StringProperty()
    tweet = ndb.StringProperty()