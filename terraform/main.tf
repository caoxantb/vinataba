resource "aws_iam_role" "lambda_role" {
  name = "lambda_execution_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
        Effect = "Allow"
        Sid    = ""
      },
    ]
  })
}

resource "aws_iam_policy_attachment" "lambda_policy_attachment" {
  name       = "lambda_policy_attachment"
  roles      = [aws_iam_role.lambda_role.name]
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_s3_bucket" "lambda_bucket" {
  bucket = "hackathon-forcast-argiculture"
}


resource "aws_ecr_repository" "lambda_repo" {
  name          = "lambda_repo"
  force_delete  = true
}


resource "aws_lambda_function" "lambda" {
  depends_on = [ aws_s3_bucket.lambda_bucket ]
  function_name = "lambda"
  role          = aws_iam_role.lambda_role.arn
  package_type   = "Image"

  image_uri = "${aws_ecr_repository.lambda_repo.repository_url}:v.0.1"

  timeout         = 30
}

resource "aws_api_gateway_rest_api" "api" {
  name        = "ForecastAPI"
  description = "API for forecasting prices"
}

resource "aws_api_gateway_resource" "forecast" {
  rest_api_id = aws_api_gateway_rest_api.api.id
  parent_id   = aws_api_gateway_rest_api.api.root_resource_id
  path_part   = "forecast"
}

resource "aws_api_gateway_method" "post" {
  rest_api_id   = aws_api_gateway_rest_api.api.id
  resource_id   = aws_api_gateway_resource.forecast.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "lambda_integration" {
  rest_api_id             = aws_api_gateway_rest_api.api.id
  resource_id             = aws_api_gateway_resource.forecast.id
  http_method             = aws_api_gateway_method.post.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.lambda.invoke_arn
}

resource "aws_lambda_permission" "allow_api_gateway" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.api.execution_arn}/*/*"
}

resource "aws_api_gateway_deployment" "api_deployment" {
  depends_on = [
    aws_api_gateway_integration.lambda_integration,
    aws_api_gateway_method.post
  ]
  rest_api_id = aws_api_gateway_rest_api.api.id
}

resource "aws_api_gateway_stage" "prod_stage" {
  rest_api_id = aws_api_gateway_rest_api.api.id
  stage_name  = "prod"
  deployment_id = aws_api_gateway_deployment.api_deployment.id
}

