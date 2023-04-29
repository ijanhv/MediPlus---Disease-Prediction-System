from typing import Literal
from pydantic import BaseModel
from model import preprocess_data, make_prediction
import uvicorn
from fastapi.responses import JSONResponse

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


# app = FastAPI(middleware=[
#     Middleware(CORSMiddleware, allow_origins=["*"])
# ])


description = """
Fast API Deployment of Heart Disease Prediction Model!


## Inputs

To begin input the following variables:

* **age** : Age in number
* **sex** : 'M' or 'F'
* **cigsPerDay**: How many cigarettes do you smoke per day?
* **BPMeds** : Are you currently on any Blood Pressure Meds? (Yes / No)
* **prevalentStroke** : Did you have a prevalent stroke? (Yes / No)
* **prevalentHyp** : Do you have prevalent hypertension? (Yes / No)
* **diabetes** : Do you have diabetes? (Yes / No)
* **totChol** : What is your total cholestrol level?
* **sysBP** : What is your systolic blood pressure?
* **BMI** : What is your current Body Mass Index (BMI)?
* **heartRate** : What is your current heart rate?
* **glucose** : What is your current glucose level?

"""
app = FastAPI(title='Heart Disease Predictor', description=description)

origins = [
    "http://localhost/*",
    "http://localhost:3000",
    "http://localhost:3001",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



class Info(BaseModel):
    age: int
    sex: Literal["M", "F"]
    cigsPerDay: float
    BPMeds: Literal["Yes", "No"]
    prevalentStroke: Literal["Yes", "No"]
    prevalentHyp: Literal["Yes", "No"]
    diabetes: Literal["Yes", "No"]
    totChol: float
    sysBP: float
    BMI: float
    heartRate: float
    glucose: float





@app.get("/")
def index():
    return{"message": "Welcome to Heart Disease Predictor"}


@app.post("/predict", response_class=JSONResponse)
def predict(data: Info):
    data = data.dict()
    prediction = make_prediction(data)
    print(data)
    if prediction == 1:
        print(
            'You may have a risk of Coronary Heart Disease! Consult a doctor immediately!')
    else:
        print("You do not possess risk of Heart Disease!")

    return prediction


if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)
