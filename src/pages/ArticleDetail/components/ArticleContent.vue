<script setup>


</script>

<template>
    <!-- 文章内容 -->
            <section id="article-content-section" class="bg-white rounded-xl shadow-card p-6 mb-6" style="text-align: left;">
                <div id="article-content" class="article-content text-gray-700" >
                    <p class="text-lg font-medium text-gray-800 mb-4">本文总结了使用Vue 3 + TypeScript + Vite搭建现代前端项目的最佳实践，包括项目结构、组件设计、状态管理、性能优化等方面的经验。</p>
                    
                    <h2 id="section-1">1. 项目初始化与配置</h2>
                    <p>使用Vite创建Vue 3 + TypeScript项目是目前最高效的方式。Vite提供了极快的开发服务器启动速度和热更新性能，特别适合现代前端开发。</p>
                    
                    <h3 id="section-1-1">1.1 创建项目</h3>
                    <p>使用以下命令快速创建一个Vue 3 + TypeScript + Vite项目：</p>
                    <pre><code>npm create vite@latest my-vue-app --template vue-ts</code></pre>
                    
                    <h3 id="section-1-2">1.2 推荐的项目结构</h3>
                    <p>一个良好的项目结构对于代码的可维护性至关重要。以下是推荐的项目结构：</p>
                    <pre><code>src/
├── assets/          # 静态资源
├── components/      # 通用组件
│   ├── common/      # 基础UI组件
│   └── business/    # 业务组件
├── composables/     # 组合式函数
├── router/          # 路由配置
├── stores/          # Pinia状态管理
├── types/           # TypeScript类型定义
├── utils/           # 工具函数
└── views/           # 页面组件</code></pre>
                    
                    <h2 id="section-2">2. TypeScript最佳实践</h2>
                    <p>TypeScript为Vue项目带来了类型安全和更好的开发体验。以下是一些TypeScript的最佳实践：</p>
                    
                    <h3 id="section-2-1">2.1 定义组件Props</h3>
                    <p>使用<code>defineProps</code>和泛型来定义组件的props：</p>
                    <pre><code>// 使用运行时声明
const props = defineProps({
  title: { type: String, required: true },
  count: { type: Number, default: 0 }
})

// 使用类型声明（推荐）
interface Props {
  title: string
  count?: number
}

const props = defineProps&lt;Props&gt;()</code></pre>
                    
                    <h3 id="section-2-2">2.2 定义组件Emits</h3>
                    <p>使用<code>defineEmits</code>来定义组件的事件：</p>
                    <pre><code>// 使用类型声明
const emit = defineEmits&lt;{
  (e: 'update', value: string): void
  (e: 'delete', id: number): void
}&gt;()</code></pre>
                    
                    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="编程示例图" class="my-6 rounded-lg shadow-md">
                    
                    <h2 id="section-3">3. 组件设计原则</h2>
                    <p>良好的组件设计是构建可维护Vue应用的关键。以下是一些组件设计原则：</p>
                    
                    <h3 id="section-3-1">3.1 单一职责原则</h3>
                    <p>每个组件应该只有一个职责，这样可以使组件更容易理解、测试和维护。</p>
                    
                    <blockquote>
                        组件应该小而专注，而不是大而全能。如果一个组件变得过于复杂，考虑将其拆分为多个小组件。
                    </blockquote>
                    
                    <h3 id="section-3-2">3.2 组件通信</h3>
                    <p>Vue 3提供了多种组件通信方式，应根据不同场景选择合适的方式：</p>
                    <ul>
                        <li>Props和Emits：适用于父子组件通信</li>
                        <li>Provide/Inject：适用于深层组件通信</li>
                        <li>Pinia：适用于全局状态管理</li>
                    </ul>
                    
                    <h2 id="section-4">4. 状态管理</h2>
                    <p>Pinia是Vue 3官方推荐的状态管理库，相比Vuex有更好的TypeScript支持和更简洁的API。</p>
                    
                    <h3 id="section-4-1">4.1 定义Store</h3>
                    <pre><code>// stores/counter.ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    name: 'Counter'
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})</code></pre>
                    
                    <h3 id="section-4-2">4.2 在组件中使用Store</h3>
                    <pre><code>import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const counter = useCounterStore()
    
    // 直接访问state
    console.log(counter.count)
    
    // 调用action
    counter.increment()
    
    return { counter }
  }
}</code></pre>
                    
                    <h2 id="section-5">5. 性能优化</h2>
                    <p>Vue 3的响应式系统已经非常高效，但仍有一些优化技巧可以进一步提升性能：</p>
                    
                    <h3 id="section-5-1">5.1 使用v-memo减少不必要的更新</h3>
<pre><code>&lt;div v-for="item in list" :key="item.id" v-memo="[item.id, item.active]"&gt;
  &#123;&#123; item.name &#125;&#125;
&lt;/div&gt;</code></pre>
                    
                    <h3 id="section-5-2">5.2 异步组件和懒加载</h3>
                    <pre><code>// 异步导入组件
