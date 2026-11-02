<?php

use Statamic\Fields\Field;
use Statamic\Fieldtypes\Bard;
use Statamic\Fieldtypes\Bard\Augmentor;

function augmentBard(array $content): string
{
    $fieldtype = (new Bard)->setField(new Field('content', [
        'type' => 'bard',
        'save_html' => false,
    ]));

    return $fieldtype->augment($content);
}

function paragraphWithMark(array $attrs, string $text = 'Basilisk'): array
{
    return [
        [
            'type' => 'paragraph',
            'content' => [
                [
                    'type' => 'text',
                    'text' => $text,
                    'marks' => [
                        ['type' => 'glossaryTooltips', 'attrs' => $attrs],
                    ],
                ],
            ],
        ],
    ];
}

it('registers the mark with the bard augmentor', function () {
    expect((new Augmentor(new Bard))->extensions())->toHaveKey('glossaryTooltips');
});

it('renders the mark as a dfn tag with the configured html attributes', function () {
    $html = augmentBard(paragraphWithMark([
        'type' => 'entry',
        'locale' => 'en',
        'title' => 'An imaginary reptile.',
        'value' => 'Basilisk',
        'id' => 'b7d272ea',
    ]));

    expect($html)->toBe(
        '<p><dfn class="glossary-tooltip" type="entry" locale="en" title="An imaginary reptile." value="Basilisk" id="b7d272ea">Basilisk</dfn></p>'
    );
});

it('merges custom html attributes into the dfn tag', function () {
    config()->set('glossary-tooltips.html_attributes', [
        'class' => 'glossary-tooltip',
        'data-glossary' => 'true',
    ]);

    $html = augmentBard(paragraphWithMark([
        'type' => 'custom',
        'title' => 'A made-up definition.',
    ]));

    expect($html)->toBe(
        '<p><dfn class="glossary-tooltip" data-glossary="true" type="custom" title="A made-up definition.">Basilisk</dfn></p>'
    );
});

it('omits attributes that are not set on a custom definition', function () {
    $html = augmentBard(paragraphWithMark([
        'type' => 'custom',
        'title' => 'A made-up definition.',
    ]));

    expect($html)->not->toContain('locale=')
        ->and($html)->not->toContain('value=')
        ->and($html)->not->toContain('id=');
});