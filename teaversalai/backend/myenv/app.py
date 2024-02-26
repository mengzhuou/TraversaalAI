from flask import Flask, request, jsonify
import google.generativeai
import os

app = Flask(__name__)

@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type,Authorization'
    response.headers['Access-Control-Allow-Methods'] = 'GET,POST,PUT,DELETE,OPTIONS'
    response.headers['Access-Control-Allow-Credentials'] = 'true'
    return response

API_KEY = "AIzaSyB1-vbgeplUQy0AhaZKlDj2LTlFs5aBXuc"

google.generativeai.configure(api_key=API_KEY)

@app.route('/generate', methods=['POST'])
def generate_content():
    prompt = request.json.get('prompt')
    

    model = google.generativeai.GenerativeModel('gemini-pro')
    response = model.generate_content(prompt)

    return jsonify({"response": response.text})

if __name__ == "__main__":
    app.run(debug=True)
