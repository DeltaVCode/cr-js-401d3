# Demo: Cloud Server Deployment

## Preparation
* Get your AWS and Azure accounts opened

## Live Code Demos
* Deploy the server to both AWS and Azure
* Client: Alter the `client.js` to connect to either server and run
  * Confirm that it regurgitates what you sent.

### AWS
* Create an Elastic Beanstalk Environment with a .zip
  * Talk through the CLI and connecting it to github
  * Explain that it starts up an EC2 instance and security perms for you.
  * [Reference](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs_express.html)
  
## Azure
* Create a new web app
  * And a resource group (ties everything together)
* Click "Deployment"
* Connect to your github
  * Grant Perms
  * Refresh so the sync happens
* Choose your org, repo, branch
* It will pull, run npm install, and npm start
* Go to "overview" to see the URL


