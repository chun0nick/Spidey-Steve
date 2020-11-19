from flask import Flask
from flask_cors import CORS
import pandas as pd

apps = pd.read_excel("app.xlsx")
apps["Image_Box"] = apps["Image_Box"].astype(str).apply(lambda x: x[:-2])

apps["Appearance"] = apps["Appearance"].astype(str).apply(lambda x: x if len(x) < 80 else x[:78] + "..." )

apps["Image_URL"] = "assets/" + "Box" + apps["Image_Box"] + "/" + apps["Image_File_Name"].astype(str)

apps.drop(columns=['Image_Box', 'Image_File_Name'])

app = Flask(__name__)
CORS(app)

@app.route('/appearances/', methods=['GET'])
def appearances():
   return apps.to_json(orient='records')

if __name__ == '__main__':
   app.run()
