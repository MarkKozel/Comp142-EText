<template>
  <div class="question-tf">
    <table style="width:100%">
      <tr>
        <td>
          <p class="header">
            <b>Quick Question:</b> True/False
          </p>

          <p class="question">{{ question }}</p>

          <label class="PossibleAnswers">
            True
            <input type="radio" name="radio" value="True" id="t" v-model="picked" />
            <span class="checkmark"></span>
          </label>

          <label class="PossibleAnswers">
            False
            <input type="radio" name="radio" value="False" id="f" v-model="picked" />
            <span class="checkmark"></span>
          </label>

          <button v-if="picked" v-on:click="checkAnswer">Submit</button>
          <p v-if="result">{{result}}</p>
        </td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
module.exports = {
  props: {
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    },
    rightAnswerFeedback: {
      type: String,
      required: false,
      default: "Good job"
    },
    wrongAnswerFeedback: {
      type: String,
      required: false,
      default: "Good question to review later"
    }
  },
  data: function() {
    return {
      answered: false,
      picked: "",
      result: ""
    };
  },
  methods: {
    checkAnswer() {
      if (this.answer.toLowerCase() === this.picked.toLowerCase()) {
        this.result = "Correct! " + this.rightAnswerFeedback;
      } else {
        this.result = "Incorrect. " + this.wrongAnswerFeedback;
      }
    }
  }
};
</script>

<style scoped>

table {
  border-color: #0000ff;
  border-style: solid;
  border-width: 1px;
  border-spacing: 0px;
    margin:0px;
    padding:0px;
}
td {
  padding-top: 1px;
  padding-left: 10px;
  padding-bottom: 10px;
}

</style>

