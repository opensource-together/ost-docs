# OpenSource Together Documentation

The documentation site for [OpenSource Together](https://opensource-together.com), powered by
[Mintlify](https://mintlify.com).

## Run it locally

Install the Mintlify CLI (requires Node 19+):

```bash
npm i -g mint
```

Then, from the repository root where `docs.json` lives:

```bash
mint dev
```

The preview runs at [http://localhost:3000](http://localhost:3000).

## Updating the API reference

The API reference is generated from the API's live Swagger output. **Never edit**
`api-reference/openapi.json` **or the endpoint pages by hand.**

```bash
curl -s https://api.opensource-together.com/api-docs-json | python3 -m json.tool --indent 2 > api-reference/openapi.json

npx @mintlify/scraping@latest openapi-file api-reference/openapi.json -o api-reference/endpoint
```

Then register any newly generated page in the `API Reference` tab in `docs.json`. The scraper
writes files but does not update navigation.

## Before opening a pull request

```bash
mint broken-links
```

## Publishing

Changes merged to the default branch deploy automatically via the Mintlify GitHub app.

## Contributing

See [Contribute to the docs](https://docs.opensource-together.com/development), or open an
issue if something here is wrong or unclear.
