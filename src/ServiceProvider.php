<?php

namespace VV\StatamicGlossaryTooltips;

use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;

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

        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__.'/../config/config.php' => config_path('glossaryTooltips.php'),
            ], 'glossaryTooltips');
        }

        Statamic::afterInstalled(function ($command) {
            $command->call('vendor:publish', ['--tag' => 'statamic-glossary-tooltips']);
        });
    }
}
