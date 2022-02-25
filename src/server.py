from flask import Flask, request, abort
import json

app = Flask(__name__)

@app.route('/plant-webhook', methods=['POST'])
def webhook():
    if request.method == 'POST':
        print(f"request received {request.json}")
        data = json.dumps(request.json, indent = 4) 
        f = open("plantinfo.json", "a")
        f.write(data)
        f.close()
        return 'success', 200
    else:
        abort(400)

if __name__ == '__main__':
    app.run()

    # a_file = open("src/data.json", "r")
    # json_object = json.load(a_file)