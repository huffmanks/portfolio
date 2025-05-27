import fs from "fs";

const data = [
  {
    title: "Pocket Player",
    description: "Android app to locally store and watch videos offline.",
    imgSrc: "/assets/images/projects/pocket-player.jpg",
    repoLink: "https://github.com/huffmanks/pocket-player",
    demoLink: "https://github.com/huffmanks/pocket-player/releases",
    supportsAndroid: true,
  },
  {
    title: "Web tools",
    description: "Web app with tools to help speed web development.",
    imgSrc: "/assets/images/projects/tools.jpg",
    repoLink: "https://github.com/huffmanks/tools-nextjs",
    demoLink: "https://tools.huffmanks.com",
  },
  {
    title: "CodeShare",
    description: "CodeShare is your go-to platform for clear, practical coding guides and reusable code snippets.",
    imgSrc: "/assets/images/projects/code-share.jpg",
    repoLink: "https://github.com/huffmanks/code-share",
    demoLink: "https://codeshare.huffmanks.com",
  },
  {
    title: "Email builder",
    description: "Internal tool for generating MJML-based emails and company-specific email signatures.",
    imgSrc: "/assets/images/projects/email-builder.jpg",
    demoLink: "https://email.huffmanks.com",
  },
  {
    title: "Wofford Homepage",
    description: "Visual design concept for the Wofford College homepage.",
    imgSrc: "/assets/images/projects/wofford-homepage.jpg",
    demoLink: "https://huffmanks.com/projects/design/wofford-homepage",
    isDesign: true,
  },
  {
    title: "Nostra",
    description: "Static design mockup for an e-commerce landing page.",
    imgSrc: "/assets/images/projects/ecommerce-page.jpg",
    demoLink: "https://huffmanks.com/projects/design/ecommerce-page",
    isDesign: true,
  },
  {
    title: "Funflow",
    description: "Concept landing page for a fictional company or startup.",
    imgSrc: "/assets/images/projects/landing-demo.jpg",
    demoLink: "https://huffmanks.com/projects/design/landing-demo",
    isDesign: true,
  },
  {
    title: "Protion",
    description: "UI design for a SaaS dashboard with clean, modern layout.",
    imgSrc: "/assets/images/projects/saas-dashboard.jpg",
    demoLink: "https://huffmanks.com/projects/design/saas-dashboard",
    isDesign: true,
  },
  {
    title: "Quiz App",
    description: "Take a quiz with various categories and difficulties to choose from.",
    imgSrc: "/assets/images/projects/quiz-app.jpg",
    demoLink: "https://huffmanks.com/projects/apps/quiz",
  },
  {
    title: "Weather App",
    description: "Quickly check current weather by entering a city name or ZIP code.",
    imgSrc: "/assets/images/projects/weather-app.jpg",
    demoLink: "https://huffmanks.com/projects/apps/weather",
  },
  {
    title: "mock-api",
    description: "Mock API for serving test data like users and products.",
    repoLink: "https://github.com/huffmanks/mock-api",
  },
  {
    title: "multi-qr-code-generator",
    description: "A simple Node.js tool to quickly generate multiple QR codes in bulk.",
    repoLink: "https://github.com/huffmanks/multi-qr-code-generator",
  },
  {
    title: "Diff tool",
    description: "Simple side-by-side text comparison tool for spotting changes quickly and clearly.",
    // imgSrc: "",
    repoLink: "https://github.com/huffmanks/diff-tool",
    // demoLink: "https://diff.huffmanks.com",
  },
  {
    title: "Palette Paste",
    description: "VS Code extension for inserting structured, repetitive text patterns using custom templates and sequences.",
    repoLink: "https://github.com/huffmanks/palette-paste",
    // demoLink: "", // VS Code Marketplace,
  },
];

const output = data.map((item) => {
  const htmlString = `<div class="overflow-hidden rounded-sm">
    ${item.imgSrc ? `<img class="mb-2 w-full object-cover rounded-sm" src="${item.imgSrc}" alt="${item.title}" />` : ""}
    <div class="pb-2">
        <h3 class="mb-1 text-gray-800 dark:text-neutral-200">${item.title}</h3>
        <p class="mb-4 text-xs text-gray-600 dark:text-neutral-400 line-clamp-2">${item.description}</p>
        <div class="flex items-center gap-2">
            ${
              item.repoLink
                ? `<a href="${item.repoLink}" class="flex items-center gap-x-1 btn btn-outline">
                  <svg class="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <span class="text-xs">Repo</span>
                </a>`
                : ""
            }
            ${
              item.demoLink
                ? `<a href="${item.demoLink}" class="flex items-center gap-x-1 btn btn-outline">
                  ${
                    item.supportsAndroid
                      ? `<svg class="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <title>Android</title>
                            <path fill="currentColor" fill-rule="evenodd" d="M11 .371a.25.25 0 0 0-.437-.243l-.643 1.16a3.5 3.5 0 0 0-.996-.265c-.195-.022-.428-.022-.892-.022s-.697 0-.892.022a3.5 3.5 0 0 0-.996.265L5.5.128a.25.25 0 1 0-.437.243L5.7 1.52a3.52 3.52 0 0 0-1.65 2.59c-.022.195-.022.428-.022.892h8c0-.464 0-.697-.022-.892a3.49 3.49 0 0 0-1.65-2.59l.637-1.15zm-4.97 3.13a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m4.5-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0" clip-rule="evenodd" />
                            <path fill="currentColor" d="M1 6a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0zm12 0a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0zM4 6v6a1 1 0 0 0 1 1v2a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-2a1 1 0 0 0 1-1V6z" />
                        </svg>`
                      : `<svg class="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <title>Display screen</title>
                            <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M14 2h-4c-3.28 0-4.919 0-6.081.814a4.5 4.5 0 0 0-1.105 1.105C2 5.08 2 6.72 2 10s0 4.919.814 6.081a4.5 4.5 0 0 0 1.105 1.105C5.08 18 6.72 18 10 18h4c3.28 0 4.919 0 6.081-.814a4.5 4.5 0 0 0 1.105-1.105C22 14.92 22 13.28 22 10s0-4.919-.814-6.081a4.5 4.5 0 0 0-1.105-1.105C18.92 2 17.28 2 14 2m-3 13h2m1.5 7l-.316-.419c-.71-.944-.887-2.387-.437-3.581M9.5 22l.316-.419c.71-.944.887-2.387.437-3.581M7 22h10"
                            color="currentColor"
                            />
                        </svg>`
                  }
                  <span class="text-xs">${item.isDesign ? "Design" : item.supportsAndroid ? "APK" : "Demo"}</span>
                </a>`
                : ""
            }
        </div>
    </div>
</div>`;
  return htmlString;
});

const markdown = data.map((item) => {
  return `### ${item.title}\n\n${item.description}\n\n${item.repoLink ? `- [Repo](${item.repoLink})` : ""}${
    item.demoLink ? `\n- [${item.isDesign ? "Design" : item.supportsAndroid ? "APK" : "Demo"}](${item.demoLink})` : ""
  }
  `;
});

fs.writeFileSync("output.html", output.join("\n"));
fs.writeFileSync("markdown.md", markdown.join("\n"));
