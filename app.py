from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

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
    return render_template("/manage-posts.html", contenttab=True)

@app.errorhandler(404)
def page_not_found(e):
    return "The page you are looking for does not exist.", 404

