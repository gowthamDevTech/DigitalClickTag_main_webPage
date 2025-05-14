import Navbar from "@/components/common/Navbar";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Digital Click Tag",
  description: "Digital Click Tag is an IT services company specializing in digital marketing, web development, and mobile app development to power your business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>IT Company Website</title>
        <link rel="stylesheet" href="/home3publicfiles/css/style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" /> */}
        <link rel="icon" href="./images/image.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" 
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" 
          crossOrigin="anonymous" 
        />
        <link 
          rel="stylesheet" 
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" 
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" 
          crossOrigin="anonymous" 
        />
        <link href="/home3publicfiles/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/home3publicfiles/lib/ionicons/css/ionicons.min.css" rel="stylesheet" />
        <link href="/home3publicfiles/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="/home3publicfiles/lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        {/* <script src="/home3publicfiles/js/main.js" /> */}
        <script src="lib/jquery/jquery.min.js"></script>
  <script src="/home3publicfiles/lib/jquery/jquery-migrate.min.js"></script>
  <script src="/home3publicfiles/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="/home3publicfiles/lib/easing/easing.min.js"></script>
  <script src="/home3publicfiles/lib/waypoints/waypoints.min.js"></script>
  <script src="/home3publicfiles/lib/counterup/counterup.min.js"></script>
  <script src="/home3publicfiles/lib/owlcarousel/owl.carousel.min.js"></script>
  <script src="/home3publicfiles/lib/lightbox/js/lightbox.min.js"></script>

      </head>
      <body>

        {children}
      </body>
    </html>
  );
}
