# VinaFarm ChatBot

## Introduction

VinaFarm ChatBot is a chat application designed specifically for Finland farmers to get predictive prices of agricultural products. Built with advanced technologies, this application aims to empower farmers by providing them with accurate and real-time information.

## Highlights

- Powered by **Large Language Models (LLMs)** for intelligent interactions.
- Utilizes **Machine Learning** to predict agricultural product prices.
- Developed as a **robust web application** for seamless user experience.

## Architecture
![vinfarm_background](https://github.com/user-attachments/assets/3d85806e-9253-4d7b-91c5-95a410adabc0)

## Requirements

To run the VinaFarm ChatBot, ensure that you have the following prerequisites installed and set up:

- [AWS CLI](https://aws.amazon.com/cli/)
- [Docker](https://www.docker.com/)
- An active [AWS Account](https://aws.amazon.com/)

## How to Run

Follow the steps below to set up and deploy the VinaFarm ChatBot:

1. **Configure AWS Authentication**  
   Set up your AWS CLI with the necessary credentials:

   ```
   aws configure
   ```

   You will be prompted to provide:

   Your AWS Access Key ID  
   Your AWS Secret Access Key  
   Your Default region (e.g., us-east-1)

2. **Build the Docker Image**  
   Create a Docker image for VinaFarm ChatBot by running the following command in the application directory:

   ```
   docker build -t vinafarm-chatbot .
   ```

   This command will package the application and its dependencies into a Docker container.

3. **Push the Docker Image to Amazon Elastic Container Registry (ECR)**  
   To deploy the application to AWS services, the Docker image must be uploaded to an ECR repository. Follow these steps:

   - **Tag the Docker Image**  
     Replace `<your_aws_account_id>` and `<region>` with your AWS account ID and region, respectively:

     ```
     docker tag vinafarm-chatbot:latest <your_aws_account_id>.dkr.ecr.<region>.amazonaws.com/vinafarm-chatbot:latest
     ```

   - **Authenticate Docker with ECR**  
     Use the AWS CLI to log in to your ECR repository:

     ```
     aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <your_aws_account_id>.dkr.ecr.<region>.amazonaws.com
     ```

   - **Push the Docker Image**  
     Push the image to ECR:
     ```
     docker push <your_aws_account_id>.dkr.ecr.<region>.amazonaws.com/vinafarm-chatbot:latest
     ```

4. **Deploy Infrastructure with Terraform**  
   Use Terraform to provision cloud infrastructure and deploy the chatbot application. Follow these steps:

   - **Initialize Terraform**  
     Navigate to the Terraform configuration directory and initialize Terraform:

     ```
     terraform init
     ```

   - **Apply Configuration**  
     Deploy the infrastructure and application:
     ```
     terraform apply
     ```
     Review the proposed changes and confirm by typing `yes` when prompted. Terraform will provision the required AWS resources and deploy the chatbot.

5. **Run server application**
   Use Node.js to implement the chatbot functionalities. Follow these steps:

   - **Navigate to server directory**

     ```
     cd server
     ```

   - **Add .env configuration**

     ```
     OPENAI_API_KEY=[insert your api key here]
     MONGODB_URI=[insert your MongoDB URI here]
     PORT=[3000]
     ```

   - **Run the server**
     ```
     npm install
     npm run dev
     ```

6. **Run frontend application**
   Use Node.js to implement the chatbot functionalities. Follow these steps:

   - **Navigate to the /app directory**

     ```
     cd app
     ```

   - **Run the frontend**
     ```
     pnpm install
     pnpm dev
     ```

   The application now can be accessed at http://localhost:5173/
   
