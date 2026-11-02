<?php

namespace VV\GlossaryTooltips;

use Tiptap\Core\Mark;
use Tiptap\Utils\HTML;

class GlossaryTooltips extends Mark
{
    public static $name = 'glossaryTooltips';

    // Save emitted parameters out of Vue component
    public function addAttributes(): array
    {
        return [
            'type' => [],
            'locale' => [],
            'title' => [], // stores the defintion
            'value' => [],
            'id' => [],
        ];
    }

    // Defines how the selected text should be marked up in the frontend
    public function renderHTML($mark, $HTMLAttributes = []): array
    {
        return [
            'dfn',
            HTML::mergeAttributes(config('glossary-tooltips.html_attributes'), $HTMLAttributes),
        ];
    }
}
