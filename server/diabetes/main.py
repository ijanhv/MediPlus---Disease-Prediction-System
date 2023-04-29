from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import json
import uvicorn

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

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

class model_input(BaseModel):
    pregnancies : int
    Glucose : int
    BloodPressure : int
    SkinThickness : int
    Insulin : int
    Bmi : float
    DiabetesPedigreeFunction : float
    Age : int       
        
# loading the saved model
diabetes_model = pickle.load(open('diabetes_model.sav', 'rb'))

@app.post('/diabetes_prediction')
def diabetes_predd(input_parameters : model_input):
    
    input_data = input_parameters.json()
    input_dictionary = json.loads(input_data)
    
    pregnancies = input_dictionary['pregnancies']
    Glucose = input_dictionary['Glucose']
    BloodPressue = input_dictionary['BloodPressure']
    SkinThickness = input_dictionary['SkinThickness']
    Insulin = input_dictionary['Insulin']
    Bmi = input_dictionary['Bmi']
    DiabetesPedigreeFunction = input_dictionary['DiabetesPedigreeFunction']
    Age = input_dictionary['Age']
    
    
    input_list = [pregnancies, Glucose, BloodPressue, SkinThickness, Insulin, Bmi, DiabetesPedigreeFunction, Age]
    
    prediction = diabetes_model.predict([input_list])
    
    if (prediction[0] == 0):
        return 'The person is not diabetic'
    else:
        return 'The person is diabetic'
    


if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8002)
