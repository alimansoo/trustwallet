import axios from "axios";

export default axios.create(
  {
    baseURL:"http://rest.coinapi.io/",
    headers:{
      'X-CoinAPI-Key': '3AB59341-6ABA-4B92-A253-F1486DC1AAA5',
      // 'X-CoinAPI-Key': process.env.X_CoinAPI_Key,
      'Content-Type': 'Application/json',
    }
  }
)