import openai
from flask import Flask, request, jsonify

app = Flask(__name__)

#TODO Key NOT working!!!
openai.api_key = "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"

@app.route('/search', methods=['POST'])
def search():
    query = request.json.get('query')
    response = openai.Completion.create(
        engine="GPT-3.5 Turbo",
        prompt=query,
        max_tokens=100
    )
    return jsonify({"response": response.choices[0].text})


