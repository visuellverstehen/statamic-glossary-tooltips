<?php

namespace VV\StatamicGlossaryTooltips;

use Tiptap\Core\Mark;
use Tiptap\Utils\HTML;

class GlossaryTooltips extends Mark
{
    public static $name = 'glossaryTooltips';  // Name in markdown file

    // Set non-dynamic values
    public function addOptions()
    {
        return [
            'HTMLAttributes' => config('glossaryTooltips.html_attributes')
        ];
    }

    // Save emitted parameters out of Vue component
    public function addAttributes()
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
    public function renderHTML($mark, $HTMLAttributes = [])
    {
        return [
            'dfn',
            HTML::mergeAttributes($this->options['HTMLAttributes'], $HTMLAttributes),
        ];
    }
}
