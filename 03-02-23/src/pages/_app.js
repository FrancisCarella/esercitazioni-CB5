import MainLayout from "@/layouts/mainLayout";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
