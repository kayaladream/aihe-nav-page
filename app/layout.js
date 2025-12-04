import './globals.css';

export const metadata = {
  title: 'My Navigation',
  description: 'Simple Nav Page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
