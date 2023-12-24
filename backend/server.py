from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

job_submissions = set()

@app.route('/', methods=['POST'])
def add_submission():
    data = request.get_json()
    print(f"Received data: {data}")
    return jsonify({"message": "Data received successfully"})

if __name__ == '__main__':
    app.run(host='localhost', port=5173, debug=True)