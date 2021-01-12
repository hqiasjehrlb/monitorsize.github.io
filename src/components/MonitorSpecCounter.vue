<template>
  <table border="1">
    <tr>
      <td>螢幕尺寸</td>
      <td>
        <input type="number" v-model="i">吋
      </td>
    </tr>
    <tr>
      <td>寬高比</td>
      <td>寬<input type="number" v-model="w">:高<input type="number" v-model="h"></td>
    </tr>
    <tr>
      <td>換算公分</td>
      <td>
        寬: {{ answers.w }} cm<br />
        高: {{ answers.h }} cm
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  data () {
    return {
      i: 30,
      w: 16,
      h: 9
    };
  },
  methods: {
    count (i, w, h) {
      const cm = i * 2.54;
      const rate = cm / Math.pow(Math.pow(w, 2) + Math.pow(h, 2), 0.5);
      return {
        h: h * rate,
        w: w * rate,
      };
    }
  },
  computed: {
    answers () {
      return this.count(this.i, this.w, this.h);
    }
  }
}
</script>

<style>
table {
  margin-left: auto;
  margin-right: auto;
}
</style>