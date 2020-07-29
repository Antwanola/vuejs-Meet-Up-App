<template>
  <div id="app" class="container">
    <div class="row main-container mx-auto">
      <div class="row title-container no-gutters">
        <div class="col-10">
          <h1 class="title">Currency Converter</h1>
        </div>
        <div class="col-2">
          <select class="select-country" @change="updateInputs" v-model="selected">
            <option v-for="country in countries">{{country.name}}</option>
          </select>
        </div>
      </div>

      <div class="row">
        <!-- input field 1 -->
        <div class="col">
          <img class="country-flag" :src="imageSrc + 'flag-australia.png'" />
          <h2 class="country-name">Australia</h2>
          <p>Rate: 1 AUD</p>
          <input
            id="currencyInput"
            class="currency-input"
            @keyup="calcInput_1(event, countryRate)"
            :value="calc2"
          />
        </div>
        <!-- input field 2 -->
        <div class="col">
          <template v-for="country in countries">
            <template v-if="selected === country.name" v-model="countryRate">
              <img class="country-flag" :src="imageSrc + country.image" />
              <h2 class="country-name">{{country.name}}</h2>
              <p class>Rate: {{country.rate}} AUD</p>
              <input class="currency-input" @keyup="calcInput_2" :value="calc1" />
              <span>{{country.money}}</span>
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>


    
  <script>
export default {
  data() {
    return {
      selected: "Brazil",
      countryRate: 2.5,
      calc1: "",
      calc2: "",
      imageSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/286148/",
      firstInputSelected: true,
      input: document.getElementById("currencyInput"),
      countries: [
        {
          name: "Nigeria",
          money: "Naira",
          rate: 1,
          image: "flag-brazil.png"
        },
        {
          name: "UK",
          money: "Pounds",
          rate: 0.59,
          image: "flag-uk.png"
        },
        {
          name: "Germany",
          money: "Euro",
          rate: 0.67,
          image: "flag-germany.png"
        },
        {
          name: "USA",
          money: "USD",
          rate: 360,
          image: "flag-usa.png"
        },
        {
          name: "Canada",
          money: "CAD",
          rate: 0.94,
          image: "flag-canada.png"
        },
        {
          name: "New Zealand",
          money: "NZD",
          rate: 1.09,
          image: "flag-new-zealand.png"
        },
        {
          name: "Japanese",
          money: "YEN",
          rate: 88.51,
          image: "flag-japan.png"
        }
      ]
    };
  },

  methods: {
    calcInput_1: function(e, rate) {
      this.firstInputSelected = true;
      this.calculate(e, rate);
    },
    calcInput_2: function(e, rate) {
      this.firstInputSelected = false;
      this.calculate(e, rate);
    },
    updateInputs: function() {
      var selected;
      for (i = 0; i < this.countries.length; i++) {
        if (this.selected == this.countries[i].name) {
          selected = this.countries[i];
        }
      }
      this.countryRate = selected.rate;

      var input2 = parseFloat(document.getElementById("currencyInput").value);
      if (isNaN(input2)) {
        this.calc2 = "";
        this.calc1 = "";
        return;
      }
      this.calc1 = (input2 * this.countryRate).toFixed(2);
    },
    calculate: function(e, value) {
      var value = parseFloat(e.target.value);
      if (isNaN(value)) {
        this.calc2 = "";
        this.calc1 = "";
        return;
      }

      if (this.firstInputSelected) {
        this.calc2 = value;
        this.calc1 = (value * this.countryRate).toFixed(2);
      } else {
        this.calc1 = value;
        this.calc2 = (value / this.countryRate).toFixed(2);
      }
    }
  }
};

//  this.selectCountry=selected.name
//  this.selectRate = this.selected.rate;
// 	let value_2 = document.getElementById("second-input").value
</script>