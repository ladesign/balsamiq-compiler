const V4_TO_V6_MAP = {
  // Outline icons (-o suffix in FA4)
  "calendar-check-o": { class: "fa-regular", name: "calendar-check" },
  "check-square-o": { class: "fa-regular", name: "square-check" },
  "pencil-square-o": { class: "fa-regular", name: "pen-to-square" },
  "trash-o": { class: "fa-regular", name: "trash-can" },
  "file-o": { class: "fa-regular", name: "file" },
  "file-text-o": { class: "fa-regular", name: "file-lines" },
  "folder-o": { class: "fa-regular", name: "folder" },
  "folder-open-o": { class: "fa-regular", name: "folder-open" },
  "star-o": { class: "fa-regular", name: "star" },
  "heart-o": { class: "fa-regular", name: "heart" },
  "bell-o": { class: "fa-regular", name: "bell" },
  "clock-o": { class: "fa-regular", name: "clock" },
  "comment-o": { class: "fa-regular", name: "comment" },
  "comments-o": { class: "fa-regular", name: "comments" },
  "envelope-o": { class: "fa-regular", name: "envelope" },
  "envelope-open-o": { class: "fa-regular", name: "envelope-open" },
  "hand-o-right": { class: "fa-regular", name: "hand-point-right" },
  "hand-o-left": { class: "fa-regular", name: "hand-point-left" },
  "hand-o-up": { class: "fa-regular", name: "hand-point-up" },
  "hand-o-down": { class: "fa-regular", name: "hand-point-down" },
  "thumbs-o-up": { class: "fa-regular", name: "thumbs-up" },
  "thumbs-o-down": { class: "fa-regular", name: "thumbs-down" },
  "square-o": { class: "fa-regular", name: "square" },
  "circle-o": { class: "fa-regular", name: "circle" },
  "dot-circle-o": { class: "fa-regular", name: "circle-dot" },
  "lightbulb-o": { class: "fa-regular", name: "lightbulb" },
  "smile-o": { class: "fa-regular", name: "face-smile" },
  "frown-o": { class: "fa-regular", name: "face-frown" },
  "meh-o": { class: "fa-regular", name: "face-meh" },
  "user-o": { class: "fa-regular", name: "user" },
  "id-card-o": { class: "fa-regular", name: "id-card" },
  "image-o": { class: "fa-regular", name: "image" },
  "picture-o": { class: "fa-regular", name: "image" },
  "play-circle-o": { class: "fa-regular", name: "circle-play" },

  // Solid icons renaming or mapping
  "chevron-circle-right": { class: "fa-solid", name: "circle-chevron-right" },
  "chevron-circle-left": { class: "fa-solid", name: "circle-chevron-left" },
  "chevron-circle-up": { class: "fa-solid", name: "circle-chevron-up" },
  "chevron-circle-down": { class: "fa-solid", name: "circle-chevron-down" },
  "arrow-circle-right": { class: "fa-solid", name: "circle-arrow-right" },
  "arrow-circle-left": { class: "fa-solid", name: "circle-arrow-left" },
  "arrow-circle-up": { class: "fa-solid", name: "circle-arrow-up" },
  "arrow-circle-down": { class: "fa-solid", name: "circle-arrow-down" },
  "check-circle-o": { class: "fa-regular", name: "circle-check" },
  "check-circle": { class: "fa-solid", name: "circle-check" },
  "times-circle-o": { class: "fa-regular", name: "circle-xmark" },
  "times-circle": { class: "fa-solid", name: "circle-xmark" },
  "times": { class: "fa-solid", name: "xmark" },
  "close": { class: "fa-solid", name: "xmark" },
  "remove": { class: "fa-solid", name: "xmark" },
  "pencil": { class: "fa-solid", name: "pencil" },
  "pencil-square": { class: "fa-solid", name: "pen-to-square" },
  "edit": { class: "fa-solid", name: "pen-to-square" },
  "external-link": { class: "fa-solid", name: "up-right-from-square" },
  "exclamation-triangle": { class: "fa-solid", name: "triangle-exclamation" },
  "info-circle": { class: "fa-solid", name: "circle-info" },
  "question-circle": { class: "fa-solid", name: "circle-question" },
  "exclamation-circle": { class: "fa-solid", name: "circle-exclamation" },
  "cog": { class: "fa-solid", name: "gear" },
  "cogs": { class: "fa-solid", name: "gears" },
  "refresh": { class: "fa-solid", name: "arrows-rotate" },
  "search": { class: "fa-solid", name: "magnifying-glass" },
  "sign-in": { class: "fa-solid", name: "right-to-bracket" },
  "sign-out": { class: "fa-solid", name: "right-from-bracket" },
  "home": { class: "fa-solid", name: "house" },
  "trash": { class: "fa-solid", name: "trash-can" },
  "folder-open": { class: "fa-solid", name: "folder-open" },
  "bar-chart": { class: "fa-solid", name: "chart-column" },
  "bar-chart-o": { class: "fa-regular", name: "chart-column" },
  "line-chart": { class: "fa-solid", name: "chart-line" },
  "pie-chart": { class: "fa-solid", name: "chart-pie" },
  "area-chart": { class: "fa-solid", name: "chart-area" },
  "map-marker": { class: "fa-solid", name: "location-dot" },
  "map-marker-alt": { class: "fa-solid", name: "location-dot" },
  "volume-up": { class: "fa-solid", name: "volume-high" },
  "volume-down": { class: "fa-solid", name: "volume-low" },
  "volume-off": { class: "fa-solid", name: "volume-xmark" },
  "video-camera": { class: "fa-solid", name: "video" },
  "picture-o": { class: "fa-regular", name: "image" },
  "file-text": { class: "fa-solid", name: "file-lines" },
  "file-alt": { class: "fa-solid", name: "file-lines" },
};

