# CDK Three Tier Serverless

## Setup

Register a custom domain, e.g. GoDaddy

Create SSL certificate for this domain using ACM (Certificate Management). Can only use us-east-1 region for cert generation.

Edit stack definition in lib folder and set domainName variable to your domain name.

Deploy with npx aws-cdk deploy


Regetences:

https://www.freecodecamp.org/news/aws-cdk-v2-three-tier-serverless-application/