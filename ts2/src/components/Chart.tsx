import * as d3 from 'd3'
import * as React from 'react';


export const Component: React.FunctionComponent<any> = (props) => {

    //const file = props.filename

    //const [data, setData] = React.useState([])
    const container: React.MutableRefObject<null> = React.useRef(null)

    React.useEffect(() => {

       //if (data.length === 0){           
            d3.csv("c.csv")
            .then( (data) => {
                for(let i=0; i < 100; i++) {
                    console.log(data[i])
                    //setData([])
                }
            })//}
       

        const svg = d3.select(container.current)
        
        svg.append("circle")
        .attr("r", 5)
        .attr("cx", "100")
        .attr("cy", "100")
        .attr("fill", "red");


        const ex1 = d3.select("p")
        .style('font-size', 24)
        .enter()
        .append('rect')



    },[container])
  
    return (
        <div>
            <p>Chart</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" ref={container} />
            <button  type="button">
            </button>
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