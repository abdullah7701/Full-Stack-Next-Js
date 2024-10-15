// import { getPost } from "@/lib/data";
import React, { Suspense } from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
// import { headers } from "next/headers";
// import axios from "axios";
const getData = async (slug) => {
  // const headerList = headers();
  // const fullUrl = headerList.get("x-full-url");

  // // Use the full URL as needed
  // console.log(fullUrl);
  // const res = await axios.get(`${fullUrl}/api/blog/${slug}`);

  // if (!res.ok) {
  //   throw new Error("Something went wrong");
  // }
  // console.log("res.data", JSON.stringify(res.data));
  return {
    _id: "66a375287f519cd131cdf9cb",
    title: "Essential Website Features Every E-Commerce Site Must Have In 2024",
    desc: "Creating a website for a brand requires focus. Therefore, the client must focus on customers, their purchasing journeys, and requirements.",
    userId: "667d0693ecd7df6445aaf482",
    slug: "essential-websites-features-1122",
    head: "",
    view_count: "",
    tags: "Shopify developmental services, development company",
    is_published: "true",
    publish_date:
      "Fri Jul 26 2024 00:00:00 GMT+0000 (Coordinated Universal Time)",
    author: "Info Latch",
    excerpt: "",
    content:
      "Brands creating a website for the first time must know the essential features to make the platform more engaging. If the features are absent, the website operates like expensive artwork and does not generate revenue.\r\n\r\nTherefore, the features influence the workability and design of the website. Here are some of the essential elements that aid the customer's journey and keep buyers engaged on the website.  \t\r\n\r\nConcise or Extended Menus\r\nAn ecommerce development company ensures that the website has a simple menu for the users. The creators can place the menu at the top or the side of the website. However, many options are available. A mega menu is a grand display of options with drop-down features and graphic elements.\r\n\r\nOn the other hand, a drop-down menu displays a shortcut to a shopping category or product. The second option is mostly used when the website introduces a new product or reveals discount offers. \r\n\r\nShopify development services understand that website users do not respond to a monotonous tone. Therefore, a customized call to action is necessary on the website. Its strategic placement is necessary to guide the customers through the sales funnel, and the website benefits from increased engagement rates.\r\n\r\nCalls to action \r\nIn addition, website owners must also consider different calls to action. The brand can study the competitor’s website. The feature will provoke customers to purchase from the brand while they learn about its ethical values.\r\nUndoubtedly, the website sells high-quality items on the online store. However, the quality of the pictures matters a lot. If the images look bad, the customer will not engage. Therefore, the brand must upload excellent-quality pictures on the website.\r\n\r\nHigh-quality images\r\nBrands can view the photos from different angles. Depending on the industry, the pictures can present different perspectives. For example, the sellers can upload 360-degree views of watches, jewelry, and personalized items for enhanced engagement on the website. \r\n\r\nFurthermore, websites can link the images with a persuasive call to action. This feature will provide sufficient information about the products, which will motivate customers to purchase them. Finally, customers can also browse a specific product on the website.\r\n\r\nProduct Pages\r\nAn ecommerce development companymust focus on a product page with an extensive list of features. The web page will share the value of the products. Furthermore, it lets the customers identify the items they want to purchase. Here are some tips for creating a powerful product page:\r\n\r\n•\tFirstly, the brand must include sections that feature the top-selling items. They could be bestsellers, discounted items, or exclusive products. It motivates the buyers to keep browsing the website.\r\n•\tSecondly, the products page can showcase item bundles that the customers frequently buy together to save money and enjoy additional benefits.\r\n•\tLastly, the website can make use of conversation rate optimization on the product page. The brand can add a customer reviews action, item recommendations, and pop-up ads.  \r\n•\tFinally, the brand owner can use micro-animations on the website to enhance the user experience. These small-scale interactions include messages, animations, sound effects, and error prompts. They highlight specific areas on the website for buyers to focus on.\r\n\r\nProduct Reviews \r\nShopify developmental serviceshave realized the importance of product reviews. Customer testimonies enhance brand loyalty because they trust reviews from previous buyers. Depending on the website and the brand, the website can be linked to numerous review platforms as well.\r\n\r\nBuyer reviews are an essential element that increases website credibility. At the same time, it also proves that the website has paying buyers. In addition, customer reviews include keywords that increase the SEO ranking on search results.\r\nProduct reviews have the risk of negative comments and criticism of the brand. However, the benefits of the customer testimonies are more than the letdowns.",
    read_time: "5",
    createdAt: "2024-07-26T10:06:32.687Z",
    updatedAt: "2024-07-26T10:06:32.687Z",
    __v: 0,
  };
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  // const post = await getPost(slug);

  return {
    title: "Essential Website Features Every E-Commerce Site Must Have In 2024",
    description: "Creating a website for a brand requires focus. Therefore, the client must focus on customers, their purchasing journeys, and requirements.",
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className={styles.container}>
      {/* {post.featured_image?.data && (
        <div className={styles.imgContainer}>
          <Image
            src={`data:${post.featured_image.contentType};base64,${post.featured_image.data}`}
            alt={post.featured_image.name || post.title || "Image"}
            fill
            className={styles.img}
          />
        </div>
      )} */}
      <div className={styles.imgContainer}>
        <Image
          src="/blog.jpeg"
          alt="Image of blog"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title ?? "Untitled"}</h1>
        <div className={styles.detail}>
          {post.userId && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt
                ? new Date(post.createdAt).toDateString().slice(4, 16)
                : "Unknown"}
            </span>
          </div>
        </div>
        <div className={styles.content}>
          {post.desc ?? "No description available"}
        </div>
        <div className={styles.additionalDetails}>
          {/* <p>
            <strong>Slug:</strong> {post.slug ?? "N/A"}
          </p>
          <p>
            <strong>Head:</strong> {post.head ?? "N/A"}
          </p> */}
          {/* <p>
            <strong>View Count:</strong> {post.view_count ?? "N/A"}
          </p>
          <p>
            <strong>Tags:</strong> {post.tags ?? "N/A"}
          </p>
          <p>
            <strong>Is Published:</strong> {post.is_published ?? "N/A"}
          </p>
          <p>
            <strong>Publish Date:</strong> {post.publish_date ?? "N/A"}
          </p> */}

          {/* <p>
            <strong>Excerpt:</strong> {post.excerpt ?? "N/A"}
          </p> */}
          <p>{post.content ?? "N/A"}</p>
          <p className=" mt-4">
            <strong>Author:</strong> {post.author ?? "N/A"}
          </p>
          {/* <p>
            <strong>Read Time:</strong> {post.read_time ?? "N/A"}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