const UserDashboard = defineAsyncComponent(() => 
  import('./UserDashboard.vue')
)

// 路由懒加载
const routes = [
  {
    path: '/dashboard',
    component: () => import('./views/Dashboard.vue')
  }
]</code></pre>
                    
                    <h2 id="section-6">6. 测试策略</h2>
                    <p>一个健壮的Vue应用应该有完善的测试策略，包括单元测试、组件测试和端到端测试。</p>
                    
                    <h3 id="section-6-1">6.1 单元测试</h3>
                    <p>使用Vitest进行单元测试，它与Vite完美集成，提供了极快的测试执行速度。</p>
                    
                    <h3 id="section-6-2">6.2 组件测试</h3>
                    <p>使用@vue/test-utils和Vitest进行组件测试：</p>
                    <pre><code>import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Counter from '../Counter.vue'

describe('Counter.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(Counter, {
      props: {
        initialCount: 5
      }
    })
    expect(wrapper.text()).toContain('5')
  })
})</code></pre>
                    
                    <h2 id="section-7">7. 部署与构建优化</h2>
                    <p>Vite提供了强大的构建优化功能，可以生成高效的生产代码。</p>
                    
                    <h3 id="section-7-1">7.1 构建优化</h3>
                    <ul>
                        <li>启用代码分割</li>
                        <li>使用现代浏览器构建</li>
                        <li>优化资源加载</li>
                    </ul>
                    
                    <h3 id="section-7-2">7.2 部署策略</h3>
                    <p>将构建后的应用部署到CDN或静态网站托管服务，如Vercel、Netlify或GitHub Pages。</p>
                    
                    <h2 id="section-8">8. 总结</h2>
                    <p>Vue 3 + TypeScript + Vite是目前最现代、高效的前端开发栈之一。通过遵循本文提到的最佳实践，可以构建出高性能、可维护的前端应用。</p>
                    
                    <p>希望本文对你的Vue 3项目开发有所帮助。如有问题或建议，欢迎在评论区留言讨论。</p>
                </div>
            </section>
</template>


<style lang="scss" scoped>
@import '../../../style.scss';

/* 基础组件样式 */
#article-content-section {
  background-color: white;
  border-radius: $rounded-xl;
  box-shadow: $shadow-card;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

#article-content {
  color: $gray-700;
  font-family: $font-sans;
  
  h2 {
    font-size: $text-2xl;
    font-weight: 700;
    margin: 2rem 0 1rem 0;
    color: $gray-800;
    line-height: 1.3;
    scroll-margin-top: 6rem;
  }
  
  h3 {
    font-size: $text-xl;
    font-weight: 600;
    margin: 1.5rem 0 0.75rem 0;
    color: $gray-700;
    line-height: 1.4;
    scroll-margin-top: 6rem;
  }
  
  p {
    line-height: 1.75;
    margin-bottom: 1rem;
    font-size: $text-base;
  }
  
  pre {
    background-color: $gray-800;
    color: $gray-100;
    padding: 1rem;
    border-radius: $rounded-xl;
    overflow-x: auto;
    margin: 1rem 0;
    
    code {
      font-family: 'Courier New', Consolas, Monaco, monospace;
      font-size: $text-sm;
      line-height: 1.5;
    }
  }
  
  :not(pre) > code {
    background-color: $gray-100;
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-family: 'Courier New', Consolas, Monaco, monospace;
    font-size: $text-sm;
    color: $danger;
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 1.5rem auto;
    border-radius: 0.5rem;
    box-shadow: $shadow-card;
  }
  
  blockquote {
    border-left: 4px solid $primary;
    padding: 0.75rem 1rem;
    margin: 1.5rem 0;
    background-color: $gray-50;
    font-style: italic;
    color: $gray-700;
    border-radius: 0 0.25rem 0.25rem 0;
  }
  
  ul {
    list-style-type: disc;
    margin: 1rem 0;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
      line-height: 1.6;
    }
  }
}

/* Tailwind CSS 类样式定义 */
.bg-white {
  background-color: white;
}

.rounded-xl {
  border-radius: $rounded-xl;
}

.shadow-card {
  box-shadow: $shadow-card;
}

.p-6 {
  padding: 1.5rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}


.text-gray-700 {
  color: $gray-700;
}

.text-lg {
  font-size: $text-lg;
}

.font-medium {
  font-weight: 500;
}

.text-gray-800 {
  color: $gray-800;
}

.mb-4 {
  margin-bottom: 1rem;
}

.my-6 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.shadow-md {
  box-shadow: $shadow-card;
}

/* 响应式设计 */
@media (max-width: 768px) {
  #article-content-section {
    padding: 1rem;
  }
  
  #article-content {
    h2 {
      font-size: $text-xl;
    }
    
    h3 {
      font-size: $text-lg;
    }
    
    p {
      font-size: $text-sm;
    }
    
    pre code {
      font-size: $text-xs;
    }
  }
  
  .p-6 {
    padding: 1rem;
  }
}
</style>
