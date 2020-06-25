import React from "react";
import "./ProductDetail.scss";

class SizeTable extends React.Component {
  render() {
    return (
      <table>
        <thead className="main-font">
          <tr>
            <th>한국</th>
            <th>UK</th>
            <th>한국</th>
            <th>UK</th>
          </tr>
        </thead>
        <tbody className="num-font">
          <tr>
            <td>220</td>
            <td>3</td>
            <td>260</td>
            <td>7</td>
          </tr>
          <tr>
            <td>230</td>
            <td>4</td>
            <td>270</td>
            <td>8</td>
          </tr>
          <tr>
            <td>240</td>
            <td>5</td>
            <td>280</td>
            <td>9</td>
          </tr>
          <tr>
            <td>250</td>
            <td>6</td>
            <td>290</td>
            <td>10</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default SizeTable;
