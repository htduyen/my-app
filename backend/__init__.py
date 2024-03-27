from flask import Flask
from flask_cors import CORS
from config import Config

app = Flask(__name__, template_folder='../frontend/templates')
CORS(app)
app.config.from_object(Config)

from backend import routes