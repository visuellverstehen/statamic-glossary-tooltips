<template>

    <div class="bard-link-toolbar">
        <!-- Glossary type select -->
        <div class="flex items-center px-4 py-2 border-b">

            <button
                class="button-tab"
                v-for="glossaryType in glossaryTypes"
                :class="{active: glossaryType.type === activeType}"
                :for="glossaryType.type"
                :key="glossaryType.type"
                :id="glossaryType.type"
                @click="setGlossaryType(glossaryType.type)"
            >
                {{ glossaryType.title }}
            </button>
        </div>

        <div class="px-4 py-4 border-b">

            <!-- Language select -->
            <div v-if="activeType === 'entry'" class="pb-4">
                <label for="locale-select" class="mb-1">{{ __('Select language') }}:</label>

                <v-select
                    id="locale-select"
                    label="title"
                    v-model="activeLocale"
                    :options="locales"
                    :value="activeLocale.title ?? ''"
                    :searchable="false"
                    :multiple="false"
                    :clearable="false"
                    @input="(value) => setLocale(value)"
                >
                    <template #no-options="">
                        <span class="p-1">{{ __('No options to choose from.') }}</span>
                    </template>
                </v-select>
            </div>

            <!-- Entry select -->
            <div v-if="activeType === 'entry'">
                <label for="entrySelect" class="my-1">{{ __('Select term') }}:</label>

                <v-select
                    id="entrySelect"
                    label="title"
                    :options="filteredGlossaryEntries"
                    :value="itemData.value ?? ''"
                    :multiple="false"
                    @input="(value) => setItemData(value)"
                >
                    <template #no-options="">
                        <span class="p-1">{{ __('No options to choose from.') }}</span>
                    </template>
                </v-select>

                <p class="p-1 bg-gray-300 mt-1 border leading-tight text-xs rounded-md" v-if="truncatedTitle">
                    {{ truncatedTitle }}
                </p>
            </div>

            <!-- Definition input -->
            <div v-else>
                <label for="customTitle" class="mb-1">{{ __('Define definition') }}:</label>

                <div class="textarea-fieldtype">
                  <textarea
                    id="customTitle"
                    v-model="customTitle"
                    @input="itemData = {}"
                    class="input-text"
                    maxlength="200"
                ></textarea>
                </div>
            </div>
        </div>

        <!-- Save and cancel options -->
        <footer class="bg-gray-100 rounded-b-md flex items-center justify-end space-x-3 font-normal p-2">
            <button @click="$emit('canceled')" class="text-xs text-gray-600 hover:text-gray-800">
                {{ __('Cancel') }}
            </button>
            <button
                :aria-label="__('Remove')"
                @click="remove"
                class="btn btn-sm"
            >
                {{ __('Remove') }}
            </button>
            <button
                :disabled="! canCommit"
                v-tooltip="__('Save')"
                :aria-label="__('Save')"
                @click="commit"
                class="btn btn-sm"
            >
                {{ __('Save') }}
            </button>
        </footer>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                activeLocale:  { value: 'all', title: __('All') },
                itemData: {},
                customTitle: null,
                glossaryEntries: [],
                activeType: 'entry',
                glossaryTypes: [
                    { type: 'entry', title: __('Glossary') },
                    { type: 'custom', title: __('Custom') },
                ],
                locales: [
                    { value: 'all', title: __('All') },
                ],
            }
        },

        props: {
            glossaryAttrs: Object,
        },

        computed: {
            // Filter entries by selected locale
            filteredGlossaryEntries() {
                if (this.activeLocale.value === 'all') return this.glossaryEntries;

                return this.glossaryEntries.filter(glossaryEntry => glossaryEntry.locale === this.activeLocale.value);
            },

            canCommit() {
                switch (this.activeType) {
                    case 'entry':
                        return this.itemData.title;
                    case 'custom':
                        return !(this.customTitle === '' || this.customTitle === null);
                }
            },

            // Truncate description for preview
            truncatedTitle() {
                if (this.itemData.title) {
                    const characterLimit = 200;
                    const text = this.itemData.title;

                    return (text.length > characterLimit) ? text.substring(0, characterLimit) + " …" : text;
                }

                return null;
            },
        },

        async created() {
            this.mountCurrentValues();

            // Get all entries in glossary collection
            try {
                const res = await fetch("/api/collections/glossary/entries");
                const { data } = await res.json();
                this.glossaryEntries = data;
            } catch (e) {
                console.error(e);
            }
        },

        watch: {
            glossaryEntries() {
                if (this.glossaryEntries.length === 0) return;
                this.getLocales();
                this.setActiveLocale();
            }
        },

        methods: {
            // Filter all locales from glossary entries
            getLocales() {
                let entryLocales = this.glossaryEntries.map(function(item) {
                    return item.locale;
                })

                entryLocales = [...new Set(entryLocales)];

                entryLocales.forEach(locale => {
                    this.locales.push(
                        { value: locale, title: locale.toUpperCase() }
                    )
                })
            },

            setActiveLocale() {
                if (!this.glossaryAttrs.locale) return;

                this.activeLocale = this.locales.filter(
                    locale => locale.value === this.glossaryAttrs.locale
                );
            },

            // Method is called if selected words already contain a defintion
            mountCurrentValues() {
                if (!this.glossaryAttrs.type) return;

                this.activeType = this.glossaryAttrs.type;

                switch(this.activeType) {
                    case 'entry':
                        this.itemData = {
                            value: this.glossaryAttrs.value,
                            title: this.glossaryAttrs.title,
                            id: this.glossaryAttrs.id
                        }
                        this.customTitle = null;
                        break;
                    case 'custom':
                        this.itemData = {},
                        this.customTitle = this.glossaryAttrs.title;
                        break;
                }
            },

            setGlossaryType(type) {
                this.activeType = type;
            },

            setLocale(value) {
                if (value !== null) {
                    this.activeLocale = {
                        value: value.value,
                        title: value.title,
                    }
                }
            },

            setItemData(value) {
                if (value !== null) {
                    this.itemData = {
                        value: value.title,
                        title: value.definition, // the description has to be stored in the title attribute due to a11y reasons
                        id: value.id
                    }
                } else {
                    this.remove();
                }
            },

            remove() {
                this.itemData = {};
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
                if (this.activeType === 'entry' && Object.keys(this.itemData).length === 0
                    || this.activeType === 'custom' && this.customTitle === null) {
                    return this.remove();
                }

                switch (this.activeType) {
                    case 'entry':
                        this.$emit('updated', {
                            type: this.activeType,
                            locale: this.activeLocale.value,
                            value: this.itemData.value,
                            title: this.itemData.title ?? '',
                            id: this.itemData.id ?? '',
                        });
                        break;
                    case 'custom':
                        this.$emit('updated', {
                            type: this.activeType,
                            title: this.customTitle,
                        });
                        break;
                }
            },
        }
    }
</script>
