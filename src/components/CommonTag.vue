<template>
  <div class="tabs">
    <el-tag
      size="small"
      v-for="(tag, index) in tags"
      :key="tag.name"
      :closable="tag.name !== 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="handleClose(tag, index)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CommonTag',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabList
    })
  },
  methods: {
    ...mapMutations({
      close: 'closeTag'
    }),
    changeMenu(item) {
      console.log(this.tags)
      this.$router.push({
        name: item.name
      })
    },
    handleClose(tag, index) {
      // console.log(this.tags.lenght)
      const length = this.tags.lenght
      this.close(tag)
      if (tag.name !== this.$route.name) {
        return
      }
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name
        })
      } else {
        this.$router.push({
          name: this.tags[index - 1].name
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
