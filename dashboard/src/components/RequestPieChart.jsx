import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
  LabelList,
} from "recharts";
import theme from "../theme";

function RequestPieChart({ filteredCalls = [], isMobile = false }) {
  const requestMap = {};

  filteredCalls.forEach((item) => {
  const request =
    item.primary_intent || "Unknown";

  requestMap[request] =
    (requestMap[request] || 0) + 1;
});

  const chartData = Object.keys(requestMap)
    .map((key) => ({
      name: key,
      value: requestMap[key],
    }))
    .sort((a, b) => b.value - a.value);

  const totalRequests = chartData.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return (
    <div
      style={{
        background: theme.colors.surface,
        borderRadius: theme.radius.lg,
        padding: "20px",
        boxShadow: theme.shadows.card,
        height: "100%",
        border: `1px solid ${theme.colors.border}`,
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: theme.colors.text,
          fontWeight: "bold",
        }}
      >
        Calls by Request Type
      </h2>

      <ResponsiveContainer
        width="100%"
        height={isMobile ? 430 : 550}
      >
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{
            top: 10,
            right: isMobile ? 24 : 60,
            left: isMobile ? 110 : 200,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis type="number" />

          <YAxis
            type="category"
            dataKey="name"
            width={isMobile ? 100 : 190}
            tick={{
              fontSize: isMobile ? 10 : 12,
            }}
          />

          <Tooltip
            formatter={(value) => [
              `${value} Calls`,
              "Count",
            ]}
          />

          <Bar
            dataKey="value"
            radius={[0, 8, 8, 0]}
          >
            <LabelList
              dataKey="value"
              position="right"
            />

            {chartData.map(
              (entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    theme.chartColors[
                      index %
                        theme.chartColors.length
                    ]
                  }
                />
              )
            )}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div
        style={{
          textAlign: "center",
          marginTop: "15px",
          fontSize: "18px",
          fontWeight: "bold",
          color: theme.colors.text,
        }}
      >
        Total Requests: {totalRequests}
      </div>
    </div>
  );
}

export default RequestPieChart;
