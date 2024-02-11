from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai
import os
from search import get_context

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])

@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type,Authorization'
    response.headers['Access-Control-Allow-Methods'] = 'GET,POST,PUT,DELETE,OPTIONS'
    response.headers['Access-Control-Allow-Credentials'] = 'true'
    return response

API_KEY = "AIzaSyD6rA0prtcuBbGKOLpUjQ4ocdlOV33HZR8"

google.generativeai.configure(api_key=API_KEY)

# prev_response = []

@app.route('/generate', methods=['POST'])
def generate_content():
    prompt = request.json.get('prompt')
    answers, external_content = get_context(prompt)
    print(external_content)
    context = "\n".join(answers)

    prompt_template = f"Answer this user query: {prompt} using the following context which contains hotels with location, rating, price, reviews and descriptions: \n \
                        {context}. More details online: {external_content}."

    model = google.generativeai.GenerativeModel('gemini-pro')
    print(prompt_template)
    response = model.generate_content(prompt_template)
    # prev_response.append(response.text)

    return jsonify({"response": response.text})

if __name__ == "__main__":
    app.run(debug=True, port=5001)
