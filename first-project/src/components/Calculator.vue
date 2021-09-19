<template>
  <div>
    <div class="display">
      <input v-model="operand1" />
      <input v-model="operand2" />
      = {{ result }}
    </div>
    <div class="keyboard">
      <button v-on:click="add">+</button>
      <button v-on:click="substract">-</button>
      <button v-on:click="divide">/</button>
      <button v-on:click="multiply">*</button>
      <button v-on:click="exponentiation">степень</button>
      <button v-on:click="integerDivision">/ без остатка</button>
      <button v-on:click="remainder">остаток</button>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "Calculator",
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
    };
  },
  methods: {
    add() {
      this.result = this.operand1 + this.operand2;
    },
    substract() {
      this.result = this.operand1 - this.operand2;
    },
    divide() {
      this.result = this.operand1 / this.operand2;
    },
    multiply() {
      this.result = this.operand1 * this.operand2;
    },
    exponentiation() {
      this.result = this.operand1 ** this.operand2;
    },
    integerDivision() {
      this.result = Math.floor(this.operand1 / this.operand2);
    },
    remainder() {
      this.result = this.operand1 % this.operand2;
    },
  },
};
</script>