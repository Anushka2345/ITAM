# IT Asset Management Tool

#### Running the service
* Clone the repository
* To run the app make sure the requirements are installed.
```
cd itam-service
pip install -r requirements.txt
```
We will be relocating to the directory and exporting the flask app.
```
cd ../
export FLASK_APP=Review-Bay  # GNU/LINUX
set FLASK_APP=Review-Bay # Windows
```
Finally we are all set to run this
```
flask run
```
The application can be accessed on your local host server.

#### Running the web-app
```
cd itam-ui
npm i
npm start
```
To serve static js
```
npm run build
```
