module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "Intio Labs", // Site title.
  siteTitleAlt: "Intio Labs", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://intiolabs.com", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Int(io) Labs create custom applications and technology based solutions that help our clients innovate and grow.",
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Saitama", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "USA", // User location to display in the author segment.
  userAvatar: "/profiles/m3.png", // User avatar to display in the author segment.
  userDescription: "Saitama (サイタマ, Saitama) is the main protagonist of One-Punch Man and the most powerful hero alive. Saitama faces a self-imposed existential crisis, as he is now too powerful to gain any thrill from his deeds.",
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:michael@intiolabs.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © " + new Date().getFullYear() + " Intio Labs, LLC"
};
