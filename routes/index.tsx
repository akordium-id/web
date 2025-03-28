import Hero from "@/components/homepage/Hero.tsx";
import Header from "@/components/homepage/Header.tsx";
import ValueProposition from "@/islands/homepage/ValueProposition.tsx";
import StatsSection from "@/components/homepage/StatsSection.tsx";
import RecentWork from "@/islands/homepage/RecentWork.tsx";
import ClientTestimonials from "@/islands/homepage/ClientTestimonials.tsx";
import Services from "@/islands/homepage/Services.tsx";
import CallToAction from "@/islands/homepage/CallToAction.tsx";
import Footer from "@/components/homepage/Footer.tsx";

import { Handlers, PageProps } from "$fresh/server.ts";
import { DEFAULT_LANGUAGE } from "../utils/i18n.ts";

// Redirect ke bahasa default
export const handler: Handlers = {
  GET(req, _ctx) {
    const url = new URL(req.url);
    return Response.redirect(`${url.origin}/${DEFAULT_LANGUAGE}`, 307);
  },
};

export default function Home() {
  return null; // Tidak akan dirender karena redirect
}
