<template>
  <div class="question-mc">
    <table style="width:100%">
      <tr>
        <td>
          <p class="header">
            <b>Quick Question:</b>
            <span class="question">{{ question }}</span>
          </p>

          <!-- <p class="question">{{ question }}</p> -->

          <label class="PossibleAnswers">
            {{ AChoice }}
            <input type="radio" name="radio" value="A" id="A" v-model="picked" />
            <span class="checkmark"></span>
          </label>

          <label class="PossibleAnswers">
            {{ BChoice }}
            <input type="radio" name="radio" value="B" id="B" v-model="picked" />
            <span class="checkmark"></span>
          </label>

          <label v-if="CChoice" class="PossibleAnswers">
            {{ CChoice }}
            <input type="radio" name="radio" value="C" id v-model="picked" />
            <span class="checkmark"></span>
          </label>

          <label v-if="DChoice" class="PossibleAnswers">
            {{ DChoice }}
            <input type="radio" name="radio" value="D" id="D" v-model="picked" />
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
    AChoice: {
      type: String,
      required: true
    },
    BChoice: {
      type: String,
      required: true
    },
    CChoice: {
      type: String,
      required: false
    },
    DChoice: {
      type: String,
      required: false
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

