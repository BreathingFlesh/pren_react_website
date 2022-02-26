from flask import Flask, request, abort
import json

app = Flask(__name__)
plantdata = []

@app.route('/plant-webhook', methods=['POST'])
def webhook():
    if request.method == 'POST':
        # print(f"request received {request.json}")
        
        plantdata.append(request.json)
        # print(plantdata)

        data = f"export const plantData = {json.dumps(plantdata)};"

        f = open("src/Components/Data/PlantsData_test.js", "w")
        f.write(data)
        f.close()
        return 'success', 200
    else:
        abort(400)

if __name__ == '__main__':
    app.run()
