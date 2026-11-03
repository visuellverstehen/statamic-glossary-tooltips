<?php

use Illuminate\Support\Facades\Route;
use VV\GlossaryTooltips\GlossaryEntriesController;

Route::get('glossary-tooltips/entries', [GlossaryEntriesController::class, 'index'])
    ->name('glossary-tooltips.entries');