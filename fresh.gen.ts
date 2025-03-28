// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_lang_custom_page from "./routes/[lang]/custom-page.tsx";
import * as $_lang_index from "./routes/[lang]/index.tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_middleware from "./routes/_middleware.ts";
import * as $_rateLimiter from "./routes/_rateLimiter.ts";
import * as $api_contact from "./routes/api/contact.ts";
import * as $api_joke from "./routes/api/joke.ts";
import * as $contact from "./routes/contact.tsx";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $contact_ContactForm from "./islands/contact/ContactForm.tsx";
import * as $homepage_CallToAction from "./islands/homepage/CallToAction.tsx";
import * as $homepage_ClientTestimonials from "./islands/homepage/ClientTestimonials.tsx";
import * as $homepage_LanguageDropdown from "./islands/homepage/LanguageDropdown.tsx";
import * as $homepage_NavbarMenu from "./islands/homepage/NavbarMenu.tsx";
import * as $homepage_StatsCount from "./islands/homepage/StatsCount.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/[lang]/custom-page.tsx": $_lang_custom_page,
    "./routes/[lang]/index.tsx": $_lang_index,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_middleware.ts": $_middleware,
    "./routes/_rateLimiter.ts": $_rateLimiter,
    "./routes/api/contact.ts": $api_contact,
    "./routes/api/joke.ts": $api_joke,
    "./routes/contact.tsx": $contact,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/contact/ContactForm.tsx": $contact_ContactForm,
    "./islands/homepage/CallToAction.tsx": $homepage_CallToAction,
    "./islands/homepage/ClientTestimonials.tsx": $homepage_ClientTestimonials,
    "./islands/homepage/LanguageDropdown.tsx": $homepage_LanguageDropdown,
    "./islands/homepage/NavbarMenu.tsx": $homepage_NavbarMenu,
    "./islands/homepage/StatsCount.tsx": $homepage_StatsCount,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
