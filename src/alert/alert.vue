<template>
  <div class="vux-alert" v-if="showValue">
    <div>
      <div class="weui-dialog__hd">
        <strong class="weui-dialog__title">{{ title }}</strong>
      </div>
      <div class="weui-dialog__bd">
        <slot>
          <div v-html="content"></div>
        </slot>
      </div>
      <div class="weui-dialog__ft">
        <a href="javascript:;"
          class="weui-dialog__btn weui-dialog__btn_primary"
          @click="_onHide">{{ buttonText || "好的" }}</a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "alert",
  components: {},
  created() {
    if (typeof this.value !== "undefined") {
      this.showValue = this.value;
    }
  },
  props: {
    value: Boolean,
    title: String,
    content: String,
    buttonText: String,
    hideOnBlur: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showValue: false
    };
  },
  methods: {
    _onHide() {
      this.showValue = false;
    }
  },
  watch: {}
};
</script>

<style lang="sass">
</style>
