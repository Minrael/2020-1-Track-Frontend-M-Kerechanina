import * as d3 from 'd3'
import * as React from 'react';
import * as T from './Chart.types'



export const Component: React.FunctionComponent<any> = (props) => {

    const file = props.filename
    const country = props.country

    const [dataSet, setDataSet] = React.useState([] as T.IDataSet[])
    const [dataCases, setDataCases] = React.useState([] as (string | undefined)[])
    const [Dates, setDates] = React.useState([] as (string | undefined)[])
    //const [targetRegionDataSet, setTargetRegionDataSet] = React.useState([] as T.IDataSet[])
    const container: React.MutableRefObject<null> = React.useRef(null)

    React.useEffect(() => {

       //Data parser
       if (dataSet.length === 0){           
            d3.csv(file)
            .then( (data) => {
                let data_all:T.IDataSet[] = []
                let data_cases = []
                let dates = []
                for(let i=0; i < 29000; i++) { //fix 10000 to file length
                    if ( data[i]["Country/Region"] === country) {
                        let data_i:T.IDataSet = {
                            "Country/Region": data[i]["Country/Region"],
                            "Province/State": data[i]["Province/State"],
                            "Confirmed": data[i].Confirmed,
                            "Deaths": data[i].Deaths,
                            "Date": data[i].Date,
                            "Recovered": data[i].Recovered
                        }
                        data_all.push(data_i)
                        data_cases.push(data[i].Confirmed)
                        dates.push(data[i].Date)
                    }
                }
                setDataSet(data_all)
                setDataCases(data_cases)
                setDates(dates)
                //console.log(data)
            })
        }
        // else {
        //     console.log(dataCases)
        // }

        let data: number[] = [0]
         dataCases.forEach(p => {
             if (p !== undefined)
                data.push(+p)
            })

        let xAx = d3.scaleBand()
        .domain(Dates.map(d=>d as string))
        .rangeRound([0, 500])


        const svg = d3.select(container.current)

        svg
        .append('g')
        .selectAll('bar')
        .data(data)
        .enter()
        .append('rect')
        .classed('bar', true)
        //.attr('x', d => (xAx(d.toString()) as number) + xAx.bandwidth())
        .attr('x', d => d *0.5)
        .attr('y', 10)
        .attr('height', d => d)
        .attr('width', '20')
        .attr("fill", "blue");


     // svg
        // .append('g')
        // .selectAll('circle')
        // .data(data)
        // .enter()
        // .append('circle')
        // .attr('r', d => d)
        // .attr("cx",d => d*10)
        // .attr("cy", "100")
        // .attr("fill", "red");

        //.style("background-color", "black")

        


    },[container, dataSet, dataCases])
  
    return (
        <div>
            <p>Chart</p>
            <div>{}</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" ref={container} />
        </div>

    );
  
}




interface IProps {
    data?: number[];
}

export const MyD3Component = (props: IProps) => {

    const d3Container = React.useRef(null);

    React.useEffect(
        () => {
            if (props.data && d3Container.current) {
                const svg = d3.select(d3Container.current);

                // Bind D3 data
                const update = svg
                    .append('g')
                    .selectAll('text')
                    .data(props.data);

                // Enter new D3 elements
                update.enter()
                    .append('text')
                    .attr('x', (d, i) => i * 25)
                    .attr('y', 40)
                    .style('font-size', 24)
                    .text((d: number) => d);

                // Update existing D3 elements
                update
                    .attr('x', (d, i) => i * 40)
                    .text((d: number) => d);

                // Remove old D3 elements
                update.exit()
                    .remove();
            }
        },
        [props.data, d3Container.current])

    return (
        <svg
            className="d3-component"
            width={400}
            height={200}
            ref={d3Container}
        />
    );
}