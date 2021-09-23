<template>
  <div>
    <div class="display">
      <input v-model.number="operand1" />
      <input v-model.number="operand2" />
      = {{ result }}
    </div>
    <div class="keyboard">
      <!-- <button v-on:click="calculate('+')">+</button>
      <button v-on:click="calculate('-')">-</button>
      <button v-on:click="calculate('/')">/</button>
      <button v-on:click="calculate('*')">*</button> -->
      <button
        v-for="operand in operands"
        v-bind:key="operand"
        v-bind:disabled="operand1 === '' || operand2 === ''"
        @click="calculate(operand)"
      >
        {{ operand }}
      </button>
      <div v-if="error">Ошибка! {{ error }}</div>
      <br />
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">Отобразить экранную клавиатуру</label>
      <br />
      <div v-if="checked">
        <button
          @click="addDigit(digit)"
          v-for="digit in digits"
          v-bind:key="digit"
        >
          {{ digit }}
        </button>
        <button @click="deliteDigit">&#129040;</button>
        <br />
        <input type="radio" id="one" value="operand1" v-model="picked" />
        <label for="one">Операнд 1</label>
        <input type="radio" id="two" value="operand2" v-model="picked" />
        <label for="two">Операнд 2</label>
      </div>

      <!-- <div class="logs">
        <div class="display">
          fib(<input v-model.number="operand1" />) fib(<input
            v-model.number="operand2"
          />) = {{ fibResult }}
        </div>
        <div v-for="(log, id) in logs" v-bind:key="id">{{ log }}</div>
      </div> -->
      <!-- <button v-on:click="exponentiation">степень</button>
      <button v-on:click="integerDivision">/ без остатка</button>
      <button v-on:click="remainder">остаток</button> -->
    </div>
  </div>
</template>
 
<script>
export default {
  name: "Calculator",
  data() {
    return {
      picked: "",
      checked: false,
      operands: ["+", "-", "/", "*"],
      digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      operand1: 0,
      operand2: 0,
      result: 0,
      fibResult: 0,
      error: "",
      logs: {},
    };
  },
  methods: {
    addDigit(digit) {
      switch (this.picked) {
        case "operand1":
          this.operand1 += digit;
          break;
        case "operand2":
          this.operand2 += digit;
          break;
      }
    },
    deliteDigit() {
      switch (this.picked) {
        case "operand1":
          break;
        case "operand2":
          break;
      }
    },
    // fib(n) {
    //   return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
    // },
    calculate(operation = "+") {
      this.error = "";
      switch (operation) {
        case "+":
          this.add();
          break;
        case "-":
          this.substract();
          break;
        case "*":
          this.multiply();
          break;
        case "/":
          this.divide();
          break;
      }
      // const key = Date.now();
      // const value = `${this.operand1}${operation}${this.operand2}=${this.result}`;
      // this.$set(this.logs, key, value);
      // this.logs[
      //   Date.now()
      // ] = `${this.operand1}${this.operand2}${operation}=${this.result}`;
    },
    add() {
      this.result = parseFloat(this.operand1) + parseFloat(this.operand2);
      // this.fibResult = this.fib1 + this.fib2;
    },
    substract() {
      this.result = this.operand1 - this.operand2;
      // this.fibResult = this.fib1 - this.fib2;
    },
    divide() {
      if (this.operand2 === 0) {
        this.error = "Делить на 0 нельзя";
        this.result = 0;
      } else {
        this.result = this.operand1 / this.operand2;
        // this.fibResult = this.fib1 / this.fib2;
      }
    },
    multiply() {
      this.result = this.operand1 * this.operand2;
      // this.fibResult = this.fib1 * this.fib2;
    },
    // exponentiation() {
    //   this.result = this.operand1 ** this.operand2;
    // },
    // integerDivision() {
    //   this.result = Math.floor(this.operand1 / this.operand2);
    // },
    // remainder() {
    //   this.result = this.operand1 % this.operand2;
    // },
  },
  // computed: {
  //   fib1() {
  //     return this.fib(this.operand1);
  //   },
  //   fib2() {
  //     return this.fib(this.operand2);
  //   },
  // },
};
</script>