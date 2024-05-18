import React, { useEffect, useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

const InteractiveUSInflationMap = () => {
  const project = {
    title: "Inflation in the US and Across the Globe",
    description: `The Interactive US Inflation Map is a powerful data visualization tool that showcases inflation rates across major cities in the United States. Built using Python and leveraging libraries such as Folium, Bokeh, and Pandas, this project aims to provide users with an intuitive and informative way to explore inflation trends over time.

## Global Inflation

Before diving into the US Inflation Map, let&apos;s take a look at global inflation trends. The following images showcase inflation rates across various regions worldwide, as well as returns for the S&P 500 in the months before and after the end of prior Federal Reserve rate hiking cycles. Click each image to expand. All data from OECD:`,
    globalInflationImages: `
![Global Inflation Heatmap](/inflation_heatmap.png)
![Global Inflation Heatmap 2020-2023](/inflation_heatmap_2020_2023.png)
![Fed Hiking Cycle Returns](/fed_hiking_cycle_returns.png)
`,
    keyFeatures: `
## Key Features

1. **Interactive Map**: The application presents an interactive map of the United States, allowing users to easily navigate and explore inflation data for different cities.
2. **City-specific Inflation Plots**: Each city on the map is represented by a marker that, when clicked, displays a detailed inflation plot specific to that city.
3. **Inflation Rate Comparison**: The inflation plots showcase the inflation rates for various categories such as Commodities, Energy, Nondurables, and Services, enabling users to compare and analyze trends across different sectors.
4. **Time-based Analysis**: The plots are generated for each year from 2020 onwards, providing a comprehensive view of inflation rates over time.
5. **Tooltips and Popups**: Hovering over the markers on the map reveals tooltips with the city name, while clicking on a marker opens a popup containing the detailed inflation plot for that city.`,
    details: `
#### Technical Details

The Interactive US Inflation Map is implemented using Python and utilizes several powerful libraries. Folium is used to create the interactive map and handle marker placement and popups. Bokeh is employed to generate the interactive inflation plots, allowing for panning, zooming, and hovering interactions. Pandas is utilized for data manipulation and analysis, enabling efficient processing of inflation data stored in CSV files.

The project follows a modular approach, with separate functions for generating city-specific inflation plots and creating the overall interactive map. The inflation data is stored in CSV files organized by city and category, ensuring easy maintainability and extensibility.

#### Example Usage

1. Open the "us_map_with_tooltips.html" file in a web browser.
2. Explore the interactive map of the United States, zooming and panning as desired.
3. Hover over a city marker to view the city name in a tooltip.
4. Click on a city marker to open a popup containing the detailed inflation plot for that city.
5. Analyze the inflation rates for different categories and years using the interactive plot features such as panning, zooming, and hovering.

#### Repository

The complete source code and additional documentation for the Interactive US Inflation Map can be found in the [GitHub repository](https://github.com/bme3412/AI_Projects_with_Python/tree/1daae2382d629ef5ca262ca279aabde1d466880d/us-inflation).
`,
    imageUrl: "",
    githubUrl: "https://github.com/bme3412/AI_Projects_with_Python/tree/1daae2382d629ef5ca262ca279aabde1d466880d/us-inflation",
    demoUrl: "",
  };

  const [isClient, setIsClient] = useState(false);
  const [enlargedImages, setEnlargedImages] = useState({
    "/inflation_heatmap.png": false,
    "/inflation_heatmap_2020_2023.png": false,
    "/fed_hiking_cycle_returns.png": false,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleImageSize = (src) => {
    setEnlargedImages((prevState) => ({
      ...prevState,
      [src]: !prevState[src],
    }));
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        background: "#fff",
      }}
    >
      <h1 style={{ color: "#333", fontSize: "24px", textAlign: "center" }}>
        {project.title}
      </h1>
      <div
        style={{
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <ReactMarkdown
          components={{
            img: ({ node, ...props }) => (
              <div
                style={{
                  marginBottom: "10px",
                  cursor: "pointer",
                  transition: "transform 0.3s",
                  transform: enlargedImages[props.src] ? "scale(1.5)" : "scale(1)",
                }}
                onClick={() => toggleImageSize(props.src)}
              >
                {isClient && (
                  <Image
                    src={props.src}
                    alt={props.alt || ""}
                    width={800}
                    height={600}
                    layout="responsive"
                  />
                )}
              </div>
            ),
          }}
        >
          {project.description + project.globalInflationImages + project.keyFeatures}
        </ReactMarkdown>
      </div>
      <div
        style={{
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <ReactMarkdown
          style={{
            fontSize: "16px",
            color: "#666",
            marginTop: "0",
            marginBottom: "0",
          }}
        >
          {project.details}
        </ReactMarkdown>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" legacyBehavior>
          <a style={{ display: "block", textAlign: "center", marginRight: "10px", color: "#0066cc", textDecoration: "none", fontWeight: "bold" }}>
            GitHub Repository
          </a>
        </Link>
        {project.demoUrl && (
          <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer" legacyBehavior>
            <a style={{ display: "block", textAlign: "center", color: "#0066cc", textDecoration: "none", fontWeight: "bold" }}>
              Live Demo
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default InteractiveUSInflationMap;