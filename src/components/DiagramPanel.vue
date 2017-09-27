<template>
  <div class="diagram-panel">
    <b-container fluid>
      <svg :width="area.svgWidth" :height="area.svgHeight" id="chart-zone" class="mt-4"></svg>
    </b-container>

    <b-container>
      <b-row>
        <b-col :cols="3" />
        <b-col :cols="6">
          <h2 class="mt-4">Create shape:</h2>
          <b-card no-body>
            <b-tabs ref="tabs" card>

              <b-tab title="Parallelogram" active>
                <b-form-group label="Enter coordinate A">
                  <b-row>
                    <b-col :cols="6">
                      <b-form-input placeholder="x" type="number" v-model="newParallelogram.x1"></b-form-input>
                    </b-col>
                    <b-col :cols="6">
                      <b-form-input placeholder="y" type="number" v-model="newParallelogram.y1"></b-form-input>
                    </b-col>
                  </b-row>
                </b-form-group>
                <b-form-group label="Enter coordinate B">
                  <b-row>
                    <b-col :cols="6">
                      <b-form-input placeholder="x" type="number" v-model="newParallelogram.x2"></b-form-input>
                    </b-col>
                    <b-col :cols="6">
                      <b-form-input placeholder="y" type="number" v-model="newParallelogram.y2"></b-form-input>
                    </b-col>
                  </b-row>
                </b-form-group>
                <b-form-group label="Enter coordinate C">
                  <b-row>
                    <b-col :cols="6">
                      <b-form-input placeholder="x" type="number" v-model="newParallelogram.x3"></b-form-input>
                    </b-col>
                    <b-col :cols="6">
                      <b-form-input placeholder="y" type="number" v-model="newParallelogram.y3"></b-form-input>
                    </b-col>
                  </b-row>
                </b-form-group>
                <b-form-group label="Enter diagonals color">
                  <b-row class="no-gutters">
                    <b-col :cols="1" align-self="center">
                      <label class="p-0 m-0">AC</label>
                    </b-col>
                    <b-col :cols="5">
                      <b-form-input placeholder="AC" type="color" v-model="newParallelogram.d1Color"></b-form-input>
                    </b-col>
                    <b-col :cols="1" align-self="center">
                      <label class="p-0 m-0">BD</label>
                    </b-col>
                    <b-col :cols="5">
                      <b-form-input placeholder="BD" type="color" v-model="newParallelogram.d2Color"></b-form-input>
                    </b-col>
                  </b-row>
                </b-form-group>
                <b-button class="m-2" variant="success" @click="addParallelogram()">Create parallelogram</b-button>
              </b-tab>

              <b-tab title="Quadrilateral">
                <b-form-group label="Enter coordinate A">
                  <b-row>
                    <b-col :cols="6">
                      <b-form-input placeholder="x" type="number" v-model="newQuadrilateral.x1"></b-form-input>
                    </b-col>
                    <b-col :cols="6">
                      <b-form-input placeholder="y" type="number" v-model="newQuadrilateral.y1"></b-form-input>
                    </b-col>
                  </b-row>
                </b-form-group>
                <b-form-group label="Enter coordinate B">
                  <b-row>
                    <b-col :cols="6">
                      <b-form-input placeholder="x" type="number" v-model="newQuadrilateral.x2"></b-form-input>
                    </b-col>
                    <b-col :cols="6">
                      <b-form-input placeholder="y" type="number" v-model="newQuadrilateral.y2"></b-form-input>
                    </b-col>
                  </b-row>
                </b-form-group>
                <b-form-group label="Enter coordinate C">
                  <b-row>
                    <b-col :cols="6">
                      <b-form-input placeholder="x" type="number" v-model="newQuadrilateral.x3"></b-form-input>
                    </b-col>
                    <b-col :cols="6">
                      <b-form-input placeholder="y" type="number" v-model="newQuadrilateral.y3"></b-form-input>
                    </b-col>
                  </b-row>
                </b-form-group>
                <b-form-group label="Enter coordinate D">
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
                <b-form-group label="Enter coordinate A">
                  <b-row>
                    <b-col :cols="6">
                      <b-form-input placeholder="x" type="number" v-model="newTriangle.x1"></b-form-input>
                    </b-col>
                    <b-col :cols="6">
                      <b-form-input placeholder="y" type="number" v-model="newTriangle.y1"></b-form-input>
                    </b-col>
                  </b-row>
                </b-form-group>
                <b-form-group label="Enter coordinate B">
                  <b-row>
                    <b-col :cols="6">
                      <b-form-input placeholder="x" type="number" v-model="newTriangle.x2"></b-form-input>
                    </b-col>
                    <b-col :cols="6">
                      <b-form-input placeholder="y" type="number" v-model="newTriangle.y2"></b-form-input>
                    </b-col>
                  </b-row>
                </b-form-group>
                <b-form-group label="Enter coordinate C">
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
import randomColorRGB from 'random-color-rgb';

