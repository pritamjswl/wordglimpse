from flask import Flask, render_template


app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", activetab="Home")

@app.route("/recent")
def recent():
    return render_template("recent.html", activetab="Recent")

@app.route("/saved")
def saved():
    return render_template("saved.html", activetab="Saved")

@app.route("/account")
def account():
    return render_template("account.html", activetab="Account")



if __name__ == "__main__":
    app.run(debug=True)