# Statamic Glossary Tooltips

A Statamic addon that provides the possibility to add tooltips to your bard content. The selected words are marked as `<dfn>` with corresponding attributes, so that a tooltip can be generated via CSS or JavaScript.

# How to Install

Run the following command from your project root:

```bash
composer require visuellverstehen/statamic-glossary-tooltips
```

## How to set up

### 1. Step: Create Collection + Blueprint for glossary terms

First you have to create a collection for the glossary terms with the handle `glossary`.
Two fields are required in the blueprint of the Collection entries: 
1. Name of the term as `title`.
2. The term definition as `definition`.

### 2. Step: Enable REST API of Statamic

The created entries are pulled into the Vue component of the Bard addon using Statamic's REST API. 

To enable the REST API, add the following to your `.env` file:

```bash
STATAMIC_API_ENABLED=true
```

and enable collections in the resources in your `config/statamic/api.php` file:

```bash
'resources' => [
    'collections' => [
        'glossary' => true,
    ],
    // etc.
]
```

See the [Statamic documentation](https://statamic.dev/rest-api#enable-the-api) for more information about the REST API

### 3. Step: Add tooltips to your bard

In order to be able to create glossary tooltips, you need to enable it in the blueprint of your bard editor.

## How to use

Go to your bard editor and select the words you want to mark. Click on the speech bubble of the Glossary Tooltip button and an overlay with possible settings will open. Now you can choose if you want to select a term out of your glossary collection or if you want to write a custom definition. 

In the output of the Bard editor the selected words are now marked as `<dfn>`. 

This is a sample output with a selected entry from the glossary collection:

```bash
<dfn class="glossary-tooltip" type="entry" locale="en" title="an imaginary reptile said to be able to kill by poison or by looking at someone: The herb rue was said to offer protection from basilisks." value="Basilisk" id="b7d272ea-e4b2-4543-895e-6485123bb7ab">
    Basilisk
</dfn>
```

This is a sample output with a custom definition:

```bash
<dfn class="glossary-tooltip" type="custom" locale="en" title="an imaginary reptile said to be able to kill by poison or by looking at someone: The herb rue was said to offer protection from basilisks." value="Basilisk" id="b7d272ea-e4b2-4543-895e-6485123bb7ab">
    Basilisk
</dfn>
```

### Custom HTML attributes

If you want to add other attributes to the `<dfn>` tag or change the CSS class, you can do so in the config file ([see below](#configuration)).

### Add tooltip

How you want to design and implement the actual tooltip is up to you. Without any further configurations, you can create a tooltip with Vanilla JavaScript. But if you prefer to use [alpine.js](https://alpinejs.dev/), you can set your Alpine component details in the config file ([see below](#configuration)).

## Configuration

The addon provides configuration options through it's `config/glossaryTooltip.php` file. Check out the description in there. All settings have sensible default options, so in the best-cast-scenario you don't have to configure anything.

## More about us

- [www.visuellverstehen.de](https://visuellverstehen.de)

## License
The MIT license (MIT). Please take a look at the [license file](LICENSE.md) for more information.