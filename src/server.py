from flask import Flask, request, abort, jsonify
import json
import flask_cors
from waitress import serve

cors = flask_cors.CORS()
app = Flask(__name__)
cors.init_app(app)

plantdata = []
status_start = [
    {
        'name': 'Gefahrene Meter',
        'value': '0 m'
    },
    {
        'name': 'Zeit bei Start',
        'value': '00:00:00'
    },
    {
        'name': 'Zeit bei Ziel',
        'value': '00:00:00'
    }
]
status = status_start.copy()


def writePlantData():
        data = f"export const plantData = {json.dumps(plantdata)};"
        plantFile = open("src/Components/Data/PlantData.js", "w")  
        plantFile.write(data)
        plantFile.close()

@app.route('/plant-webhook', methods=['POST'])
def plant_webhook():
    if request.method == 'POST':
        plantdata.append(request.json)
        matched = [i for i, plant in enumerate(plantdata) if plant["same_plant"]]
        if len(matched) > 0:
            plantdata[0]["position"] = matched[-1]
            plantdata[0]["same_plant"] = True
        
        writePlantData()
        return 'success', 200
    else:
        abort(400)

@app.route('/status-webhook', methods=['POST'])
def status_webhook():
    if request.method == 'POST':
        global plantdata
        global status
        statusFile = open("src/Components/Data/StatusData.js", "w")
        
        if request.json["name"] == "Gefahrene Meter":
            status[0] = request.json
            # data = f"export const statusData = {json.dumps(status)};"
            # statusFile.write(data)
        elif request.json["name"] == "Zeit bei Start":
            status = status_start.copy()
            plantdata = []
            writePlantData()
            status[1] = request.json
            data = f"export const statusData = {json.dumps(status)};"
            statusFile.write(data)
        elif request.json["name"] == "Zeit bei Ziel":
            status[2] = request.json
            data = f"export const statusData = {json.dumps(status)};"
            statusFile.write(data)
            statusFile.close()
        
        return 'success', 200
    else:
        abort(400)

@app.route('/clear-webhook', methods=['POST'])
def clear_webhook():
    if request.method == 'POST':
        plantdata = []
        writePlantData()
        status = status_start.copy()
        statusFile = open("src/Components/Data/StatusData.js", "w")
        data = f"export const statusData = {json.dumps(status)};"
        statusFile.write(data)
        statusFile.close()
        return 'success', 200
    else:
        abort(400)

@app.route('/status', methods=['GET'])
def status_json():
    response = jsonify(status)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/plants', methods=['GET'])
def status_json():
    response = jsonify(plantdata)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
    app.run()
    # serve(app, host="127.0.0.1", port=8080)
