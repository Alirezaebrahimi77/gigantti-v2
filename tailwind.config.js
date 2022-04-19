module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        giganttiPink: "#E82F8A",
        giganttiGreenIcon: "#6B9B37",
        giganttiGrayText: "#242424",
        giganttiCartBgRight: "#399547",
        giganttiCartBgLeft: "#71B642",
        giganttiCartBg: "rgb(113,182,66)",
        giganttiCartBgGradient: "linear-gradient(90deg, rgba(113,182,66,1) 39%, rgba(57,149,71,1) 100%)",
        giganttiCategoryText: "#11155C"
      },
      fontFamily: {
        customOpenSans: ['openSans'],
        customOpenSansRegular: ['openSansRegular'],
        customHotjar: ['hotjar'],
        customHeadlineRegular: ['headlineRegular'],
        customBodyTextRegular: ['bodyTextRegular'],
        customBodyTextDemiBold: ['bodyTextDemiBold']
      },
      transitionProperty: {
        height: 'height'
      }
    },
    
  },
  plugins: [],
}