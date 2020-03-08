import i18next from 'i18next';

i18next
  .init({
    interpolation: {
      // React already does escaping
      escapeValue: false,
    },
    lng: 'en',
    resources: {
      en: {
        translation: {
			title: "Sellpy Todo App",
			lists: {
				title: "Lists",
				add: "Add list"
				},
			todos: {
				addButton: "Add Todo",
				addFormLabel: "What do you want to do?",
				clearFinished: "Clear finished",
			},
			general: {
				remove: "Remove",
				edit: "Edit",
				save: "Save"
			}
		  
        },
      },
      sv: {
        translation: {
			title: "Klassisk Att-Göra App",
			lists: {
				title: "Listor",
				addButton: "Lägg till lista"
				},
			todos: {
				addButton: "Lägg till uppgift",
				addFormLabel: "Vad vill du göra?",
				clearFinished: "Rensa avklarade",
			},
			general: {
				remove: "Ta bort",
				edit: "Ändra",
				save: "Spara"

			}
        },
      },
    },
  })

export default i18next