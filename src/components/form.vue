<template>
    <div>
        <el-form :model='formdata' label-width="80px" class="efrom">
            <el-form-item label="ID">
                <el-input v-model="formdata.id"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      formdata: {
        id: ""
      }
    };
  },
  methods: {
      onSubmit() {
          
      }
  },
};
</script>

<style scoped　lang='scss'`> 
</style>