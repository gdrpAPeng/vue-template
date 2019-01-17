<template>
  <div class="example">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
//  导入 api
import { test } from '@/api/api'

export default {
  data() {
    return {
      msg: "example"
    };
  },
  created() {
    // this.event().example()
    this.network().test() //  测试封装的 request
  },
  mounted() {
    // this.handler().example()
    // this.network().example()
  },
  methods: {
    //  事件丢这
    event() {
      return {
        example: () => {
          console.log('event-example')
        }
      }
    },
    //  网络请求都丢在这里
    network() {
      return {
        example: () => {
          console.log('network-example')
        },
        //  使用 async/await
        test: async () => {
          let { data, status } = await test({
            a: 1,
            b: 2,
          })
          console.log(data, status)
        }
      }
    },
    //  逻辑处理可以丢这
    handler() {
      return {
        example: () => {
          console.log('handler-example')
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
