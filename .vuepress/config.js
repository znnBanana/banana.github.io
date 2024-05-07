
module.exports = {
  "title": "香香的蕉",
  "description": "个人博客",
  "dest": "public",
  "autoSetBlogCategories": false,
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      // {
      //   "text": "TimeLine",
      //   "link": "/timeline/",
      //   "icon": "reco-date"
      // },
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "简介",
        "icon": "reco-message",
        "link": "/docs/theme-reco/"
      },
      {
        "text": "前端",
        "icon": "reco-message",
        "items": [
          {
            "text": "TS",
            "link": "/blogs/前端/TS/1"
          },
          {
            "text": "Vue2",
            "link": "/blogs/前端/Vue2/基础"
          }
        ]
      },
      // {
      //   "text": "Contact",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "GitHub",
      //       "link": "https://github.com/recoluan",
      //       "icon": "reco-github"
      //     }
      //   ]
      // },
      {
        "text": "其他",
        "icon": "reco-message",
        "items": [
          {
            "text": "guide",
            "link": "/blogs/other/guide"
          },
          {
            "text": "guide1",
            "link": "/blogs/other/guide1"
          }
        ]
      },
    ],
    "sidebar": {
      "/blogs/前端/TS": [
        {
          title:'TS',
          collapsable: true,
          children: ["TS/1", "TS/基础"],
        }
      ],
      "/blogs/前端/Vue2": [
        {
          title:'Vue2',
          collapsable: true,
          children: ["Vue2/基础"],
        },
      ],
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "香香的蕉",
        "desc": "Enjoy when you can, and endure when you must.",
        "link": "https://www.yuque.com/dashboard"
      }
    ],
    "logo": "/logo.gif",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "banana",
    "authorAvatar": "/author.png",
    "record": "xxxx",
    "startYear": "2024"
  },
  "markdown": {
    "lineNumbers": true
  }
}