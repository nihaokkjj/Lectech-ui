# Vue 3 + TypeScript + Vite

# 文件划分

src/: 这是应用程序的核心代码所在。

- assets 静态资源，如图片、字体、全局CSS

- components 可复用的UI组件

- router/: 定义URL路由，将请求映射到相应的控制器方法。例如，web.js (for frontend routes), api.js (for API routes)。

- utils 通用工具函数, 常量等

- services/: 包含业务逻辑层，可以被多个控制器复用。例如，userService.js, postService.js。

## 整体结构

forum-frontend/
├── public/                 # 静态资源，如 index.html, favicon.ico
│   ├── index.html
│   └── ...
├── src/                    # 源代码
│   ├── assets/             # 静态资源，如图片、字体、全局CSS
│   │   ├── images/
│   │   ├── styles/
│   │   └── fonts/
│   ├── components/         # 可复用的UI组件（如：按钮、卡片、头像等）
│   │   ├── Button/
│   │   ├── Card/
│   │   └── ...
│   ├── pages/              # 各个独立的页面组件，对应你的任务列表
│   │   ├── HomePage/         # 对应“首页”
│   │   │   ├── index.jsx
│   │   │   └── style.css
│   │   ├── ColumnDetailPage/ # 对应“专栏 / 详情页”
│   │   │   ├── index.jsx
│   │   │   └── style.css
│   │   ├── ArticleDetailPage/ # 对应“文章 / 详情页”
│   │   │   ├── index.jsx
│   │   │   └── style.css
│   │   ├── TopicPage/        # 对应“话题页”
│   │   │   ├── index.jsx
│   │   │   └── style.css
│   │   ├── DiscussionPage/   # 对应“话题 / 参与讨论页”或发帖页面
│   │   │   ├── index.jsx
│   │   │   └── style.css
│   │   ├── RankingPage/      # 对应“文章排行榜”
│   │   │   ├── index.jsx
│   │   │   └── style.css
│   │   ├── AuthPage/         # 对应“登录 / 注册”
│   │   │   ├── index.jsx
│   │   │   └── style.css
│   │   └── NotFoundPage/     # 404页面
│   ├── router/             # 路由配置（对应“路由实现”）
│   │   └── index.js        # 定义所有前端路由
│   ├── services/           # API服务层，封装后端API调用
│   │   ├── auth.js
│   │   ├── post.js
│   │   ├── user.js
│   │   └── ...
│   ├── utils/              # 通用工具函数、常量等
│   │   └── helpers.js
│   ├── App.jsx             # 应用程序的根组件
│   └── index.js            # 应用程序的入口文件
├── package.json            # 项目依赖和脚本
├── .env                    # 环境变量
└── README.md