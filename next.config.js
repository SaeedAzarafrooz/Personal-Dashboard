/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: { unoptimized: true }
    // images: {
    //     loader: 'custom',
    //     loaderFile: './app/image.js',
    //   },
}

module.exports = nextConfig


//image.js file content

// export default function cloudinaryLoader({ src, width, quality }) {
//     const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
//     return `https://res.cloudinary.com/demo/image/upload/${params.join(
//       ','
//     )}${src}`
//   }


/*
Warning: For production Image Optimization with Next.js, the optional 'sharp' package is strongly recommended. Run 'yarn add sharp', and Next.js will use it automatically for Image Optimization.
Read more: https://nextjs.org/docs/messages/sharp-missing-in-production

Unhandled Runtime Error

Error: Image Optimization using the default loader is not compatible with `{ output: 'export' }`.
  Possible solutions:
    - Remove `{ output: 'export' }` and run "next start" to run server mode including the Image Optimization API.
    - Configure `{ images: { unoptimized: true } }` in `next.config.js` to disable the Image Optimization API.
  Read more: https://nextjs.org/docs/messages/export-image-api
 
 
 Error: "next start" does not work with "output: export" configuration. Use "npx serve@latest out" instead.
 
  */
