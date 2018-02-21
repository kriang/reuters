import React from 'react';

const Stocks = () => {
    return (
        <div>
            <table className="table table-hover table-borderless">
                {/* Stocks Listing Table Title */}
                <thead>   
                    <tr>
                        <th>SYMBOL</th>
                        <th>VOLUME</th>
                        <th>PRICE</th>
                        <th>EPS</th>
                        <th>P/E</th>
                        <th className="text-right">CHANGE</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Stocks Item - Individual Stocks */}
                    <tr>
                        <td>MSFT</td>
                        <td>15000</td>
                        <td>72.81</td>
                        <td>0.98</td>
                        <td>26.93</td>
                        <td className="text-right">+140.23(7.81%)</td>
                    </tr>
                    <tr>
                        <td>FB</td>
                        <td>7200</td>
                        <td>144.50</td>
                        <td>2.2</td>
                        <td>28.11</td>
                        <td className="text-right">+41.94(2.31%)</td>
                    </tr>
                    <tr>
                        <td>MSFT</td>
                        <td>15000</td>
                        <td>72.81</td>
                        <td>0.98</td>
                        <td>26.93</td>
                        <td className="text-right">+140.23(7.81%)</td>
                    </tr>
                    <tr>
                        <td>FB</td>
                        <td>7200</td>
                        <td>144.50</td>
                        <td>2.2</td>
                        <td>28.11</td>
                        <td className="text-right">+41.94(2.31%)</td>
                    </tr>
                    <tr>
                        <td>MSFT</td>
                        <td>15000</td>
                        <td>72.81</td>
                        <td>0.98</td>
                        <td>26.93</td>
                        <td className="text-right">+140.23(7.81%)</td>
                    </tr>
                    <tr>
                        <td>FB</td>
                        <td>7200</td>
                        <td>144.50</td>
                        <td>2.2</td>
                        <td>28.11</td>
                        <td className="text-right">+41.94(2.31%)</td>
                    </tr>
                    <tr>
                        <td>MSFT</td>
                        <td>15000</td>
                        <td>72.81</td>
                        <td>0.98</td>
                        <td>26.93</td>
                        <td class="text-right">+140.23(7.81%)</td>
                    </tr>
                    <tr>
                        <td>FB</td>
                        <td>7200</td>
                        <td>144.50</td>
                        <td>2.2</td>
                        <td>28.11</td>
                        <td className="text-right">+41.94(2.31%)</td>
                    </tr>
                    <tr>
                        <td>FB</td>
                        <td>7200</td>
                        <td>144.50</td>
                        <td>2.2</td>
                        <td>28.11</td>
                        <td className="text-right">+41.94(2.31%)</td>
                    </tr>
                    <tr>
                        <td>MSFT</td>
                        <td>15000</td>
                        <td>72.81</td>
                        <td>0.98</td>
                        <td>26.93</td>
                        <td className="text-right">+140.23(7.81%)</td>
                    </tr>
                </tbody>

            </table>
        </div>
    );

};

export default Stocks;