# Ten Year Coronary Heart Disease (CHD) Prediction

## Project Description
This project aims to predict the likelihood of heart disease in patients based on various factors such as age, gender, blood pressure, cholesterol levels, and other medical parameters. The goal is to build a machine learning model that can accurately predict the probability of heart disease, which can be used as a diagnostic tool to aid healthcare professionals.

## Data Source
The dataset used in this project can be found in the given [link](https://drive.google.com/file/d/1cLHnV4i76jY4t5-dvZuXwntO5G3gYnJ0/view).
It contains the features:
* **age** : Age in number
* **sex** : 'M' or 'F'
* **cigsPerDay**: How many cigarettes do you smoke per day?
* **BPMeds** : Are you currently on any Blood Pressure Meds? (Yes / No)
* **prevalentStroke** : Did you have a prevalent stroke? (Yes / No)
* **prevalentHyp** : Do you have prevalent hypertension? (Yes / No)
* **diabetes** : Do you have diabetes? (Yes / No)
* **totChol** : What is your total cholestrol level?
* **BMI** : What is your current Body Mass Index (BMI)?
* **sysBP** : What is your systolic blood pressure?
* **heartRate** : What is your current heart rate?
* **glucose** : What is your current glucose level?

## Data Preprocessing
Before building the machine learning model, the data was preprocessed by handling missing values, removing outliers, encoding categorical columns and scaling the numeric features.

## Exploratory Data Analysis
Exploratory data analysis (EDA) was performed to gain insights into the data and identify any patterns or relationships between the features and the target variable. The EDA involved visualizing the distribution of each feature and its correlation with the target variable.

## Machine Learning Model
A variety of machine learning algorithms were experimented with, including LightGBM, Decision Tree, Random Forest, and XGBoost. The performance of each model was evaluated using metrics such as accuracy, precision, recall, and F1-score.

## Model Deployment
Model has been deployed using Flask API. In order to deploy the model, first install fastAPI and uvicorn and then follow the run the main.py file.

## Conclusion
In conclusion, this project successfully built a machine learning model that can accurately predict the probability of heart disease based on various medical parameters. The model can be used as a diagnostic tool to aid healthcare professionals in making informed decisions about the patient's health.