export default {
  name: 'diagram-panel',

  notifications: {
    showUnfilledFieldsError: {
      title: 'Error',
      message: 'All fields are required',
      type: 'error'
    },
    showInvalidQuarterMessage: {
      title: 'Critical',
      message: 'Shape isn\'t in second grid quarter',
      type: 'warn'
    },
    showShapeCreated: {
      title: 'Success',
      message: 'Shape successfully created',
      type: 'success',
    }
  },

  data() {
    return {
      shape: {
        borderColor: '#000000'
      },
      newParallelogram: {
        x1: null,
        y1: null,
        x2: null,
        y2: null,
        x3: null,
        y3: null,
        d1Color: '#ff5722',
        d2Color: '#00e676',
      },
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
        svgWidth: 1020,
        svgHeight: 520,
        width: 1000,
        height: 500,
        svgPadding: 10,
      },
      axes: {
        yMin: -50,
        yMax: 50,
        xMin: -100,
        xMax: 100,
        multiplier: 5,
      }
    };
  },

  mounted() {
    const xScale = this.$d3.scaleLinear()
      .domain([this.axes.xMin, this.axes.xMax])
      .range([0, this.area.width]),
      xAxis = this.$d3.axisBottom()
        .scale(xScale),
      xAxisYOffset = this.area.height / 2 + this.area.svgPadding,
      yScale = this.$d3.scaleLinear()
        .domain([this.axes.yMin, this.axes.yMax])
        .range([this.area.height, 0]),
      yAxis = this.$d3.axisLeft()
        .scale(yScale),
      yAxisXOffset = this.area.width / 2 + 10,
      yAxisYOffset = -this.area.height / 2 + 10;


    this.$d3.select('#chart-zone')
      .append('g')
        .attr('transform', `translate(${this.area.svgPadding}, ${xAxisYOffset})`)
        .call(xAxis.ticks(20));

    this.$d3.select('#chart-zone')
      .append('g')
        .attr('transform', `translate(${yAxisXOffset}, ${this.area.svgPadding})`)
        .call(yAxis);
  },

  methods: {
    // adding shapes
    addParallelogram() {
      if (!this.inputIsValid(this.newParallelogram)) {
        this.showUnfilledFieldsError();
        return;
      }

      const x4 = this.calculateParallelogramLastCoord(
        this.newParallelogram.x1,
        this.newParallelogram.x2,
        this.newParallelogram.x3,
      ),
        y4 = this.calculateParallelogramLastCoord(
          this.newParallelogram.y1,
          this.newParallelogram.y2,
          this.newParallelogram.y3,
        ),
        xAxisValid = [
          this.newParallelogram.x1,
          this.newParallelogram.x2,
          this.newParallelogram.x3,
          x4
        ].every(x => parseInt(x) <= 0),
        yAxisValid = [
          this.newParallelogram.y1,
          this.newParallelogram.y2,
          this.newParallelogram.y3,
          y4
        ].every(y => parseInt(y) >= 0);

      if (!xAxisValid || !yAxisValid) {
        this.showInvalidQuarterMessage();
        this.clearInputs('newParallelogram');
        return;
      }

      const coord1 = this.calculatePointCoords(this.newParallelogram.x1, this.newParallelogram.y1),
        coord2 = this.calculatePointCoords(this.newParallelogram.x2, this.newParallelogram.y2),
        coord3 = this.calculatePointCoords(this.newParallelogram.x3, this.newParallelogram.y3),
        coord4 = this.calculatePointCoords(x4, y4),
        parallelogramCoords = [
          coord1,
          coord2,
          coord3,
          coord4,
          coord1
        ].join(', ');

      // adding shape
      this.$d3.select('#chart-zone')
        .append('polyline')
        .attr('points', parallelogramCoords)
        .style('stroke', this.shape.borderColor)
        .style('fill', randomColorRGB({opacity: 0.5}));

      this.addLine(
        this.newParallelogram.x1,
        this.newParallelogram.y1,
        this.newParallelogram.x3,
        this.newParallelogram.y3,
        this.newParallelogram.d1Color,
      );

      this.addLine(
        this.newParallelogram.x2,
        this.newParallelogram.y2,
        x4,
        y4,
        this.newParallelogram.d2Color,
      );


      this.showShapeCreated();
      this.clearInputs('newParallelogram');
    },
    addQuadrilateral() {
      if (!this.inputIsValid(this.newQuadrilateral)) {
        this.showUnfilledFieldsError();
        return;
      }

      const quadrilateralCoords = [
        this.calculatePointCoords(this.newQuadrilateral.x1, this.newQuadrilateral.y1),
        this.calculatePointCoords(this.newQuadrilateral.x2, this.newQuadrilateral.y2),
        this.calculatePointCoords(this.newQuadrilateral.x3, this.newQuadrilateral.y3),
        this.calculatePointCoords(this.newQuadrilateral.x4, this.newQuadrilateral.y4),
        this.calculatePointCoords(this.newQuadrilateral.x1, this.newQuadrilateral.y1),
      ].join(', ');

      this.$d3.select('#chart-zone')
        .append('polyline')
        .attr('points', quadrilateralCoords)
        .style('stroke', this.shape.borderColor)
        .style('fill', 'none');

      this.showShapeCreated();
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
        this.calculatePointCoords(this.newTriangle.x3, this.newTriangle.y3),
        this.calculatePointCoords(this.newTriangle.x1, this.newTriangle.y1),
      ].join(', ');

      this.$d3.select('#chart-zone')
        .append('polyline')
        .attr('points', triangleCoords)
        .style('stroke', this.shape.borderColor)
        .style('fill', 'none');

      this.showShapeCreated();
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
          .attr('r', parseInt(this.newCircle.r) * this.axes.multiplier )
          .style('stroke', this.shape.borderColor)
          .style('fill', 'none');

      this.showShapeCreated();
      this.clearInputs('newCircle');
    },
    addLine(x1, y1, x2, y2, color) {
      this.$d3.select('#chart-zone')
        .append('line')
          .style('stroke', color)
          .attr('x1', this.calculateXCoord(x1))
          .attr('y1', this.calculateYCoord(y1))
          .attr('x2', this.calculateXCoord(x2))
          .attr('y2', this.calculateYCoord(y2))
    },

    // Coords calculation
    calculateXCoord(x) {
      const svgOffsets = this.area.width / 2 + this.area.svgPadding;

      return this.axes.multiplier * parseInt(x) + svgOffsets;
    },
    calculateYCoord(y) {
      const svgOffsets = this.area.height / 2 + this.area.svgPadding;

      return svgOffsets - this.axes.multiplier * parseInt(y);
    },
    calculatePointCoords(x, y) {
      const xParsed = this.calculateXCoord(x),
        yParsed = this.calculateYCoord(y);

      return `${xParsed} ${yParsed}`;
    },
    calculateParallelogramLastCoord(coord1, coord2, coord3) {
      return parseInt(coord1) + parseInt(coord3) - parseInt(coord2);
    },

    // Inputs
    inputIsValid(coords) {
      return Object.values(coords).every(coord => coord || coord === '0');
    },
    clearInputs(shapeName) {
      Object.keys(this[shapeName])
        .filter(key => !key.endsWith('Color'))
        .forEach(key => this[shapeName][key] = null);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#chart-zone {
  box-sizing: border-box;
  border-radius: 5px;
  background: #E0F2F1;
}
</style>
