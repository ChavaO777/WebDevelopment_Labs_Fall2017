import webapp2
import os
import jinja2
import json
import sys
from google.appengine.ext import ndb
from models import Usuarios
from models import Tweets

from google.appengine.api import app_identity
import mimetypes
import cloudstorage
from google.appengine.ext import blobstore
from google.appengine.api import images

##usuarios ################
class ModelClass(object): ## Generic class without fields; we can add fields on the go as we need them56
 pass

def ObjectClass(obj):
 return obj.__dict__

###### tweets ######
## create

##read all

#############

class CreateUserHandler(webapp2.RequestHandler):
 	def post(self):
 		self.response.headers.add_header('Access-Control-Allow-Origin ', '*') ##Query from any client ("firewall" to allow crossdomain)
 		self.response.headers['Content-Type'] = 'application/json'
 		c = ModelClass()
 		
 		try:
 			myEmail = self.request.get('email')
 			myPassword = self.request.get('password')
 			myNickname = self.request.get('nickname')
 			myAge = self.request.get('age')
 			myPhotoUrl = self.request.get('photourl')

 			myNuevoUsuario = Usuarios(email = myEmail, 
 									  password = myPassword, 
 									  nickname = myNickname, 
 									  age = myAge, 
 									  photourl = myPhotoUrl)

 			myUsuarioKey = myNuevoUsuario.put()

 			c.message = "inserted"
 			c.key = myUsuarioKey.urlsafe()

 		except:
 			c.message = "Exception ..."

 		json_string = json.dumps(c, default=ObjectClass)
 		self.response.write(json_string)

class ReadAllUsersHandler(webapp2.RequestHandler):
	def get(self):
		self.response.headers.add_header('Access-Control-Allow-Origin ', '*') ##Query from any client ("firewall" to allow crossdomain)
 		self.response.headers['Content-Type'] = 'application/json'
 		myList = []
 		try:

 			listUsers = Usuarios.query().fetch()
 			
 			for i in listUsers:
 				c = ModelClass()
 				c.id = i.key.urlsafe()
 				c.email = i.email
 				c.password = i.password
 				c.nickname = i.nickname
 				c.age = i.age
 				c.photourl = i.photourl
 				myList.append(c)
 		except:
 			c = ModelClass()
 			c.message = "Exception..."
 			myList.append(c)

 		json_string = json.dumps(myList, default=ObjectClass)
 		self.response.write(json_string)

class ReadOneUserHandler(webapp2.RequestHandler):
	def get(self):
		self.response.headers.add_header('Access-Control-Allow-Origin ', '*') ##Query from any client ("firewall" to allow crossdomain)
 		self.response.headers['Content-Type'] = 'application/json'
 		c = ModelClass()
 		try:
 			userkey = self.request.get('key')
 			id_userkey = ndb.Key(urlsafe = userkey)
 			myUser = Usuarios.query(Usuarios.key == id_userkey).get()
 			c.key = userkey

 			if myUser is not None:
 				c.email = myUser.email
 				c.password = myUser.password
 				c.nickname = myUser.nickname
 				c.age = myUser.age
 				c.photourl = myUser.photourl
 			else:
 				c.message = "error: not found"
 		except:
 			c.message = "Exception..."
		
		json_string = json.dumps(c, default=ObjectClass)
 		self.response.write(json_string)

class UpdateUserHandler(webapp2.RequestHandler):
	def post(self):
		self.response.headers.add_header('Access-Control-Allow-Origin ', '*') ##Query from any client ("firewall" to allow crossdomain)
 		self.response.headers['Content-Type'] = 'application/json'
 		c = ModelClass()

 		try:
 			userkey = self.request.get('key')
 			myEmail = self.request.get('email')
 			myPassword = self.request.get('password')
 			myNickname = self.request.get('nickname')
 			myAge = self.request.get('age')
 			myPhotoUrl = self.request.get('photourl')

 			id_userkey = ndb.Key(urlsafe=userkey)
 			myUser = Usuarios.query(Usuarios.key == id_userkey).get()
 			c.key = userkey

 			if myUser is not None:
 				myUser.email = myEmail
 				myUser.password = myPassword
 				myUser.nickname = myNickname
 				myUser.age = myAge
 				myUser.photourl = myPhotoUrl
 				myUser.put()
 				c.message = "updated"
 			else:
 				c.message = "error: not found"

 		except:
 			c.message = "Exception..."

 		json_string = json.dumps(c, default=ObjectClass)
 		self.response.write(json_string)

class DeleteUserHandler(webapp2.RequestHandler): 
	def post(self):
		self.response.headers.add_header('Access-Control-Allow-Origin ', '*') ##Query from any client ("firewall" to allow crossdomain)
 		self.response.headers['Content-Type'] = 'application/json'
 		c = ModelClass()

 		try:
 			userkey = self.request.get('key') 
 			id_userkey = ndb.Key(urlsafe=userkey)
 			myUser = Usuarios.query(Usuarios.key == id_userkey).get()
 			c.key = userkey

 			if myUser is not None:
 				myUser.key.delete()
 				c.message = "deleted"
 			else:
 				c.message = "error: not found"

 		except:
 			c.message = "Exception..."

 		json_string = json.dumps(c, default=ObjectClass)
 		self.response.write(json_string)

########################################################################################################################

