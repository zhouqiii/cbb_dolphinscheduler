<template>
  <div>
    <tinymce></tinymce>
    <div>
      <el-button type="primary" @click="dialogVisible = true">上传图片</el-button>
      <el-dialog
        :visible.sync="dialogVisible"
        width="30%"
        :destroy-on-close="true"
      >
        <el-upload
          action="#"
          list-type="picture-card"
          :auto-upload="false"
          :multiple="true"
          :file-list="fileList"
          :show-file-list="true"
          :http-request="myUpload"
        >
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{file}">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url" alt=""
            >
            <span class="el-upload-list__item-actions">
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
        </el-upload>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleClose">上 传</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import Tinymce from '../components/ActivityComponents/Tinymce.vue';

export default {
  name: 'TinymceText',
  components: {
    Tinymce,
  },
  data() {
    return {
      fileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
    };
  },
  methods: {
    handleClose() {
      alert(1);
      console.log(this.fileList, '1111');
      this.dialogVisible = false;
    },
    handleRemove(file) {
      console.log(file);
    },
    myUpload(content) {
      console.log(content, '1111111');
    },
  },
  mounted() {
  },
};
</script>
