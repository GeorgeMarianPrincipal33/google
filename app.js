var navigation = new Vue({
    el: '#topnav',
    data: {
      images: "Images",
      login: "Sign in",
      homepage: "https://mail.google.com/mail/&ogbl"
    }
  })
  
var center = new Vue({
    el: '#center',
    data: {
      imgSrc: "resources/Google_2015_logo.svg.png",
      search: "Google Search",
      lucky: "I'm feeling lucky",
      languages: "Google offered in"
    }
})

var footer = new Vue({
    el: '#footer',
    data: {
    country: "Romania",
      about: "About",
      aboutLink: "https://about.google/?utm_source=google-RO&utm_medium=referral&utm_campaign=hp-footer&fg=1",
      adds: "Advertising",
      addsLink: "https://ads.google.com/intl/ro_ro/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1",
      business: "Business",
      businessLink: "https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none",
      hsw: "How Search Works",
      hswLink: "https://www.google.com/search/howsearchworks/?fg=1",
      privacy: "Privacy",
      privacyLink: "https://policies.google.com/privacy?hl=ro&fg=1",
      terms: "Terms",
      termsLink: "https://policies.google.com/terms?hl=ro&fg=1",
      settings: "Settings",
    }
})