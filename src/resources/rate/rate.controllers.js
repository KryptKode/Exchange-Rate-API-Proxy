import { makeGetRequest } from "../../utils/api"
import { StatusCodes } from "http-status-codes"

const EXCHANGERATES_BASE_URL = "https://api.exchangeratesapi.io/latest"

export const getRate = async (req, res) => {
  try {
    const base = req.query.base
    const currency = req.query.currency

    if (!base || !currency) {
      const error = getErrorMessage(base, currency)
      res.status(StatusCodes.BAD_REQUEST).json({ error })
    }

    const params = { base, symbols: currency }
    const rates = await makeGetRequest(EXCHANGERATES_BASE_URL, params)

    const results = { results: rates.data }

    res.status(200).json(results)
  } catch (e) {
    console.error("ERROR from API", e)

    if (e.response) {
      const response = e.response
      const error = response.data.error
      res.status(response.status).json({ error })
    } else {
      res.status(StatusCodes.BAD_REQUEST).end()
    }
  }
}

const getErrorMessage = (base, currency) => {
  if (!base && !currency) {
    return "Your request should specify the 'base' and 'currency' as query parameters"
  }

  if (!base) {
    return "Your request should specify the 'base' currency as query parameter"
  }

  if (!currency) {
    return "Your request should specify the 'currency' as query parameter"
  }
}

export default {
  // eslint-disable-next-line prettier/prettier
  getRate,
}
