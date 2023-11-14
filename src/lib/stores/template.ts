import { writable } from 'svelte/store';

const templateList = [
	{
		name: 'Default',
		isActive: true,
		area: [
			['pomodoro', 'pomodoro', 'todo', 'todo', 'todo'],
			['notes', 'notes', 'todo', 'todo', 'todo'],
			['notes', 'notes', 'todo', 'todo', 'todo'],
			['notes', 'notes', 'x', 'x', 'x'],
			['z', 'z', 'x', 'x', 'x']
		]
	},
	{
		name: 'Studying',
		isActive: false,
        area: [
			['sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep'],
			['Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep'],
			['Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep'],
			['Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep'],
			['Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep']
		]
	},
	{
		name: 'Health',
		isActive: false,
        area: [
			['Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep'],
			['Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep'],
			['Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep'],
			['Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep'],
			['Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep']
		]
	},
	{
		name: 'Habit',
		isActive: false,
        area: [
			['Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep'],
			['Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep'],
			['Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep'],
			['Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep'],
			['Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep']
		]
	},
	{
		name: 'Mood',
		isActive: false,
        area: [
			['Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep'],
			['Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep'],
			['Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep'],
			['Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep'],
			['Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep']
		]
	}
];

export const templates = writable(templateList);

type Template = (typeof templateList)[0];

export const currentTemplate = writable(templateList[0]);

export const updateCurrentTemplate = (template: Template) => {
	currentTemplate.update(() => template);

	// add isActive to templates
	templates.update((list) => {
		return list.map((item) => {
			if (item.name === template.name) {
				return {
					...item,
					isActive: true
				};
			} else {
				return {
					...item,
					isActive: false
				};
			}
		});
	});
};
