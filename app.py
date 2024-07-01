import os
from cs50 import SQL
from datetime import datetime
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session

from helpers import login_required

app = Flask(__name__)

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False 
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure cs50 library to use SQLite database
db = SQL("sqlite:///wg.db")

@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

@app.route("/")
def index():
    if session.get("user_id") is None:
        return render_template("index.html")
    return render_template("index.html", user_id=session["user_id"])

@app.route("/login", methods=["GET", "POST"])
def login():
    return render_template("login.html", auth=True)

@app.route("/signup", methods=["GET", "POST"])
def signup():
    return render_template("signup.html", auth=True)

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")

@app.route("/search")
def search():
    term = request.args.get("q")
    return render_template("search.html", term=term, contenttab=True)

@app.route("/profile")
def profile():
    return render_template("profile.html", contenttab=True)

@app.route("/profile/edit")
def edit_profile():
    return render_template("edit-profile.html", contenttab=True)

@app.route("/posts/manage")
def manage_posts():
    return render_template("manage-posts.html", contenttab=True)

@app.route("/followings")
def followings():
    return render_template("followings.html", contenttab=True)

@app.route("/account")
def account():
    return render_template("account.html", contenttab=True)

@app.errorhandler(404)
def page_not_found(e):
    return "The page you are looking for does not exist.", 404

