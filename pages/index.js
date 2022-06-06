import Head from "next/head";
import BookingMain from "../Components/BookingMain";
import Detail from "../Components/Detail";
import Guidelines from "../Components/Guidelines";
import Main from "../Components/Main";
import Whyus from "../Components/Whyus";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Express Bus -- Home</title>
        <meta name="description" content="This is ticket reservation project" />
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <Main />
      <Guidelines />
      <BookingMain />
      <Whyus />
      <Detail />
    </div>
  );
}
