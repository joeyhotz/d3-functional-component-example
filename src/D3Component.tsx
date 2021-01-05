import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

function D3Component() {
  const d3Container = useRef(null);

  const w = 850;
  const h = 700;

  const projection = d3
    .geoMercator()
    .center([132, -28])
    .translate([w / 2, h / 2])
    .scale(1000);

  const path = d3.geoPath().projection(projection);

  const color = d3
    .scaleOrdinal()
    .range(["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9"]);

  useEffect(() => {
    if (d3Container.current) {
      const svg = d3.select(d3Container.current);

      d3.json("aust.json").then((json: any) => {
        svg
          .selectAll("path")
          .data(json.features)
          .enter()
          .append("path")
          .attr("d", path as any)
          .attr("stroke", "dimgray")
          .attr("fill", function (d: any, i: number) {
            return color(i + "");
          } as any);

        //States
        svg
          .selectAll("text")
          .data(json.features)
          .enter()
          .append("text")
          .attr("fill", "darkslategray")
          .attr("transform", function (d: any) {
            return "translate(" + path.centroid(d) + ")";
          })
          .attr("text-anchor", "middle")
          .attr("dy", ".35em")
          .text(function (d: any) {
            return d.properties.STATE_NAME;
          });

        //Append the name
        svg
          .append("text")
          .attr("x", 446)
          .attr("y", 340)
          .attr("font-size", 90)
          .attr("font-weight", "bold")
          .attr("font-family", "Roboto")
          .attr("text-anchor", "middle")
          .attr("opacity", 0.05)
          .text("AUSTRALIA");
      });
    }
  }, []);
  return <svg className="d3-component" width={w} height={h} ref={d3Container} />;
}

export default D3Component;
