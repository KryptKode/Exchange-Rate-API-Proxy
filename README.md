# Exchanger API Proxy API

A service integration to a public API and exposing a RESTful endpoint. The endpoint will accept requests and returns a modified response schema from the integrated API.

It integrates with the [Exchange Rate API](https://api.exchangeratesapi.io/latest) to proxy requests

- The REST endpoint `/api/rates` returns a JSON object of the latest currency rates in the following format/schema:

```jsx
{
    "results": {
        "base": "",
        "date": "",
        "rates": {
        }
    }
}
```

### Technology

It is built with Node/[ExpressJS](https://expressjs.com/)

### Examples

As an example, a request to fetch the currency exchange rates from `CZK` to `EUR,GBP,USD` might look like:

```jsx
/api/rates?base=CZK&currency=EUR,GBP,USD
```

A successful response for the above request should return the following schema (of course with a more up-to-date values)

```jsx
{
    "results": {
        "base": "CZK",
        "date": "2020-11-17",
        "rates": {
            "EUR": 0.0377244605,
            "GBP": 0.033795458,
            "USD": 0.044824204
        }
    }
}
```

### Resources

- [RESTful API](https://searchapparchitecture.techtarget.com/definition/RESTful-API#:~:text=A%20RESTful%20API%20is%20an,deleting%20of%20operations%20concerning%20resources.)
- [What is JSON?](https://beginnersbook.com/2015/04/json-tutorial/)
- [Url Query Parameters](https://support.clickmeter.com/hc/en-us/articles/211032666-URL-parameters-How-to-pass-it-to-the-destination-URL)
- [Query Parameters in ExpressJS](https://medium.com/javascript-in-plain-english/query-strings-url-parameters-d1a35b9a694f)
- [Top Platforms for App Deployment](https://blog.newrelic.com/engineering/cloud-application-deployment-tools/)
- Exchange Rate API ⇒ [https://api.exchangeratesapi.io/latest](https://api.exchangeratesapi.io/latest)
- Exchange Rate API docs: [https://exchangeratesapi.io/](https://exchangeratesapi.io/)
