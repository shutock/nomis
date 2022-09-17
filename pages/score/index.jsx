import Link from "next/link";
import MainLayout from "../../layouts/mainLayout";

export default function GetScrore() {
  return (
    <MainLayout title="Get Score">
      <div className="wrapper">
        <section>
          <h1 className="container">Future Get Score Page</h1>
          <div className="container column start paragraph">
            <p>It should be the input wallet page.</p>
            <p>Try out these two prototypes:</p>
          </div>
          <div className="container start">
            <Link href="/score/artyshatilov.eth">
              <a className="underline">artyshatilov.eth</a>
            </Link>
            <Link href="/score/shutock.eth">
              <a className="underline">shutock.eth</a>
            </Link>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
