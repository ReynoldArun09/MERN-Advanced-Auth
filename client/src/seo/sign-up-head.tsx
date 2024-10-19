import { Helmet } from "react-helmet-async";

export default function SignUpHead() {
  return (
    <Helmet>
      <title>Create an Account | MERN Authentication</title>
      <meta
        name="description"
        content="Join our community today. Sign up for a free account and unlock exclusive features and personalized experiences."
      />
      <meta
        name="keywords"
        content="sign up, create account, register, join, new user registration"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.yourapp.com/signup" />
      <meta
        property="og:title"
        content="Create an Account | MERN Authentication"
      />
      <meta
        property="og:description"
        content="Join our community today. Sign up for a free account and unlock exclusive features and personalized experiences."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.yourapp.com/signup" />
      <meta
        property="og:image"
        content="https://www.yourapp.com/images/signup-og.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Create an Account | MERN Authentication"
      />
      <meta
        name="twitter:description"
        content="Join our community today. Sign up for a free account and unlock exclusive features and personalized experiences."
      />
      <meta
        name="twitter:image"
        content="https://www.yourapp.com/images/signup-twitter.jpg"
      />
      <script type="application/ld+json">{`
    {
      "@context": "http://schema.org",
      "@type": "WebPage",
      "name": "Create an Account",
      "description": "Join our community today. Sign up for a free account and unlock exclusive features and personalized experiences.",
      "url": "https://www.yourapp.com/signup"
    }
  `}</script>
    </Helmet>
  );
}
