import { createI18n } from "vue-i18n";

const messages = {
    en: {
        route_home: 'Home',
        route_contacts: 'Contact',
        route_projects: 'Projects',
        route_info: 'Information',
        route_work: 'My work',
        stack_text: 'I have no problem working with this',
    },
    cs: {
        route_home: 'Domů',
        route_contacts: 'Kontakt',
        route_projects: 'Projekty',
        route_info: "Informace",
        route_work: 'Moje práce',
        stack_text: 'S tímhle mi nedělá problém pracovat',
    }
}

const i18n = createI18n({
    legacy: false,
    locale: 'cs',
    fallbackLocale: 'en',
    messages,
})

export const getLanguage = () => {
    const language = localStorage.getItem("i18n_language")

    if (language === "cs" || language === "en") {
        i18n.global.locale.value = language
    }else{
        localStorage.setItem("i18n_language", "cs")
    }

}

type TLang='cs' | 'en'

export const changeLang = (lang: TLang) => {
  i18n.global.locale.value = lang
  localStorage.setItem("i18n_language", lang)
}

export default i18n;
