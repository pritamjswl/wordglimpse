from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.errorhandler(404)
def page_not_found(e):
    return redirect(url_for('custom_404'))

@app.route('/custom-404')
def custom_404():
    return "The page you are looking for does not exist.", 404

