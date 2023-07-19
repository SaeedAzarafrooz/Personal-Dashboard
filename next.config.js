/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        loader: 'custom',
        loaderFile: './app/image.js',
      },
}

module.exports = nextConfig


//image.js file content

// export default function cloudinaryLoader({ src, width, quality }) {
//     const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
//     return `https://res.cloudinary.com/demo/image/upload/${params.join(
//       ','
//     )}${src}`
//   }