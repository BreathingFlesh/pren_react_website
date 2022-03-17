from flask import Flask, request, abort
import json
from waitress import serve

app = Flask(__name__)
plantdata = []
firstplant = True

@app.route('/plant-webhook', methods=['POST'])
def webhook():
    if request.method == 'POST':
        global firstplant 
        if firstplant:
            firstplant = False
            data = f"export const plantData = {json.dumps(request.json)};"
            f = open("src/Components/Data/PlantData.js", "w")
        else:
            plantdata.append(request.json)
            data = f"export const plantData = {json.dumps(plantdata)};"
            f = open("src/Components/Data/PlantsData.js", "w")
        f.write(data)
        f.close()
        return 'success', 200
    else:
        abort(400)

if __name__ == '__main__':
    app.run()
    # serve(app, host="127.0.0.1", port=8080)