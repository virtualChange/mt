<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>{{$store.state.address}}美团</el-breadcrumb-item>
        <el-breadcrumb-item>{{$store.state.address}}美食</el-breadcrumb-item>
        <el-breadcrumb-item>{{$route.params.name}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
export default {

}
</script>
