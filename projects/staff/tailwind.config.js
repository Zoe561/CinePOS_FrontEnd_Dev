/** @type {import('tailwindcss').Config} */



module.exports = {
  purge: {
    enabled: true, // 每次編譯都觀測(若沒寫預設false則只會在正式機時才會偵測)
    content: [ // 偵測哪幾種檔案類型，其餘的會捨去
      "projects/staff/src/**/*.html",
      "projects/staff/src/**/*.scss"
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#8988FF'
      }
    },
  },
  plugins: [],
}

