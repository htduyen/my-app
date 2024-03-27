from backend import app
import time
from flask import render_template

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/hello')
def hello():
    return {'message': 'Hello from Flask!'}

@app.route('/home')
def home():
    return "This is the home page"

@app.route('/dashboard')
def dashboard():
    return "This is the dashboard page"

# @app.route('/hello')
# def hello():
#     return "htduyen"

@app.route('/api')
def api():
    return "htduyen api" 

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

# @app.route('/')
# @app.route('/index')
# def index():
#     user = {'username': 'htduyen'}
#     posts = [
#         {
#             'author': {'username': 'John'},
#             'body': 'Beautiful day in Portland!'
#         },
#         {
#             'author': {'username': 'Susan'},
#             'body': 'The Avengers movie was so cool!'
#         }
#     ]
#     return render_template('index.html', title='Home', user=user, posts=posts)