import style from "../components/components";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>EsmiKs portfolio</title>
      </Head>
      <style.Heading>Hello World</style.Heading>
      <style.PathContainer>
        <Image src="/big_blob.svg" alt="bgblob" width="800" height="1000"></Image>
      </style.PathContainer>
    </div>
  );
}
