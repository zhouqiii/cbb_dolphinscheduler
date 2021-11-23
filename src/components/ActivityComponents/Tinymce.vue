<template>
  <div class="tinymce_container">
    <editor
      id="tinymce"
      v-model="tinymceContent"
      :init="editorInit"
    ></editor>
  </div>
</template>
<script>
// 引入组件
import tinymce from 'tinymce/tinymce';
import Editor from '@tinymce/tinymce-vue';
import 'tinymce/icons/default/icons';
import 'tinymce/themes/silver';
// 引入富文本编辑器主题的js和css
import 'tinymce/themes/silver/theme.min';
import 'tinymce/skins/ui/oxide/skin.min.css';
// 扩展插件
import 'tinymce/plugins/image';// 上传图片
import 'tinymce/plugins/link';// 上传图片
import 'tinymce/plugins/code';
import 'tinymce/plugins/table';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/wordcount'; // 字数统计插件
import 'tinymce/plugins/media';// 插入视频插件
import 'tinymce/plugins/template';// 模板插件
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/preview';

export default {
  name: 'Tinymce',
  components: {
    Editor,
  },
  data() {
    return {
      tinymceContent: '请输入内容',
      editorInit: {
        language_url: '/tinymce/zh_CN.js',
        language: 'zh_CN',
        skin_url: '/tinymce/skins/ui/oxide',
        height: 300,
        /* tinymce 通过添加扩展插件 plugins 的方式来添加功能 image时上传图片 link是超链接 配上上面import引入插件 */
        plugins: 'link lists image code table wordcount template media fullscreen preview paste',
        toolbar: 'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
        branding: false,
      },
    };
  },
  mounted() {
    tinymce.init({});
  },
};
</script>
