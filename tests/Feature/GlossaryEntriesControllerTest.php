<?php

use Statamic\Facades\User;

it('requires a logged in user', function () {
    $this->get('/cp/glossary-tooltips/entries')->assertRedirect();
});

it('returns the glossary entries', function () {
    $this->actingAs(User::make()->id('1')->email('test@example.com')->makeSuper())
        ->get('/cp/glossary-tooltips/entries')
        ->assertOk()
        ->assertJson([
            'data' => [
                [
                    'title' => 'Basilisk',
                    'definition' => 'An imaginary reptile said to be able to kill by poison or by looking at someone.',
                ],
            ],
        ]);
});