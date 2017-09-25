<template>
  <div class="diagram-panel">
    <b-container fluid>
      <svg :width="area.svgWidth" :height="area.svgHeight" id="chart-zone"></svg>
    </b-container>

    <b-container>
      <b-row>
        <b-col :cols="4" />
        <b-col :cols="4">
          <h2 class="mt-4">Create shape:</h2>
          <b-card no-body>
            <b-tabs ref="tabs" card>
              <b-tab title="Quadrilateral" active>
                <b-form-group label="Enter coordinate 1">
                  <b-row>
                    <b-col :cols="6">
                      <b-form-input placeholder="x" type="number" v-model="newQuadrilateral.x1"></b-form-input>
                    </b-col>
                    <b-col :cols="6">
                      <b-form-input placeholder="y" type="number" v-model="newQuadrilateral.y1"></b-form-input>
                    </b-col>
                  </b-row>
                </b-form-group>
                <b-form-group label="Enter coordinate 2">
                  <b-row>
                    <b-col :cols="6">
                      <b-form-input placeholder="x" type="number" v-model="newQuadrilateral.x2"></b-form-input>
                    </b-col>
                    <b-col :cols="6">
                      <b-form-input placeholder="y" type="number" v-model="newQuadrilateral.y2"></b-form-input>
                    </b-col>
                  </b-row>
                </b-form-group>
                <b-form-group label="Enter coordinate 3">
                  <b-row>
                    <b-col :cols="6">
                      <b-form-input placeholder="x" type="number" v-model="newQuadrilateral.x3"></b-form-input>
                    </b-col>
                    <b-col :cols="6">
                      <b-form-input placeholder="y" type="number" v-model="newQuadrilateral.y3"></b-form-input>
                    </b-col>
                  </b-row>
                </b-form-group>
                <b-form-group label="Enter coordinate 4">
                  <b-row>
                    <b-col :cols="6">
                      <b-form-input placeholder="x" type="number" v-model="newQuadrilateral.x4"></b-form-input>
                    </b-col>
                    <b-col :cols="6">
                      <b-form-input placeholder="y" type="number" v-model="newQuadrilateral.y4"></b-form-input>
                    </b-col>
                  </b-row>
                </b-form-group>
                <b-button class="m-2" variant="success" @click="addQuadrilateral()">Create quadrilateral</b-button>
              </b-tab>
              <b-tab title="Triangle">
                <b-form-group label="Enter coordinate 1">
                  <b-row>
                    <b-col :cols="6">
                      <b-form-input placeholder="x" type="number" v-model="newTriangle.x1"></b-form-input>
                    </b-col>
                    <b-col :cols="6">
                      <b-form-input placeholder="y" type="number" v-model="newTriangle.y1"></b-form-input>
                    </b-col>
                  </b-row>
                </b-form-group>
                <b-form-group label="Enter coordinate 2">
                  <b-row>
                    <b-col :cols="6">
                      <b-form-input placeholder="x" type="number" v-model="newTriangle.x2"></b-form-input>
                    </b-col>
                    <b-col :cols="6">
                      <b-form-input placeholder="y" type="number" v-model="newTriangle.y2"></b-form-input>
                    </b-col>
                  </b-row>
                </b-form-group>
                <b-form-group label="Enter coordinate 3">
                  <b-row>
                    <b-col :cols="6">
                      <b-form-input placeholder="x" type="number" v-model="newTriangle.x3"></b-form-input>
                    </b-col>
                    <b-col :cols="6">
                      <b-form-input placeholder="y" type="number" v-model="newTriangle.y3"></b-form-input>
                    </b-col>
                  </b-row>
                </b-form-group>
                <b-button class="m-2" variant="success" @click="addTriangle()">Create triangle</b-button>
              </b-tab>
              <b-tab title="Circle">
                <b-form-group label="Enter center coordinates">
                  <b-row>
                    <b-col :cols="6">
                      <b-form-input placeholder="x" type="number" v-model="newCircle.cx"></b-form-input>
                    </b-col>
                    <b-col :cols="6">
                      <b-form-input placeholder="y" type="number" v-model="newCircle.cy"></b-form-input>
                    </b-col>
                  </b-row>
                </b-form-group>
                <b-form-group label="Enter radius">
                  <b-row>
                    <b-col :cols="9">
                      <b-form-input placeholder="r" type="number" v-model="newCircle.r"></b-form-input>
                    </b-col>
                  </b-row>
                </b-form-group>
                <b-button class="m-2" variant="success" @click="addCircle()">Create circle</b-button>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'diagram-panel',

  notifications: {
    showUnfilledFieldsError: {
      title: 'Error',
      message: 'All fields are required',
      type: 'error'
    }
  },

  data() {
    return {
      newQuadrilateral: {
        x1: null,
        y1: null,
        x2: null,
        y2: null,
        x3: null,
        y3: null,
        x4: null,
        y4: null,
      },
      newTriangle: {
        x1: null,
        y1: null,
        x2: null,
        y2: null,
        x3: null,
        y3: null,
      },
      newCircle: {
        cx: null,
        cy: null,
        r: null
      },
      area: {
        svgWidth: 1050,
        svgHeight: 550,
        width: 1000,
        height: 500,
        svgPadding: 40,
        svgBackPadding: 10,
      }
    };
  },

  mounted() {
    const xScale = this.$d3.scaleLinear()
      .domain([0, this.area.width])
      .range([0, this.area.width]);
    const xAxis = this.$d3.axisBottom()
      .scale(xScale);
    const yScale = this.$d3.scaleLinear()
      .domain([0, this.area.height])
      .range([this.area.height, 0]);
    const yAxis = this.$d3.axisLeft()
      .scale(yScale);

    this.$d3.select('#chart-zone')
      .append('g')
        .attr('transform', `translate(${this.area.svgPadding}, 10)`)
        .call(yAxis);

    this.$d3.select('#chart-zone')
      .append('g')
        .attr('transform', `translate(${this.area.svgPadding}, ${this.area.svgHeight - this.area.svgPadding})`)
        .call(xAxis.ticks(20));
  },

  methods: {
    addQuadrilateral() {
      if (!this.inputIsValid(this.newQuadrilateral)) {
        this.showUnfilledFieldsError();
        return;
      }

      const quadrilateralCoords = [
        this.calculatePointCoords(this.newQuadrilateral.x1, this.newQuadrilateral.y1),
        this.calculatePointCoords(this.newQuadrilateral.x2, this.newQuadrilateral.y2),
        this.calculatePointCoords(this.newQuadrilateral.x3, this.newQuadrilateral.y3),
        this.calculatePointCoords(this.newQuadrilateral.x4, this.newQuadrilateral.y4)
      ].join(', ');

      this.$d3.select('#chart-zone')
        .append('polyline')
        .attr('points', quadrilateralCoords)
        .style('fill', 'rgba(25,25,112, 0.5)');

      this.clearInputs('newQuadrilateral');
    },

    addTriangle() {
      if (!this.inputIsValid(this.newTriangle)) {
        this.showUnfilledFieldsError()
        return;
      }

      const triangleCoords = [
        this.calculatePointCoords(this.newTriangle.x1, this.newTriangle.y1),
        this.calculatePointCoords(this.newTriangle.x2, this.newTriangle.y2),
        this.calculatePointCoords(this.newTriangle.x3, this.newTriangle.y3)
      ].join(', ');

      this.$d3.select('#chart-zone')
        .append('polyline')
        .attr('points', triangleCoords)
        .style('fill', 'rgba(0,128,128, 0.5)');

      this.clearInputs('newTriangle');
    },

    addCircle() {
      if (!this.inputIsValid(this.newCircle)) {
        this.showUnfilledFieldsError();
        return;
      }

      this.$d3.select('#chart-zone')
        .append('circle')
        .attr('cx', this.calculateXCoord(this.newCircle.cx))
        .attr('cy', this.calculateYCoord(this.newCircle.cy))
        .attr('r', this.newCircle.r)
        .style('fill', 'rgba(178, 34, 34, 0.5)');

      this.clearInputs('newCircle');
    },

    calculatePointCoords(x, y) {
      const xParsed = this.calculateXCoord(x),
        yParsed = this.calculateYCoord(y);

      return `${xParsed} ${yParsed}`;
    },

    calculateXCoord(x) {
      return parseInt(x) + this.area.svgPadding;
    },

    calculateYCoord(y) {
      return this.area.svgHeight - parseInt(y) - this.area.svgPadding;
    },

    inputIsValid(coords) {
      return Object.values(coords).every(coord => coord || coord === '0');
    },

    clearInputs(shapeName) {
      Object.keys(this[shapeName]).forEach(key => this[shapeName][key] = null);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#chart-zone {
  background: lightcyan;
}
</style>
