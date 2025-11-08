from flask import Flask, request, jsonify, send_from_directory
import os

app = Flask(__name__)

# Serve the simple frontend directly from the existing frontend directory
FRONTEND_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'frontend')

@app.route('/')
def index():
    return send_from_directory(FRONTEND_DIR, 'index.html')

@app.route('/styles.css')
def styles():
    return send_from_directory(FRONTEND_DIR, 'styles.css')

@app.route('/script.js')
def script():
    return send_from_directory(FRONTEND_DIR, 'script.js')

# API endpoint to reverse the input string
@app.route('/api/reverse', methods=['POST'])
def reverse_string():
    data = request.get_json()
    if not data or 'input' not in data:
        return jsonify({'error': 'Input is required'}), 400

    input_text = data['input']
    reversed_text = input_text[::-1]
    return jsonify({'reversed': reversed_text})

if __name__ == '__main__':
    # Use a different port than previous setup
    app.run(host='0.0.0.0', port=5050)