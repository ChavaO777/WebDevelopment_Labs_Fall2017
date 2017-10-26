import webapp2
from google.appengine.api import users
from google.appengine.ext import ndb
from google.appengine.api import app_identity
from google.appengine.api import images
from google.appengine.ext import blobstore
import cloudstorage
import mimetypes
import json
import os
import jinja2

from models import Empresa, Usuarios, Property
from models import Tweet

jinja_env = jinja2.Environment(
 loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))


class DemoClass(object):
 pass

def MyClass(obj):
 return obj.__dict__


class GetTweetsHandler(webapp2.RequestHandler):

    def get(self):
        self.response.headers.add_header('Access-Control-Allow-Origin', '*')
        self.response.headers['Content-Type'] = 'application/json'

        id_empresa = self.request.get('empresa')
        objemp = Empresa.query(Empresa.codigo_empresa == id_empresa).get()
        strKey = objemp.key.urlsafe() 
        myEmpKey = ndb.Key(urlsafe=strKey) 
        myTweets = Tweet.query(Tweet.empresa_key == myEmpKey)

        myList = []
        for i in myTweets:
            myObj = DemoClass()
            myObj.title = i.title
            myObj.description = i.description
            myObj.urlImage = i.urlImage
            myList.append(myObj)
        
        json_string = json.dumps(myList, default=MyClass)
        self.response.write(json_string)

###########################################################################     

class UpHandler(webapp2.RequestHandler):
    def _get_urls_for(self, file_name):
        
     bucket_name = app_identity.get_default_gcs_bucket_name()
     path = os.path.join('/', bucket_name, file_name)
     real_path = '/gs' + path
     key = blobstore.create_gs_key(real_path)
     try:
      url = images.get_serving_url(key, size=0)
     except images.TransformationError, images.NotImageError:
      url = "http://storage.googleapis.com{}".format(path)

     return url


    def post(self):
     self.response.headers.add_header('Access-Control-Allow-Origin', '*')
     self.response.headers['Content-Type'] = 'application/json'

     bucket_name = app_identity.get_default_gcs_bucket_name()
     uploaded_file = self.request.POST.get('uploaded_file')
     file_name = getattr(uploaded_file, 'filename', None)
     file_content = getattr(uploaded_file, 'file', None)
     real_path = ''

     if file_name and file_content:
      content_t = mimetypes.guess_type(file_name)[0]
      real_path = os.path.join('/', bucket_name, file_name)

      with cloudstorage.open(real_path, 'w', content_type=content_t,
       options={'x-goog-acl': 'public-read'}) as f:
       f.write(file_content.read())

      key = self._get_urls_for(file_name)
      self.response.write(key)


class LoginHandler(webapp2.RequestHandler):

   def get(self):

    template_context = {}
    self.response.out.write(
      self._render_template('login-register.html', template_context))

   def _render_template(self, template_name, context=None):
    if context is None:
     context = {}

    template = jinja_env.get_template(template_name)
    return template.render(context)


class TweetHandler(webapp2.RequestHandler):

   def get(self):

    template_context = {}
    self.response.out.write(
      self._render_template('tweet.html', template_context))

   def _render_template(self, template_name, context=None):
    if context is None:
     context = {}

    template = jinja_env.get_template(template_name)
    return template.render(context)


class MainHandler(webapp2.RequestHandler):

   def get(self):

    template_context = {}
    self.response.out.write(
      self._render_template('index.html', template_context))


   def _render_template(self, template_name, context=None):
    if context is None:
     context = {}

    template = jinja_env.get_template(template_name)
    return template.render(context)

class GetHome1Handler(webapp2.RequestHandler):

   def get(self):

    template_context = {}
    self.response.out.write(
      self._render_template('index.html', template_context))


   def _render_template(self, template_name, context=None):
    if context is None:
     context = {}

    template = jinja_env.get_template(template_name)
    return template.render(context)

class GetHome2Handler(webapp2.RequestHandler):

   def get(self):

    template_context = {}
    self.response.out.write(
      self._render_template('index-2.html', template_context))


   def _render_template(self, template_name, context=None):
    if context is None:
     context = {}

    template = jinja_env.get_template(template_name)
    return template.render(context)

