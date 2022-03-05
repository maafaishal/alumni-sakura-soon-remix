import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

import type { MetaFunction } from "remix";

import Page404 from "./components/Page404";

import styles from "./styles/app.css";

export const meta: MetaFunction = () => {
  return {
    title: "Alumni Sakura",
    description: "Situs Alumni Sakura (SMAN 1 Cikarang Utara)",
  };
};

export function links() {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "true",
    },
    { rel: "stylesheet", href: styles },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
    },
    {
      rel: "shortcut icon",
      href: "/favicon.png",
      type: "image/x-icon",
    },
  ];
}

export function CatchBoundary() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Halaman tidak ditemukan | Alumni Sakura</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Page404 />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
