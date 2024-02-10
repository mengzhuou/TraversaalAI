from flask import Flask, request, jsonify
from google.generativeai import genai
import os

app = Flask(__name__)

with open("C:\\Users\\xiche\\OneDrive\\Desktop\\projects\\TraversaalAI\\teaversalai\\public\\secret_key.txt", "r") as file:
    API_KEY = file.read().strip()

genai.configure(api_key=API_KEY)

@app.route('/generate', methods=['POST'])
def generate_content():
    prompt = request.json.get('prompt')

    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content(prompt)

    return jsonify({"response": response.text})
