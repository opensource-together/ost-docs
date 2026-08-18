# OpenSource Together Documentation

The documentation site for [OpenSource Together](https://opensource-together.com), built with
[Mintlify](https://mintlify.com).

It covers the open-source **web app**, the **API reference**, and the **AI Engine**, and is
aimed at contributors.

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

## Structure


| Path                                             | Contents                                                                      |
| ------------------------------------------------ | ----------------------------------------------------------------------------- |
| `docs.json`                                      | Navigation, theme, and site configuration. New pages must be registered here |
| `index.mdx`, `quickstart.mdx`, `development.mdx` | The Guides tab                                                                |
| `contributing/`                                  | Contribution, Learn-content, and deployment guides                            |
| `web-app/`                                       | Web app architecture, features, mock API, and development guides              |
| `api-reference/`                                 | Generated API reference (see below)                                           |
| `ai/`                                            | AI Engine documentation                                                       |
| `images/`, `logo/`                               | Static assets                                                                 |


A page that isn't listed in `docs.json` won't appear in the navigation.

## Updating the API reference

The API reference is generated from the API's live Swagger output. **Never edit**
`api-reference/openapi.json` **or the endpoint pages by hand.**

```bash
curl -s https://api.opensource-together.com/api-docs-json | python3 -m json.tool --indent 2 > api-reference/openapi.json

npx @mintlify/scraping@latest openapi-file api-reference/openapi.json -o api-reference/endpoint
```

Then register any newly generated page in the `API Reference` tab in `docs.json`. The scraper
writes files but does not update navigation.

Note that better-auth's `/api/auth/*` routes are absent from the specification (the API's
generator doesn't see them) and are documented by hand in `api-reference/introduction.mdx`.

## Before opening a pull request

```bash
mint broken-links
```



## Publishing

Changes merged to the default branch deploy automatically via the Mintlify GitHub app.

## Contributing

See [Contribute to the docs](https://docs.opensource-together.com/development), or open an
issue if something here is wrong or unclear.