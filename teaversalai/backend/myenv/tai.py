import requests
from flask import Flask, render_template


def get_response(input_data):
    result = api_reply(input_data)
    data = result.get('data', 'No data found')
    # web_url = result.get('web_url', '#')
    # return render_template('display_data.html', data=data, web_url=web_url)
    return data


def api_reply(input_data):
    url = "https://api-ares.traversaal.ai/live/predict"
    payload = {
        "query": [input_data]}
    headers = {
        "x-api-key": "ares_3ed9f5cf5fbb2a26681dd4dbee831e00015561e8a6655598853d7cb3fd35f82f",
        "content-type": "application/json"
    }
    response = requests.post(url, json=payload, headers=headers)

    if response.status_code == 200:
        return response.json()
    else:
        return f"Error: {response.status_code}"
