import { makeGetRequest } from "../../utils/api"

const EXCHANGERATES_BASE_URL = "https://api.exchangeratesapi.io/latest"

export const getRate = async (req, res) => {
  try {
    const base = req.query.base
    const currency = req.query.currency
    const params = { base, symbols: currency }
    const rates = await makeGetRequest(EXCHANGERATES_BASE_URL, params)

    const results = { results: rates.data }

    res.status(200).json(results)
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}