class CreateTweetHandler(webapp2.RequestHandler):
	def post(self):
		self.response.headers.add_header('Access-Control-Allow-Origin ', '*') 
 		self.response.headers['Content-Type'] = 'application/json'
 		c = ModelClass()

 		try:
 			myUser = self.request.get('usuario')
 			myTweet = self.request.get('tweet')

 			myNuevoTweet = Tweets(usuario = myUser, tweet = myTweet)
 			myTweetKey = myNuevoTweet.put()

 			c.message = "inserted"
 			c.key = myTweetKey.urlsafe()

 		except:
 			c.message = "Exception ..."

 		json_string = json.dumps(c, default=ObjectClass)
 		self.response.write(json_string)

class ReadAllTweetsHandler(webapp2.RequestHandler):
	def get(self):
		self.response.headers.add_header('Access-Control-Allow-Origin ', '*') ##Query from any client ("firewall" to allow crossdomain)
 		self.response.headers['Content-Type'] = 'application/json'
 		myList = []
 		try:
 			listTweets = Tweets.query().fetch()
 			
 			for i in listTweets:
 				c = ModelClass()
 				c.id = i.key.urlsafe()
 				c.usuario = i.usuario
 				c.tweet = i.tweet
 				myList.append(c)
 		except:
 			c = ModelClass()
 			c.message = "Exception..."
 			myList.append(c)

 		json_string = json.dumps(myList, default=ObjectClass)
 		self.response.write(json_string)

class ReadOneTweetHandler(webapp2.RequestHandler):
	def get(self):
		self.response.headers.add_header('Access-Control-Allow-Origin ', '*')
 		self.response.headers['Content-Type'] = 'application/json'
 		c = ModelClass()
 		try:
 			tweetkey = self.request.get('key')
 			id_tweetkey = ndb.Key(urlsafe = tweetkey)
 			myTweet = Tweets.query(Tweets.key == id_tweetkey).get()
 			c.key = tweetkey

 			if myTweet is not None:
 				c.usuario = myTweet.usuario
 				c.tweet = myTweet.tweet
 			else:
 				c.message = "error: not found"
 		except:
 			c.message = "Exception..."
		
		json_string = json.dumps(c, default=ObjectClass)
 		self.response.write(json_string)

class UpdateTweetHandler(webapp2.RequestHandler):
	def post(self):
		self.response.headers.add_header('Access-Control-Allow-Origin ', '*') ##Query from any client ("firewall" to allow crossdomain)
 		self.response.headers['Content-Type'] = 'application/json'
 		c = ModelClass()

 		try:
 			tweetkey = self.request.get('key')
 			myUser = self.request.get('usuario')
 			myTweetText = self.request.get('tweet')

 			id_tweetkey = ndb.Key(urlsafe=tweetkey)
 			myTweet = Tweets.query(Tweets.key == id_tweetkey).get()
 			c.key = tweetkey

 			if myTweet is not None:
 				myTweet.usuario = myUser
 				myTweet.tweet = myTweetText
 				myTweet.put()
 				c.message = "updated"
 			else:
 				c.message = "error: not found"

 		except:
 			c.message = "Exception..."

 		json_string = json.dumps(c, default=ObjectClass)
 		self.response.write(json_string)

class DeleteTweetHandler(webapp2.RequestHandler): 
	def post(self):
		self.response.headers.add_header('Access-Control-Allow-Origin ', '*') 
 		self.response.headers['Content-Type'] = 'application/json'
 		c = ModelClass()

 		try:
 			tweetkey = self.request.get('key') 
 			id_tweetkey = ndb.Key(urlsafe=tweetkey)
 			myTweet = Tweets.query(Tweets.key == id_tweetkey).get()
 			c.key = tweetkey

 			if myTweet is not None:
 				myTweet.key.delete()
 				c.message = "deleted"
 			else:
 				c.message = "error: not found"

 		except:
 			c.message = "Exception..."

 		json_string = json.dumps(c, default=ObjectClass)
 		self.response.write(json_string)

jinja_env = jinja2.Environment(
  loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))

class MainHandler(webapp2.RequestHandler):
  def get(self):
    template = jinja_env.get_template('index.html')
    template_context = {}
    self.response.out.write(template.render(template_context))

class MainUsersHandler(webapp2.RequestHandler):
  def get(self):
    template = jinja_env.get_template('usuarios.html')
    template_context = {}
    self.response.out.write(template.render(template_context))

class MainTweetsHandler(webapp2.RequestHandler):
  def get(self):
    template = jinja_env.get_template('tweets.html')
    template_context = {}
    self.response.out.write(template.render(template_context))

####################################################################################

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

app = webapp2.WSGIApplication([
	('/', MainHandler),
	('/home', MainHandler),
	('/usuarios', MainUsersHandler),
	('/tweets', MainTweetsHandler),
	########################################
 	('/createUser', CreateUserHandler),
 	('/readAllUsers', ReadAllUsersHandler),
 	('/readOneUser', ReadOneUserHandler),
 	('/updateUser', UpdateUserHandler),
	('/deleteUser', DeleteUserHandler),
	('/up', UpHandler),
	########################################
	('/createTweet', CreateTweetHandler),
	('/readAllTweets', ReadAllTweetsHandler),
	('/readOneTweet', ReadOneTweetHandler),
	('/updateTweet', UpdateTweetHandler),
	('/deleteTweet', DeleteTweetHandler)
	], debug=True)
