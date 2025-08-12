<script setup></script>

<template>
    <!-- 评论1 -->
                        <div id="comment-1" class="discussion-card p-4">
                            <div class="flex">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="评论者头像" class="w-10 h-10 rounded-full object-cover">
                                <div class="ml-3 flex-1">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <h4 class="font-medium text-gray-800">Sarah Lin</h4>
                                            <span class="text-xs text-gray-500 ml-2">2023-10-22 14:35</span>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <button id="like-comment-1" class="text-gray-500 hover:text-primary">
                                                <i class="far fa-thumbs-up mr-1"></i>45
                                            </button>
                                            <button id="reply-comment-1" class="text-gray-500 hover:text-primary">
                                                <i class="far fa-comment mr-1"></i>回复
                                            </button>
                                        </div>
                                    </div>
                                    <div class="mcomment text-gray-700 mt-2">
                                        最近在尝试使用LoRA方法微调Llama 2模型，在消费级GPU上也能取得不错的效果。有没有人尝试过在更小的参数规模（7B或13B）上做领域适应的微调？想了解一下大家的经验和最佳实践。
                                    </div>
                                    
                                    <!-- 回复区域 -->
                                    <div class="commenta mt-3 pl-4 border-l-2 border-gray-200">
                                        <!-- 回复1 -->
                                        <div id="reply-1-1" class="mb-3" style="text-align: left;">
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center">
                                                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="回复者头像" class="w-6 h-6 rounded-full object-cover">
                                                    <h5 class="font-medium text-gray-800 text-sm ml-2">Alex Zhang</h5>
                                                    <span class="text-xs text-gray-500 ml-2">2023-10-22 15:10</span>
                                                </div>
                                                <div class="flex items-center space-x-2">
                                                    <button id="like-reply-1-1" class="text-gray-500 hover:text-primary text-xs">
                                                        <i class="far fa-thumbs-up mr-1"></i>12
                                                    </button>
                                                    <button id="reply-to-reply-1-1" class="text-gray-500 hover:text-primary text-xs">
                                                        <i class="far fa-comment mr-1"></i>回复
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="text-gray-700 text-sm mt-1">
                                                我最近在7B模型上做了医疗领域的微调，使用QLoRA方法，4位量化后在单张RTX 3090上就能跑。关键是准备高质量的领域数据，我发现指令微调比继续预训练效果更好，特别是对于特定任务。
                                            </div>
                                        </div>
                                        
                                        <!-- 回复2 -->
                                        <div id="reply-1-2" class="mb-3" style="text-align: left;">
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center">
                                                    <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="回复者头像" class="w-6 h-6 rounded-full object-cover">
                                                    <h5 class="font-medium text-gray-800 text-sm ml-2">Michael Wu</h5>
                                                    <span class="text-xs text-gray-500 ml-2">2023-10-22 16:25</span>
                                                </div>
                                                <div class="flex items-center space-x-2">
                                                    <button id="like-reply-1-2" class="text-gray-500 hover:text-primary text-xs">
                                                        <i class="far fa-thumbs-up mr-1"></i>8
                                                    </button>
                                                    <button id="reply-to-reply-1-2" class="text-gray-500 hover:text-primary text-xs">
                                                        <i class="far fa-comment mr-1"></i>回复
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="text-gray-700 text-sm mt-1">
                                                补充一点，如果是做垂直领域的微调，建议先用领域数据做继续预训练，再用任务数据做指令微调，这样效果会更好。我们在金融领域试过这种方法，效果提升明显。
                                            </div>
                                        </div>
                                        
                                        <!-- 回复输入框 - 默认隐藏 -->
                                        <div id="reply-input-1" class="hidden mt-2">
                                            <div class="flex">
                                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" alt="用户头像" class="w-6 h-6 rounded-full object-cover">
                                                <div class="ml-2 flex-1">
                                                    <textarea class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" rows="2" placeholder="回复 Sarah Lin..."></textarea>
                                                    <div class="flex justify-end mt-1">
                                                        <button id="cancel-reply-1" class="text-gray-500 hover:text-gray-700 text-xs mr-2">
                                                            取消
                                                        </button>
                                                        <button id="submit-reply-1" class="bg-primary hover:bg-secondary text-white px-3 py-1 rounded-lg text-xs">
                                                            回复
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
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
  margin-bottom: 1rem;

  &:hover {
    box-shadow: $shadow-hover;
  }

  .w-10 {
    width: 2.5rem; // 10 * 0.25rem
  }

  .h-10 {
    height: 2.5rem; // 10 * 0.25rem
  }

  .w-6 {
    width: 1.5rem; // 6 * 0.25rem
  }

  .h-6 {
    height: 1.5rem; // 6 * 0.25rem
  }

  .rounded-full {
    border-radius: 50%;
  }

  .object-cover {
    object-fit: cover;
  }

  .ml-3 {
    margin-left: 0.75rem; // 3 * 0.25rem
  }

  .ml-2 {
    margin-left: 0.5rem; // 2 * 0.25rem
  }

  .mt-2 {
    margin-top: 0.5rem; // 2 * 0.25rem
  }

  .mt-3 {
    margin-top: 0.75rem; // 3 * 0.25rem
  }

  .mb-3 {
    margin-bottom: 0.75rem; // 3 * 0.25rem
  }

  .ml-4 {
    margin-left: 1rem; // 4 * 0.25rem
  }

  .mt-1 {
    margin-top: 0.25rem; // 1 * 0.25rem
  }

  .mr-1 {
    margin-right: 0.25rem; // 1 * 0.25rem
  }

  .mr-2 {
    margin-right: 0.5rem; // 2 * 0.25rem
  }

  .p-4 {
    padding: 1rem; // 4 * 0.25rem
  }

  .p-2 {
    padding: 0.5rem; // 2 * 0.25rem
  }

  .pl-4 {
    padding-left: 1rem; // 4 * 0.25rem
  }

  .px-3 {
    padding-left: 0.75rem; // 3 * 0.25rem
    padding-right: 0.75rem; // 3 * 0.25rem
  }

  .py-1 {
    padding-top: 0.25rem; // 1 * 0.25rem
    padding-bottom: 0.25rem; // 1 * 0.25rem
  }

  .flex {
    display: flex;
  }

  .flex-1 {
    flex: 1;
  }

  .items-center {
    align-items: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .space-x-2 > :not([hidden]) ~ :not([hidden]) {
    margin-left: 0.5rem; // 2 * 0.25rem
  }

  .border-l-2 {
    border-left-width: 2px;
  }

  .border-gray-200 {
    border-color: $gray-200;
  }

  .border {
    border-width: 1px;
  }

  .border-gray-300 {
    border-color: $gray-300;
  }

  .rounded-lg {
    border-radius: 0.5rem;
  }

  .text-gray-800 {
    color: $gray-800;
  }

  .text-gray-700 {
    color: $gray-700;
  }

  .text-gray-500 {
    color: $gray-500;
  }

  .text-xs {
    font-size: $text-xs; // 0.75rem
  }

  .text-sm {
    font-size: $text-sm; // 0.875rem
  }

  .font-medium {
    font-weight: 500;
  }

  .resize-none {
    resize: none;
  }

  .focus\:outline-none:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  .focus\:ring-2:focus {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }

  .focus\:ring-primary:focus {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgba(79, 70, 229, var(--tw-ring-opacity)); // $primary
  }

  .bg-primary {
    background-color: $primary;
  }

  .hover\:bg-secondary:hover {
    background-color: $secondary;
  }

  .text-white {
    color: #fff;
  }

  .hover\:text-primary:hover {
    color: $primary;
  }

  .hover\:text-gray-700:hover {
    color: $gray-700;
  }

  .w-full {
    width: 100%;
  }

  .hidden {
    display: none;
  }

  textarea {
    font-family: $font-sans;
    
    &::placeholder {
      color: $gray-400;
    }
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: $font-sans;
  }
  .commenta{
    border-left-style: solid;
  }
  .mcomment{ 
    text-align: left;
  }
}
</style>