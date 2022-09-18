import Image from "next/image";
import appList from "./appList.json";

export default function Recent({ recentActivity }) {
  return (
    <section className="recent">
      <div className="container">
        <ul className="recentList">
          {recentActivity.map((item, idx) => (
            <li key={`recent item ${idx}`}>
              <a href={appList[item].link}>
                <Image
                  src={appList[item].image}
                  width={128}
                  height={128}
                  alt={item}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
