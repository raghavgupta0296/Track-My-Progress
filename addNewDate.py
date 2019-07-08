import json
from flask_app import get_current_date

with open("progress.json","r") as f:
    data = f.read()
data = json.loads(data)

today = get_current_date()
try: 
    data[today]
except KeyError:
    data[today] = {}
    with open("progress.json","w") as f:
            json.dump(data, f)
