# Page Prerun Data Loader

A plugin for the webhandle framework. Allows a page to request that JSON data
files be loaded for use by templates on the page.

## Install

```bash
npm i @dankolz/page-prerun-data-loader
```

## Usage

When the environment is setup, to use the default directory (`data`), run:

```js

require('@dankolz/page-prerun-data-loader')()
```

For any page wishing to load data, they should include something like this in their
page json.

```json
{
	"title": "Pre Run Data Loader",
	"dataFiles": [
		{
			"name": "testData",
			"location": "test1.json"
		}
	]
}

```


The `dataFiles` section will cause the file `data/test1.json` to be loaded, parsed as JSON,
and put in the variable `res.locals.testData`.