# Pyor Crypto Dashboard Application

<div style="display: flex; align-items: center;" >
   <div style="flex: 1;" >
      <img src="./pyor-dashboard/src/Images/loading.gif"/>
   </div>
   <div style="flex: 2;" >
   Welcome to the Pyor Crypto Dashboard application! This application allows you to visualize and track the price data of various cryptocurrencies using Apache ECharts. You can create customizable dashboard pages with line-chart components that display price trends over different time periods for different coins.
   </div>
</div>
 
## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Line-Chart Component](#line-chart-component)
  - [Configurable Page Layout](#configurable-page-layout)
  - [State Management](#state-management)
- [Tech Stack](#tech-stack)
- [Timeline](#timeline)
- [Contact](#contact)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Internet connection to fetch cryptocurrency price data from the API

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/pyor-crypto-dashboard.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pyor-crypto-dashboard
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### Line-Chart Component

The line-chart component uses the Apache ECharts SDK to display price trends of different cryptocurrencies. It includes a dropdown menu that allows you to select the cryptocurrency (e.g., Ethereum, Dogecoin, Solana). To use the line-chart component, follow these steps:

1. Open the dashboard page where you want to add the line-chart component.
2. Locate the dropdown menu labeled "Select Coin" and choose the desired cryptocurrency.
3. The line chart will dynamically update to show the price trends for the selected coin over a specific time period.

### Configurable Page Layout

The Pyor Crypto Dashboard allows non-tech users to create dashboard pages with customizable layouts. You can arrange components in row-column compositions or use predefined layout templates. To create a dashboard page:

1. Navigate to the dashboard creation section.
2. Choose whether you want to create a custom layout or use a predefined template.
3. Drag and drop components onto the layout canvas.
4. Configure each component's settings and data sources as needed.

### State Management

The application handles state management of dropdown choices across page refreshes. Additionally, it supports multiple instances of the same component on a single page. For example, if you have two line-chart components, each can have its own state and display different cryptocurrency price trends simultaneously.

## Tech Stack

- Next.js: A React framework for building server-rendered and static websites.
- Material UI: A popular React UI framework for creating stylish and responsive user interfaces.
- Apache ECharts: A powerful charting and data visualization library for web applications.

## Timeline

You have 2 days to complete the assignment. Please make sure to follow the provided instructions and guidelines to ensure timely submission.

Happy dashboarding with Pyor Crypto Dashboard! 🚀📊
