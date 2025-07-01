import Head from "next/head"

export default function CustomHead({ title, description, keywords }) {
  return (
    <Head>
      <title>{title || "My Default Title"}</title>
    <meta name="description" content={description || "Default description"} />
      <meta name="keywords" content={keywords || "default, keywords"} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
