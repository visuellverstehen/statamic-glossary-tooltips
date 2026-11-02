<template>
    <StackContent class="space-y-5">
        <!-- Glossary type select -->
        <div class="flex gap-1">
            <Button
                v-for="glossaryType in glossaryTypes"
                :key="glossaryType.type"
                :text="glossaryType.title"
                :variant="glossaryType.type === activeType ? 'primary' : 'ghost'"
                size="sm"
                @click="activeType = glossaryType.type"
            />
        </div>

        <template v-if="activeType === 'entry'">
            <!-- Language select -->
            <Field :label="__('Select language')">
                <Select
                    v-model="activeLocale"
                    :options="locales"
                    option-label="title"
                />
            </Field>

            <!-- Entry select -->
            <Field :label="__('Select term')">
                <Combobox
                    v-model="selectedId"
                    :options="filteredGlossaryEntries"
                    option-label="title"
                    option-value="id"
                    clearable
                />
            </Field>

            <Description v-if="selectedEntry" :text="selectedEntry.definition" />
        </template>

        <!-- Definition input -->
        <Field v-else :label="__('Define definition')">
            <Textarea
                v-model="customTitle"
                :limit="200"
            />
        </Field>
    </StackContent>

    <!-- Save and cancel options -->
    <StackFooter>
        <template #end>
            <Button :text="__('Cancel')" variant="ghost" @click="$emit('canceled')" />
            <Button :text="__('Remove')" @click="remove" />
            <Button :text="__('Save')" variant="primary" :disabled="!canCommit" @click="commit" />
        </template>
    </StackFooter>
</template>

<script>
import { Button, Combobox, Description, Field, Select, StackContent, StackFooter, Textarea } from '@statamic/cms/ui';

export default {
    components: {
        Button,
        Combobox,
        Description,
        Field,
        Select,
        StackContent,
        StackFooter,
        Textarea,
    },

    emits: ['updated', 'canceled'],

    props: {
        glossaryAttrs: Object,
    },

    data() {
        return {
            activeType: 'entry',
            activeLocale: 'all',
            selectedId: null,
            customTitle: null,
            glossaryEntries: [],
        };
    },

    computed: {
        glossaryTypes() {
            return [
                { type: 'entry', title: __('Glossary') },
                { type: 'custom', title: __('Custom') },
            ];
        },

        // Filter all locales from glossary entries
        locales() {
            const entryLocales = [...new Set(this.glossaryEntries.map((entry) => entry.locale))];

            return [
                { value: 'all', title: __('All') },
                ...entryLocales.map((locale) => ({ value: locale, title: locale.toUpperCase() })),
            ];
        },

        // Filter entries by selected locale
        filteredGlossaryEntries() {
            if (!this.activeLocale || this.activeLocale === 'all') return this.glossaryEntries;

            return this.glossaryEntries.filter((entry) => entry.locale === this.activeLocale);
        },

        selectedEntry() {
            return this.glossaryEntries.find((entry) => entry.id === this.selectedId) ?? null;
        },

        canCommit() {
            if (this.activeType === 'entry') return !!this.selectedEntry;

            return !!this.customTitle;
        },
    },

    async created() {
        this.mountCurrentValues();

        // Get all entries in glossary collection
        try {
            const res = await fetch('/api/collections/glossary/entries');
            const { data } = await res.json();
            this.glossaryEntries = data;
        } catch (e) {
            console.error(e);
        }
    },

    methods: {
        // Method is called if selected words already contain a defintion
        mountCurrentValues() {
            if (!this.glossaryAttrs.type) return;

            this.activeType = this.glossaryAttrs.type;

            if (this.activeType === 'entry') {
                this.activeLocale = this.glossaryAttrs.locale ?? 'all';
                this.selectedId = this.glossaryAttrs.id ?? null;
            } else {
                this.customTitle = this.glossaryAttrs.title;
            }
        },

        remove() {
            this.selectedId = null;
            this.customTitle = null;

            this.$emit('updated', {
                type: null,
                locale: null,
                value: null,
                title: null,
                id: null,
            });
        },

        // Emit attributes of selected definition to parent component
        commit() {
            if (!this.canCommit) return this.remove();

            if (this.activeType === 'entry') {
                this.$emit('updated', {
                    type: 'entry',
                    locale: this.activeLocale,
                    value: this.selectedEntry.title,
                    title: this.selectedEntry.definition ?? '',
                    id: this.selectedEntry.id,
                });

                return;
            }

            this.$emit('updated', {
                type: 'custom',
                title: this.customTitle,
            });
        },
    },
};
</script>