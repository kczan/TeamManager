import React, { useRef, useLayoutEffect, useState } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { apiGetSalaryStats } from "./lookup";

am4core.useTheme(am4themes_animated);

export function Stats(props) {
  const chart = useRef(null);
  const [statsDidSet, setStatsDidSet] = useState(false);

  const [stats, setStats] = useState([]);

  useLayoutEffect(() => {
    let x = am4core.create("chartdiv", am4charts.XYChart);

    // x.paddingRight = 20;
    if (statsDidSet === false) {
      const handleStatsRefresh = (response, status) => {
        if (status === 200) {
          if (response) {
            setStats(response);
            setStatsDidSet(true);
          }
        }
      };
      apiGetSalaryStats(handleStatsRefresh);
    }
    console.log(stats);

    x.data = stats;

    let categoryAxis = x.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "salary";
    categoryAxis.renderer.minGridDistance = 60;

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.renderer.minGridDistance = 200;

    let series = x.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "salary";
    series.dataFields.valueY = "value";
    series.tooltipText = "{valueY.value}";
    series.columns.template.strokeOpacity = 0;
    series.columns.template.adapter.add("fill", (fill, target) => {
      return x.colors.getIndex(target.dataItem.index);
    });
    x.cursor = new am4charts.XYCursor();
    x.cursor.lineY.disabled = true;
    x.cursor.lineX.disabled = true;

    let title = x.titles.create();
    title.text = "Wage distribution in $";
    title.fontSize = 25;
    title.tooltipText = "Annual salaries in company.";

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, [statsDidSet, stats]);

  return <div id="chartdiv" style={{ width: "100%", height: "1000px" }}></div>;
}