const BRAND_ICONS = new Set([
  "facebook", "facebook-f", "facebook-official", "facebook-square",
  "twitter", "twitter-square",
  "github", "github-alt", "github-square",
  "linkedin", "linkedin-square",
  "google", "google-plus", "google-plus-official", "google-plus-square",
  "youtube", "youtube-play", "youtube-square",
  "instagram", "pinterest", "pinterest-p", "pinterest-square",
  "skype", "android", "apple", "windows", "chrome", "firefox", "safari", "opera",
  "internet-explorer", "aws", "git", "git-square", "stack-overflow",
  "slack", "slack-hash", "whatsapp", "wordpress", "dropbox", "trello",
  "tumblr", "tumblr-square", "vimeo", "vimeo-square", "wechat", "weixin",
  "weibo", "renren", "qq", "paypal", "stripe", "amazon", "google-wallet",
  "kickstarter", "kickstarter-k", "jsfiddle", "codepen", "snapchat",
  "snapchat-ghost", "snapchat-square", "medium", "y-combinator", "hacker-news"
]);

const BRAND_RENAMES = {
  "facebook-official": "facebook",
  "facebook-square": "square-facebook",
  "twitter-square": "square-twitter",
  "github-square": "square-github",
  "linkedin-square": "square-linkedin",
  "google-plus-official": "google-plus",
  "google-plus-square": "square-google-plus",
  "youtube-play": "youtube",
  "youtube-square": "square-youtube",
  "pinterest-square": "square-pinterest",
  "tumblr-square": "square-tumblr",
  "vimeo-square": "square-vimeo",
  "git-square": "square-git",
};

export function getIconClass(iconName) {
  if (!iconName) return "fa-solid fa-circle";

  // Normalize: remove prefix "fa fa-" or "fa-" if present
  let name = iconName.trim().replace(/^fa\s+fa-/, "").replace(/^fa-/, "");

  // 1. Check direct map
  if (V4_TO_V6_MAP[name]) {
    const mapped = V4_TO_V6_MAP[name];
    return `${mapped.class} fa-${mapped.name}`;
  }

  // 2. Check brand
  if (BRAND_ICONS.has(name) || BRAND_RENAMES[name]) {
    const finalName = BRAND_RENAMES[name] || name;
    return `fa-brands fa-${finalName}`;
  }

  // 3. Auto map regular icons ending with -o
  if (name.endsWith("-o")) {
    const baseName = name.slice(0, -2);
    return `fa-regular fa-${baseName}`;
  }

  // 4. Default to solid icon with same name
  return `fa-solid fa-${name}`;
}
