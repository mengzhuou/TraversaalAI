from flask import Flask, request, jsonify
import google.generativeai
import os
from search import get_context

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
    answers = get_context(prompt)
    context = "\n".join(answers)

    prompt_template = f"Answer this user query: {prompt} using the following context \
                        which contains hotels with location, rating, price, reviews and descriptions: \n \
                        {context}"

    model = google.generativeai.GenerativeModel('gemini-pro')
    response = model.generate_content(prompt_template)

    return jsonify({"response": response.text})

if __name__ == "__main__":
    app.run(debug=True)
