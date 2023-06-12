import { useParams } from "react-router-dom";
import React from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import useFetchData from "../custom_hooks/useFetchData";
import loader from "../asset/Loader.gif";

function CoinDetails() {
  const params = useParams();

  const { data, status } = useFetchData(
    `https://api.coingecko.com/api/v3/coins/${params.coinId}`
  );

  return (
    <div className="coin-content-details">
      {status == "loading" ? (
        <img className="loader" src={loader} />
      ) : (
        <div className="container">
          <div className="coin-heading">
            {data.image ? <img src={data.image.small} alt="" /> : null}
            <p className="coin-name">{data.name}</p>
            {data.symbol ? <p>{data.symbol.toUpperCase()}/INR</p> : null}
          </div>
          <div>
            {data.market_data?.current_price ? (
              <p className="coin-price">
                Current Price: INR{" "}
                {data.market_data.current_price.inr.toLocaleString()}
              </p>
            ) : null}
          </div>
          <div className="coin-description">
            {data.description?.en ? (
              <p
                dangerouslySetInnerHTML={{
                  __html: data.description.en,
                }}
              ></p>
            ) : (
              <p>Sorry, no content available.</p>
            )}
          </div>
          <div>
            <p className="coin-price">Market changes</p>
            <table className="coin-price-table">
              <thead>
                <tr className="row">
                  <td>Period</td>
                  <td>Change in Percentage</td>
                </tr>
              </thead>
              <tbody>
                <tr className="row">
                  <td>Last 24 hours</td>
                  <td>
                    {data.market_data?.price_change_percentage_24h ? (
                      data.market_data.price_change_percentage_24h < 0 ? (
                        <p>
                          <BsFillTriangleFill className="low" />
                          {(
                            data.market_data.price_change_percentage_24h * -1
                          ).toFixed(2)}{" "}
                          %
                        </p>
                      ) : (
                        <p>
                          <BsFillTriangleFill className="high" />
                          {data.market_data.price_change_percentage_24h.toFixed(
                            2
                          )}{" "}
                          %
                        </p>
                      )
                    ) : (
                      "-"
                    )}{" "}
                  </td>
                </tr>
                <tr>
                  <td>Last 7 days</td>
                  <td>
                    {data.market_data?.price_change_percentage_7d ? (
                      data.market_data.price_change_percentage_7d < 0 ? (
                        <p>
                          <BsFillTriangleFill className="low" />
                          {(
                            data.market_data.price_change_percentage_7d * -1
                          ).toFixed(2)}{" "}
                          %
                        </p>
                      ) : (
                        <p>
                          <BsFillTriangleFill className="high" />
                          {data.market_data.price_change_percentage_7d.toFixed(
                            2
                          )}{" "}
                          %
                        </p>
                      )
                    ) : (
                      "-"
                    )}{" "}
                  </td>
                </tr>
                <tr>
                  <td>Last 1 month</td>
                  <td>
                    {data.market_data?.price_change_percentage_30d ? (
                      data.market_data.price_change_percentage_30d < 0 ? (
                        <p>
                          <BsFillTriangleFill className="low" />
                          {(
                            data.market_data.price_change_percentage_30d * -1
                          ).toFixed(2)}{" "}
                          %
                        </p>
                      ) : (
                        <p>
                          <BsFillTriangleFill className="high" />
                          {data.market_data.price_change_percentage_30d.toFixed(
                            2
                          )}{" "}
                          %
                        </p>
                      )
                    ) : (
                      "-"
                    )}{" "}
                  </td>
                </tr>
                <tr>
                  <td>Last 1 year</td>
                  <td>
                    {data.market_data?.price_change_percentage_1y ? (
                      data.market_data.price_change_percentage_1y < 0 ? (
                        <p>
                          <BsFillTriangleFill className="low" />
                          {(
                            data.market_data.price_change_percentage_1y * -1
                          ).toFixed(2)}{" "}
                          %
                        </p>
                      ) : (
                        <p>
                          <BsFillTriangleFill className="high" />
                          {data.market_data.price_change_percentage_1y.toFixed(
                            2
                          )}{" "}
                          %
                        </p>
                      )
                    ) : (
                      "-"
                    )}{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default CoinDetails;
