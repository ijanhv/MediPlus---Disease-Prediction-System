import numpy as np
import pandas as pd
import joblib

model = joblib.load("lgbmclf_model copy.sav")
scalar = joblib.load("scalar copy.sav")

variables = ['age', 'sex', 'cigsPerDay', 'BPMeds', 'prevalentStroke',
             'prevalentHyp', 'diabetes', 'totChol', 'sysBP', 'BMI', 
             'heartRate', 'glucose']

def preprocess_data(d):
    data = []
    bool_vars = ['BPMeds', 'prevalentStroke','prevalentHyp', 'diabetes']
    for var in variables:
        if var == 'sex':
            if d[var] == 'M':
                data.append(1)
            else:
                data.append(0)
        
        elif var in bool_vars:
            if d[var] == 'Yes':
                data.append(1)
            else:
                data.append(0)
        else:
            data.append(d[var])

    data = np.array(data).reshape(1, -1)
    df = pd.DataFrame(data, columns=variables)
    
    return df

def make_prediction(d):
    data = preprocess_data(d)
    scaled_data = scalar.transform(data)
    prediction = model.predict(scaled_data)
    return int(prediction[0])

