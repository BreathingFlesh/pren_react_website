from flask import Flask, request, abort
import json
from waitress import serve

app = Flask(__name__)
plantdata = []
status = []
# statusFile = open("src/Components/Data/StatusData.js", "w")

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
        
        if request.json["name"] == "Zeit bei Start":
            plantdata = []
            status = []
            writePlantData(data)

        status.append(request.json)
        data = f"export const statusData = {json.dumps(status)};"
        statusFile.write(data)

        if request.json["name"] == "Zeit bei Ziel":
            # Zit is Dictionary ond denn is File schribe
            statusFile.close()
        
        return 'success', 200
    else:
        abort(400)

if __name__ == '__main__':
    app.run()
    # serve(app, host="127.0.0.1", port=8080)
