<?php

namespace VV\GlossaryTooltips;

use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;
use VV\GlossaryTooltips\GlossaryTooltips;
use Statamic\Statamic;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__ . '/../dist/js/glossary-tooltips.js',
    ];

    public function boot()
    {
        parent::boot();

        Augmentor::addExtension('glossaryTooltips', new GlossaryTooltips());

        $this->loadJsonTranslationsFrom(__DIR__ . '/../resources/lang', 'en');

        $this->mergeConfigFrom(__DIR__.'/../config/config.php', 'glossary-tooltips');

        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__.'/../config/config.php' => config_path('glossary-tooltips.php'),
            ], 'glossary-tooltips');
        }

        Statamic::afterInstalled(function ($command) {
            $command->call('vendor:publish', ['--tag' => 'glossary-tooltips']);
        });
    }
}
