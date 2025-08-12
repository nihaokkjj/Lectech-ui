<script setup></script>

<template>
    <!-- 相关文章1 -->
                        <div class="discussion-card p-4">
                            <div class="flex flex-col md:flex-row">
                                <div class="flex-1 min-w-0">
                                    <h4 class="title text-base font-bold mb-1 hover:text-primary transition-colors">
                                        <a href="P-ARTICLE_DETAIL.html?article_id=1" id="related-article-1">LLM大模型微调技术实战：从理论到实践</a>
                                    </h4>
                                    <p class="text-gray-600 text-sm mb-2 line-clamp-2" style="text-align: left;">详细介绍了大型语言模型(LLM)的微调技术，包括LoRA、QLoRA等低资源微调方法，以及如何在消费级GPU上进行有效的模型定制训练。</p>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="作者头像" class="w-5 h-5 rounded-full object-cover">
                                            <span class="text-gray-700 text-xs ml-2">Sarah Lin</span>
                                        </div>
                                        <div class="flex items-center space-x-3 text-gray-500 text-xs">
                                            <span><i class="far fa-eye mr-1"></i>3.1k</span>
                                            <span><i class="far fa-thumbs-up mr-1"></i>458</span>
                                            <span><i class="far fa-comment mr-1"></i>72</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
</template>

<style lang="scss" scoped>

@import '../../../style.scss';

.discussion-card {
  border-radius: $rounded-xl;
  box-shadow: $shadow-card;
  background-color: #fff;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: $shadow-hover;
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  h4 {
    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        color: $primary;
      }
    }
  }

  img {
    border-radius: 50%;
  }

  .text-gray-600 {
    color: $gray-600;
  }

  .text-gray-700 {
    color: $gray-700;
  }

  .text-gray-500 {
    color: $gray-500;
  }

  .text-xs {
    font-size: $text-xs;
  }

  .text-sm {
    font-size: $text-sm;
  }

  .text-base {
    font-size: $text-base;
  }

  .font-bold {
    font-weight: 700;
  }

  .transition-colors {
    transition: color 0.2s ease;
  }

  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .md\:flex-row {
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  .flex-1 {
    flex: 1;
  }

  .min-w-0 {
    min-width: 0;
  }

  .items-center {
    align-items: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .space-x-3 > :not([hidden]) ~ :not([hidden]) {
    margin-left: 0.75rem;
  }

  .mb-1 {
    margin-bottom: 0.25rem;
  }

  .mb-2 {
    margin-bottom: 0.5rem;
  }

  .ml-2 {
    margin-left: 0.5rem;
  }

  .w-5 {
    width: 1.25rem;
  }

  .h-5 {
    height: 1.25rem;
  }

  .rounded-full {
    border-radius: 50%;
  }

  .object-cover {
    object-fit: cover;
  }

  .p-4 {
    padding: 1rem;
  }
  .title{
    text-align: left;
    color: black
  }
}
</style>