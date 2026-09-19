import localFont from "next/font/local";

export const plaax = localFont({
  src: [
    { path: "./fonts/Plaax5Trial-25-Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/Plaax5Trial-35-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/Plaax5Trial-45-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-plaax",
  display: "swap",
});
