<script setup></script>

<template>
    <!-- 底部版权信息 -->
    <footer id="main-footer" class="main-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-branding">
                    <div class="brand-logo">
                        <span class="brand-primary">lec</span>
                        <span class="brand-secondary">tech</span>
                    </div>
                    <p class="brand-description">专注于技术知识分享、交流与成长的论坛平台</p>
                </div>
                <div class="footer-links">
                    <div class="link-column">
                        <h4 class="link-title">关于我们</h4>
                        <ul class="link-list">
                            <li><a href="#" class="link-item">平台介绍</a></li>
                            <li><a href="#" class="link-item">联系我们</a></li>
                            <li><a href="#" class="link-item">加入我们</a></li>
                        </ul>
                    </div>
                    <div class="link-column">
                        <h4 class="link-title">帮助中心</h4>
                        <ul class="link-list">
                            <li><a href="#" class="link-item">常见问题</a></li>
                            <li><a href="#" class="link-item">用户指南</a></li>
                            <li><a href="#" class="link-item">内容规范</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-divider">
                <p class="copyright-text">© 2023 lectech. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@import '../../../style.scss';

.main-footer {
  background-color: white;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-top: 2rem;
}

.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.footer-branding {
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
}

.brand-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
}

.brand-primary {
  color: $primary;
  font-size: $text-xl;
  font-weight: bold;
  margin-right: 0.25rem;
}

.brand-secondary {
  color: $gray-800;
  font-size: $text-xl;
  font-weight: bold;
}

.brand-description {
  color: $gray-500;
  font-size: $text-sm;
  margin-top: 0.5rem;
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
}

.footer-links {
  display: flex;
  gap: 2rem;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
}

.link-column {
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
}

.link-title {
  color: $gray-800;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.link-item {
  color: $gray-500;
  font-size: $text-sm;
  text-decoration: none;
  display: block;
  margin-bottom: 0.25rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:hover {
    color: $primary;
  }
}

.footer-divider {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid $gray-200;
  text-align: center;
}

.copyright-text {
  color: $gray-500;
  font-size: $text-sm;
}
</style>