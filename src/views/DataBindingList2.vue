<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카타고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product,i) in productList">
                    <td>{{ product.product_name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.delivery_price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default{
    data(){
        return {
            productList:[]
        }
    },
    created(){
        this.getList();
    },
    methods:{
        async getList(){
            this.productList = await this.$api('https://8a7301c3-3a8c-403b-a98e-3925bdf58afe.mock.pstmn.io/list','get');
        }
    }
}
</script>
<style scoped>
table{
    font-family: arial,sans-serif;
    border-collapse: collapse;
    width:100%;
}
td,th{
    border:1pt solid #ddd;
    text-align: left;
    padding: 8px;
}
</style>