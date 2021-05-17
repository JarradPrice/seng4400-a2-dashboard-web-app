# Azure Static Web App

Project created for SENG4400 Assigment 2. Serves as the source repository for deployment within Azure.

Uses <https://github.com/MicrosoftDocs/mslearn-staticwebapp> as a base. 

## Message Dashboard

Whenever the endpoint receives a message it updates a data store. You can then see the web page listing the recent answers and how long they took to compute.

The web page refreshes its contents every second to show the latest answers.

## Deployment Instructions

To deploy this as your own Azure Static Web App follow these steps:
1. Create your own repository from this repository <https://github.com/JarradPrice/seng4400-a2-dashboard-web-app/generate>

2. Create a new static web app in Azure portal <https://portal.azure.com/#create/Microsoft.StaticApp>

3. For the deployment details option select "GitHub" as source, sign into account, then select the repository you just created

4. Select "Custom" as the build preset, for App location put "/", for Api location put "api", for Output location put "dist/angular-app"

5. Finish creating web app 

GitHub Actions will run and go and deploy the web app. After it has deployed you can access it from the URL given in the Azure portal for the app.

*Steps taken from <https://docs.microsoft.com/en-us/learn/modules/publish-static-web-app-api-preview-url/>*

## Sending Messages

To send messages to the web app create a HTTP POST to this address:
- \<URL\>/api/messages
The call must contain a JSON payload in the following format:
```
{
   "answer": [0, 0, 0]
   "time_taken": 000,
   "key": "1894577348"
}
```
Where "answer" is an array of numbers and time_taken is a number. Key is for basic authentication.