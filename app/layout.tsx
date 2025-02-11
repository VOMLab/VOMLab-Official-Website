import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

export const metadata: Metadata = {
  title: "VOMLab Official Website",
  description: "우리는 예술적 상상력과 기술의 조화를 통해 공간의 새로운 가치를 찾아 나가고, 더 많은 관객과 만나기 위한 시도를 이어나갑니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKR.className} antialiased`}
      >
        <div className="fixed inset-0 bg-overlay -z-20"></div>
        {children}
      </body>
    </html>
  );
}
