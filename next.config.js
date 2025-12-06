/** @type {import('next').NextConfig} */
const nextConfig = {
  // 开启静态导出，生成纯 HTML/CSS/JS
  output: 'export',
  
  // 禁用 Next.js 自带的图片优化
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
