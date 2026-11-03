<?php

namespace VV\GlossaryTooltips;

use Statamic\Facades\Entry;

class GlossaryEntriesController
{
    public function index()
    {
        $entries = Entry::whereCollection('glossary')
            ->map(fn ($entry) => [
                'id' => $entry->id(),
                'title' => $entry->get('title'),
                'definition' => $entry->get('definition'),
                'locale' => $entry->locale(),
            ])
            ->values();

        return ['data' => $entries];
    }
}