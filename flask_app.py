from flask import Flask, render_template
from flask import request
from flask_cors import CORS
import json, collections
from datetime import datetime
from pytz import timezone
from pprint import pprint

app = Flask(__name__)
CORS(app)

progress_file_path = "./progress.json"
# progress_file_path = "/home/trackmyprogress/mysite/progress.json"

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def landing_page(path):
    return render_template("index.html")
    
@app.route('/loadProgress', methods=["POST"])
def load_data():
    username = request.json.get("username")
    print("Username trying to login: ", username)
    if username == "":
        return json.dumps({"message": "username doesnt exist. please /login again."})
    with open(progress_file_path,"r") as f:
        data = f.read()
    data = json.loads(data, object_pairs_hook=collections.OrderedDict)
    pprint(data)
    user_data = collections.OrderedDict()
    for date_i, date_c in data.items():
        found_user = False
        for user_i in date_c:
            if user_i == username:
                user_data[date_i] = date_c[username]
                found_user = True
        if not found_user:
                user_data[date_i] = {"points": 0, "info": ""}
    print("aa")
    pprint(user_data)
    return json.dumps({"message": "success", "progress_data": user_data})

@app.route('/updateProgress', methods=["POST"])
def update_data():
    username = request.json.get("username")
    points = request.json.get("points")
    info = request.json.get("info")
    if username == "":
        return json.dumps({"message": "username doesnt exist. please /login again."})
    today = get_current_date()
    with open(progress_file_path,"r") as f:
        data = f.read()
    data = json.loads(data, object_pairs_hook=collections.OrderedDict)
    pprint(data)
    try: 
        data[today]
    except KeyError:
        data[today] = {}
    data[today][username] = {"points": float(points), "info": info}
    pprint(data)
    with open(progress_file_path,"w") as f:
        json.dump(data, f)
    return json.dumps({"message": "update successful"})

def get_current_date():
    fmt = "%d-%m-%Y"
    now_ist = datetime.now(timezone('Asia/Calcutta'))
    return now_ist.strftime(fmt)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
