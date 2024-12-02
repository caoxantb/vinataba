import json
from datetime import datetime

from forecast_price import forecast_price


def request_handler(event, context):
    try:
        body = json.loads(event["body"])
        product = body.get("product")
        date_str = body.get("date")

        date = datetime.strptime(date_str, "%Y-%m-%d")

        result = forecast_price(product, date)

        return {
            "statusCode": 200,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps(result),
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps({"error": str(e)}),
        }