class GetHome3Handler(webapp2.RequestHandler):

   def get(self):

    template_context = {}
    self.response.out.write(
      self._render_template('index-3.html', template_context))


   def _render_template(self, template_name, context=None):
    if context is None:
     context = {}

    template = jinja_env.get_template(template_name)
    return template.render(context)

class GetHome4Handler(webapp2.RequestHandler):

   def get(self):

    template_context = {}
    self.response.out.write(
      self._render_template('index-4.html', template_context))


   def _render_template(self, template_name, context=None):
    if context is None:
     context = {}

    template = jinja_env.get_template(template_name)
    return template.render(context)

class MyPropertiesHandler(webapp2.RequestHandler):

   def get(self):

    template_context = {}
    self.response.out.write(
      self._render_template('my-properties.html', template_context))


   def _render_template(self, template_name, context=None):
    if context is None:
     context = {}

    template = jinja_env.get_template(template_name)
    return template.render(context) 

class SubmitPropertyHandler(webapp2.RequestHandler):

   def get(self):

    template_context = {}
    self.response.out.write(
      self._render_template('submit-property.html', template_context))


   def _render_template(self, template_name, context=None):
    if context is None:
     context = {}

    template = jinja_env.get_template(template_name)
    return template.render(context) 

class AddPropertyHandler(webapp2.RequestHandler):

    def post(self):

        self.response.headers.add_header('Access-Control-Allow-Origin ', '*') ##Query from any client ("firewall" to allow crossdomain)
        self.response.headers['Content-Type'] = 'application/json'
        c = ModelClass()
        
        try:
            myTitle = self.request.get('title')
            myStatus = self.request.get('status')
            myPrice = self.request.get('price')
            myAddress = self.request.get('address')
            myCity = self.request.get('city')
            myState = self.request.get('state')
            myCountry = self.request.get('country')
            myZipCode = self.request.get('zipcode')
            myRooms = self.request.get('rooms')
            myBathrooms = self.request.get('bathrooms')
            myPropertyType = self.request.get('propertyType')
            myYearBuilt = self.request.get('yearBuilt')
            myArea = self.request.get('area')
            myPhotoUrl = self.request.get('photourl')
            myDescription = self.request.get('description')

            myNewProperty = Property(title = myTitle,
                                    status = myStatus,
                                    price = myPrice,
                                    address = myAddress,
                                    city = myCity,
                                    state = myState,
                                    country = myCountry,
                                    zipcode = myZipCode,
                                    rooms = myRooms,
                                    bathrooms = myBathrooms,
                                    propertyType = myPropertyType,
                                    yearBuilt = myYearBuilt,
                                    area = myArea,
                                    photourl = myPhotoUrl,
                                    description = myDescription)
                                    
            myPropertyKey = myNewProperty.put()
            
            c.message = "inserted"
            c.key = myPropertyKey.urlsafe()
            
        except:
             c.message = "Exception ..."
             
        json_string = json.dumps(c, default=ObjectClass)
        self.response.write(json_string)

class GetMyPropertiesHandler(webapp2.RequestHandler):

    def get(self):
        self.response.headers.add_header('Access-Control-Allow-Origin', '*')
        self.response.headers['Content-Type'] = 'application/json'

        user_email = self.request.get('user_email')
        userObject = Usuarios.query(Usuarios.email == user_email).get()
        strKey = userObject.key.urlsafe()
        myUserKey = ndb.Key(urlsafe=strKey)
        myProperties = Property.query(Property.usuario_key == myUserKey)

        myList = []
        for i in myProperties:
            myObj = DemoClass()
            myObj.title = i.title
            myObj.photourl = i.photourl
            myObj.price = i.price
            myObj.address = i.address
            myList.append(myObj)
       
        json_string = json.dumps(myList, default=MyClass)
        self.response.write(json_string)

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/login', LoginHandler),
    ('/tweets', TweetHandler),
    ('/up', UpHandler),
    ('/gettweets', GetTweetsHandler),
    #################################
    ('/home1', GetHome1Handler),
    ('/home2', GetHome2Handler),
    ('/home3', GetHome3Handler),
    ('/home4', GetHome4Handler),
    ################################
    ('/myProperties', MyPropertiesHandler),
    ('/submitProperty', SubmitPropertyHandler),
    ('/addProperty', AddPropertyHandler),
    ('/getMyProperties', GetMyPropertiesHandler)
], debug = True)
