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
			title: "Classic Todo App",
			lists: {
				title: "Lists",
				add: "Add list"
				},
			tasks: {
				addButton: "Add Task",
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
			tasks: {
				addButton: "Lägg till uppgift",
				addFormLabel: "Vad vill du gö?",
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