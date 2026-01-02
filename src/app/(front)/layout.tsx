import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}

      <Footer />
    </>
  );
};

export default Layout;
