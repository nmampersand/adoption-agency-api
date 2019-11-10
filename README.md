WIP Adoption Agency API built with AWS CodeStar
==============================================

A simple API containing a single domain - Pets. Intended to be an application which could be used by a non-profit pet adoption agency.

Local Development
-----------
Set up a remote or local DynamoDB instance with a single table "Pets" with primary key "PetId."
Run `npm start` for a local development server with hot-reload.
Run `npm test` to run tests.

File Descriptions
-----------

* README.md - this file
* buildspec.yml - this file is used by AWS CodeBuild to package your
  service for deployment to AWS Lambda
* app.js - application entrypoint
* index.js - this file contains the AWS Lambda handler code
* template.yml - this file contains the AWS Serverless Application Model (AWS SAM) used
  by AWS CloudFormation to deploy your service to AWS Lambda and Amazon API
  Gateway.
* tests/ - this directory contains tests for your application
* template-configuration.json - this file contains the project ARN with placeholders used for tagging resources with the project ID

AWS CodeStar Resources
------------------

Learn more about AWS CodeBuild and how it builds and tests your application here:
https://docs.aws.amazon.com/codebuild/latest/userguide/concepts.html

Learn more about AWS Serverless Application Model (AWS SAM) and how it works here:
https://github.com/awslabs/serverless-application-model/blob/master/HOWTO.md

AWS Lambda Developer Guide:
http://docs.aws.amazon.com/lambda/latest/dg/deploying-lambda-apps.html

Learn more about AWS CodeStar by reading the user guide, and post questions and
comments about AWS CodeStar on our forum.

User Guide: http://docs.aws.amazon.com/codestar/latest/userguide/welcome.html

Forum: https://forums.aws.amazon.com/forum.jspa?forumID=248

Best Practices: https://docs.aws.amazon.com/codestar/latest/userguide/best-practices.html?icmpid=docs_acs_rm_sec
