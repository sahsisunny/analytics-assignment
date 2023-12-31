import Layout from "../components/Layout";
import BarChart from "../components/HorizontalBarChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const data = [
  {
    Day: "4/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 177,
    B: 706,
    C: 769,
    D: 89,
    E: 286,
    F: 588,
  },
  {
    Day: "4/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 882,
    B: 698,
    C: 579,
    D: 649,
    E: 889,
    F: 937,
  },
  {
    Day: "4/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 522,
    B: 825,
    C: 523,
    D: 88,
    E: 572,
    F: 407,
  },
  {
    Day: "4/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 609,
    B: 323,
    C: 324,
    D: 578,
    E: 673,
    F: 665,
  },
  {
    Day: "5/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 707,
    B: 815,
    C: 184,
    D: 894,
    E: 304,
    F: 317,
  },
  {
    Day: "5/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 646,
    B: 885,
    C: 978,
    D: 182,
    E: 772,
    F: 508,
  },
];

export default function Home() {
  return (
    <Layout>
      <section className="pt-32">
        <BarChart data={data} />
      </section>
    </Layout>
  );
}
