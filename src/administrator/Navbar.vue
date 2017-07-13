<template>
    <nav id="navbar-admin">
        <div class="admin-wrapper">
            <a href="" class="brand">
                <i class="fa fa-code"></i> devthailand.com
            </a>
            <ul>
                <li>
                    <a :href="Url.Home">
                        <i class="fa fa-home"></i>
                    </a>
                </li>
                <li>
                    <router-link :to="Url.Home">
                        <i class="fa fa-address-card-o"></i> กิจกรรม
                    </router-link>
                </li>
                <li>
                    <router-link :to="Url.Home">
                        <i class="fa fa-graduation-cap"></i> ผลงาน
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { Url } from '../http';
export default {
    name: 'navbar-admin',
    data() {
        return {
            Url
        }
    }
}
</script>

<style lang="scss" scoped>
$navHeight: 60px;
$navColor: #505050;
#navbar-admin {
    height: $navHeight;
    background-color: white;
    box-shadow: 0 3px 5px rgba(0, 0, 0, .05);
    a {
        color: $navColor !important;
        &.brand {
            height: $navHeight;
            line-height: $navHeight - 2;
            letter-spacing: 3px;
            display: block;
            float: left;
            font-weight: 600;
            text-transform: uppercase;
            i {
                font-weight: bolder;
            }
        }
    }
}

ul {
    float: right;
    list-style: none;
    padding: 0;
    margin: 0;
    height: $navHeight;
    >li {
        height: $navHeight;
        float: left;
        border: none;

        >a {
            height: $navHeight;
            line-height: $navHeight - 2;
            padding: 0 15px;
            border-right: solid 1px rgba(0, 0, 0, .1);
            .fa {
                margin-right: 5px;
            }
        }
        &:last-child {
            >a {
                padding: 0;
                border: none;
            }
        }
    }
}
</style>


