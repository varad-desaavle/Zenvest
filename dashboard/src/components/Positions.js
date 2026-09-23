import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiBaseUrl } from "../config";

const Positions = () => {
    const [allPositions, setAllPositions] = useState([]);

    useEffect(() => {
        // Connect to backend and fetch positions from database
        axios.get(`${apiBaseUrl}/allPositions`, { withCredentials: true }).then((res) => {
            console.log(res.data);
            setAllPositions(res.data);
        });
    }, []);

    return (
        <>
            <h3 className="title">Positions ({allPositions.length})</h3>

            <div className="order-table">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg.</th>
                            <th>LTP</th>
                            <th>P&L</th>
                            <th>Chg.</th>
                        </tr>
                    </thead>

                    <tbody>
                        {allPositions.map((stock, index) => {
                            const curValue = stock.price * stock.qty;

                            const profitLoss =
                                curValue - stock.avg * stock.qty;

                            const isProfit = profitLoss >= 0;

                            const profClass = isProfit
                                ? "profit"
                                : "loss";

                            const dayClass = stock.isLoss
                                ? "loss"
                                : "profit";

                            return (
                                <tr key={index}>
                                    <td>{stock.product}</td>
                                    <td>{stock.name}</td>
                                    <td>{stock.qty}</td>

                                    <td>
                                        {stock.avg.toFixed(2)}
                                    </td>

                                    <td>
                                        {stock.price.toFixed(2)}
                                    </td>

                                    <td className={profClass}>
                                        {profitLoss.toFixed(2)}
                                    </td>

                                    <td className={dayClass}>
                                        {stock.day}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Positions;