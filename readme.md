# 🧪 TestWaDashboard

**TestWaDashboard** is a plug-and-play React component built for visualizing dynamic data using Highcharts, with fully customizable title, subtitle, and y-axis labels — all in a clean, ready layout.

---

## 📦 Installation

```bash
npm install @ariankoochak/test-wa-dashboard
```

---

## 🚀 Usage

Import the component and include it in your app:

```tsx
import './App.css';
import { TestWaDashboard } from '@ariankoochak/test-wa-dashboard';

function App() {
  return (
    <>
      <TestWaDashboard
        chartTitle="This is our bro's title"
        chartSubtitle="This is our bro's subtitle"
        chartCriteriaText="Population (m)"
        height={480}
        width={200}
      />
    </>
  );
}

export default App;
```

---

## 🧩 Props

| Prop              | Type     | Required | Description                              |
|-------------------|----------|----------|------------------------------------------|
| `chartTitle`      | `string` | ✅       | Title text displayed on the chart        |
| `chartSubtitle`   | `string` | ✅       | Subtitle shown below the title           |
| `chartCriteriaText` | `string` | ✅     | Y-axis label (e.g. `population`, `count`)|
| `height`          | `number` | ✅       | Height of the chart in pixels            |
| `width`           | `number` | ✅       | Width of the chart in pixels             |

---

## 🎨 Features

- Built with **Highcharts** for reliable visualizations
- Supports **dynamic random data**
- Clean, responsive layout
- Built-in state management using **Redux Toolkit**

---

## 📂 File Structure

```plaintext
src/
├── components/
│   ├── Chart/
│   │   └── Chart.tsx
│   └── GetNumber/
│       └── GetNumber.tsx
├── store/
│   ├── index.ts
│   └── myRandomNumberSlice.ts
├── styles/
│   └── globals.css
├── tools/
│   └── randomData/
│       ├── cities.json
│       ├── GenerateColumnColor.ts
│       └── GenerateRandomData.ts
├── types/
│   ├── index.ts
│   ├── style.d.ts
│   └── valiend.d.ts
├── TestWaDashboard.tsx
└── index.ts
```

---