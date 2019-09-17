<template>
    <el-select v-model="value" placeholder="Select">
        <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
        </el-option>
    </el-select>
</template>

<script>
    export default {
        data() {
            return {
                id: '',
                name: '',
                surname: '',
                middlename: '',
                phone: '',
                isDelete: false,
                options: [{
                    value: 'Алексей',
                    label: this.value
                }, {
                    value: 'Андрей',
                    label: this.value
                }],
                value: ''
            }
        }
    }
</script>