from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/search", methods=["GET"])
def search():
    return render_template("search.html", contenttab=True)

@app.route("/profile")
def profile():
    return render_template("profile.html", contenttab=True)
