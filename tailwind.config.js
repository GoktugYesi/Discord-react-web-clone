/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backdrop: "#313338",
        activeBG: "#35373c",
        discordGreen: "#23a55a",
        discordDarkGreen: "#1a6334",
        discordBlue: "#5865f2",
        dcdarkbg: "#1e1f22",
        profileBG: "#232428",
        link: "#b8b9bf",
        channelBg: "#2b2d31",
        channelWorld: "#41434a",
        channelIcon: "#82858f",
        chatlink: "#00a8fc",
      },
      width: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [],
}
