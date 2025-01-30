from flask import Flask, render_template

app = Flask(__name__)

# Home Page (Index)
@app.route("/")
def home():
    return render_template("index.html")

# Login Page
@app.route("/login")
def login():
    return render_template("Login.html")

# Register Page
@app.route("/register")
def register():
    return render_template("Register.html")

# Admin Page (New)
@app.route("/admin")
def admin():
    return render_template("admin.html")

if __name__ == "__main__":
    app.run(debug=True, port=8000)
