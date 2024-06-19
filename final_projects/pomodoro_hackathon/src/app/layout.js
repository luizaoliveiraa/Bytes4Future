import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Pomodoro App",
  description: "Pomodoro app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
            <div   >
              
              {children}
              <Navbar />
            </div>
      </body>
    </html>
  );
}
