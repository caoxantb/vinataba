output "invoke_url" {
  value = "${aws_api_gateway_deployment.api_deployment.invoke_url}${aws_api_gateway_stage.prod_stage.stage_name}/${aws_api_gateway_resource.forecast.path_part}"
}
 