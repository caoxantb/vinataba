FROM public.ecr.aws/lambda/python:3.12

RUN pip install pandas prophet

COPY . ${LAMBDA_TASK_ROOT}

CMD ["lambda_handler.request_handler"]