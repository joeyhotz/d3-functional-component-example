import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

interface D3ComponentProps {
  data: number[];
}

function D3Component(props: D3ComponentProps) {
  const d3Container = useRef(null);

  useEffect(() => {
    if (props.data && d3Container.current) {
      const svg = d3.select(d3Container.current);

      // Bind D3 data
      const update = svg.append("g").selectAll("text").data(props.data);

      // Enter new D3 elements
      update
        .enter()
        .append("text")
        .attr("x", (d, i) => i * 30)
        .attr("y", 40)
        .style("font-size", 24)
        .text((d: number) => d);

      // Update existing D3 elements
      update.attr("x", (d, i) => i * 40).text((d: number) => d);

      // Remove old D3 elements
      update.exit().remove();
    }
  }, [props.data]);
  return <svg className="d3-component" width={800} height={200} ref={d3Container} />;
}

export default D3Component;
