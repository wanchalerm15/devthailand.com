<template>
    <div id="contact">
        <div class="admin-wrapper">
            <header>
                <h1>
                    <i class="fa fa-envelope"></i> ข้อความจากผู้เยี่ยมชมเว็บไซต์
                </h1>
            </header>
    
            <div class="admin-panel">
                <table class="table">
                    <thead>
                        <tr>
                            <th>ผู้เยี่ยมชม</th>
                            <th width="80%">ข้อความ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in contacts" :key="item">
                            <td>
                                <div>
                                    <strong>{{ item.message_name }}</strong>
                                </div>
                                <div>{{ item.message_email }}</div>
                            </td>
                            <td>
                                <div>{{ item.message_content }}</div>
                                <div class="date">{{ item.updated }}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contact',
    created() {
        this.$store.dispatch('Contacts');
    },
    computed: {
        contacts() {
            return this.$store.getters.Contacts;
        }
    }
}
</script>

<style lang="scss" scoped>
.table {
    th,
    td {
        font-family: 'Prompt';
    }
    td {
        font-size: 14px;
        height: 100px;
        strong {
            font-weight: 500;
        }
    }
}

.date {
    font-size: 12px;
    color: #aaaaaa !important;
    text-align: right;
}
</style>

