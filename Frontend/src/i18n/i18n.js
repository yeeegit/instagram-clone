import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en";
import es from "./locales/es";
import tr from "./locales/tr";

const resources = {
  en: { translation: en },
  es: { translation: es },
  tr: { translation: tr },
};

/*  
  If some components are not working as expected its mostly because nesting, use 'Trans' component from i18n for translating

  for example

  ---Login.jsx Example---
<p className="text-sm mt-4">
  <Trans i18nKey="noAccount" components={{ signUp: <Link to="/register" className="text-blue-500 hover:underline" /> }} />
</p>

  en.js ===> `noAccount: "Don't have an account? <signUp>Sign Up</signUp>",`

  Current Login.jsx
<p className="text-sm mt-4">
  {t("noAccount")}
    <Link to="/register" className="text-blue-500 hover:underline">
      {t("signUp")}
    </Link>
</p>

  en.js ===> `noAccount: "Don't have an account?",`

*/ 
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
