import pandas as pd
from prophet import Prophet

CATEGORIES = {
    "Meat": [
        "Cows",
        "Bulls",
        "Heifers",
        "Beef",
        "Boars",
        "Pork",
        "Lamb",
        "Mutton",
        "Broilers",
        "Poultry",
    ]
}

FILE_PATHS = {
    "Meat": "data/meat_data.csv",
}


def forecast_price(prod, date):
    file_path = ""
    for category, prods in CATEGORIES.items():
        if prod in prods:
            file_path = FILE_PATHS.get(category)

    df = pd.read_csv(
        file_path,
        header=0,
        dtype="float32",
        parse_dates=["ds"],
    )
    df = df[["ds", prod]].rename(columns={prod: "y"})

    model = Prophet(holidays=None)
    model.fit(df)
    future = model.make_future_dataframe(periods=365, freq="D", include_history=True)
    forecast = model.predict(future)
    result_df = forecast[["ds", "yhat", "yhat_lower", "yhat_upper"]]

    return result_df[result_df["ds"] == date].astype(str).to_dict("records")
