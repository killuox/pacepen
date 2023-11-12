import { writable } from 'svelte/store';

const templateList = [
    {
        name: 'Default',
        isActive: true,
    },
    {
        name: 'Studying',
        isActive: false,
    },
    {
        name: 'Health',
        isActive: false,
    },
    {
        name: 'Habit',
        isActive: false,
    },
    {
        name: 'Mood',
        isActive: false,
    },
];

export const templates = writable(templateList);

type Template = typeof templateList[0];

export const currentTemplate = writable(templateList[0]);

export const updateCurrentTemplate = (template: Template) => {
    currentTemplate.update(() => template);

    // add isActive to templates
    templates.update((list) => {
        return list.map((item) => {
            if (item.name === template.name) {
                return {
                    ...item,
                    isActive: true,
                };
            } else {
                return {
                    ...item,
                    isActive: false,
                };
            }
        });
    });
}