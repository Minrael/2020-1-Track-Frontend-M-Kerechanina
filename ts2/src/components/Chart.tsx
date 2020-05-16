import * as d3 from 'd3'
import * as React from 'react';
import * as T from './Chart.types'
import styles from './Chart.module.css'

export const Component: React.FunctionComponent<T.IProps> = (props) => {

    const file = props.filename
    const country = props.country
    const svgHeight = props.height
    const svgWidth = props.width

    const [dataSet, setDataSet] = React.useState([] as T.IDataSet[])

    const container: React.MutableRefObject<null> = React.useRef(null)

    React.useEffect(() => {

       if (dataSet.length === 0 && file){           
            d3.csv(file)
            .then( (data) => {
                let data_all:T.IDataSet[] = []
                data.forEach((item, i) => {
                    if ( item["Country/Region"] === country && item.Confirmed !== undefined && item.Date !== undefined) {
                        let data_i:T.IDataSet = {
                            "No": i,
                            "Country/Region": item["Country/Region"],
                            "Province/State": item["Province/State"],
                            "Confirmed": +item.Confirmed,
                            "Deaths": item.Deaths,
                            "Date": item.Date,
                            "Recovered": item.Recovered
                        }
                        data_all.push(data_i)
                    }
                })
                setDataSet(data_all)
            })
        }

        let maxCases = Math.max.apply(null, dataSet.map(d => d.Confirmed))

        let dataNormzd:T.IDataSet[] = []
        dataSet.forEach(data => {
            dataNormzd.push({
                ...data,
                "Confirmed": (data.Confirmed/maxCases)*600
            })
        })

        const padding = 50;

        const svg = d3.select(container.current)

        let xScale = d3.scaleBand()
        .domain(dataNormzd.map(d => d.Date as string))
        .rangeRound([0, +svgWidth-padding])

        let yScale = d3.scaleLinear()
        .domain([0, maxCases])
        .nice()
        .range([+svgWidth-padding, 0])

        svg
        .append('g')
        .attr('transform', 'translate(0,-50)')
        .selectAll('bar')
        .data(dataNormzd)
        .enter()
        .append('rect')
        .classed('bar', true)
        .attr('x', d => xScale(d.Date) as number)
        .attr('y', d => 750-d.Confirmed)
        .attr('height', d => d.Confirmed)
        .attr('width', d => xScale.bandwidth()*0.7)
        .attr("fill", "red");

        let xAxis = d3.axisBottom(xScale)
        .scale(xScale)

        let yAxis = d3.axisLeft(yScale)
        .scale(yScale)      

        svg
        .append('g')
        .attr('transform', 'translate(100, -50)')
        .call(yAxis)

        svg
        .append('g')
        .attr('transform', 'translate(50,700)')
        .call(xAxis)


    },[container, dataSet, props.width, country, svgWidth, file])
  
    return (
        <div className = {styles.containerChart}>
            <div className = {styles.header}>Number of COVID-19 cases in {country}</div>
            <svg xmlns="http://www.w3.org/2000/svg" width={svgWidth} height={svgHeight} ref={container} />
        </div>

    );
  
}