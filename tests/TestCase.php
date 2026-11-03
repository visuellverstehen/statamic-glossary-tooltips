<?php

namespace VV\GlossaryTooltips\Tests;

use Statamic\Testing\AddonTestCase;
use VV\GlossaryTooltips\ServiceProvider;

abstract class TestCase extends AddonTestCase
{
    protected string $addonServiceProvider = ServiceProvider::class;
}