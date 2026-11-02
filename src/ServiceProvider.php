<?php

namespace VV\GlossaryTooltips;

use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;
use Statamic\Statamic;

class ServiceProvider extends AddonServiceProvider
{
    protected $vite = [
        'input' => [
            'resources/js/bard.js',
        ],
        'publicDirectory' => 'resources/dist',
    ];

    public function bootAddon()
    {
        Augmentor::addExtension('glossaryTooltips', new GlossaryTooltips());

        $this->loadJsonTranslationsFrom(__DIR__ . '/../resources/lang');

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