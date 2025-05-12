import blogImg1 from '@/assets/blog/images.png'
import blogImg2 from '@/assets/blog/istockphoto-887987150-612x612.jpg'
import blogImg3 from '@/assets/blog/weblog.png'
// src/components/home/BlogPreview.tsx
const posts = [
  { title: 'Top SEO Strategies for 2024', image: blogImg1.src },
  { title: 'How to Boost Social Engagement', image: blogImg2.src },
  { title: 'Building a Brand That Lasts', image: blogImg3.src },
];

export default function BlogPreview() {
  return (
    <section className="py-20 
    ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">From Our Blog</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.title} className="shadow rounded-xl overflow-hidden hover:shadow-xl transition">
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{post.title}</h3>
              </div>
            </div>
          ))}
        </div> 
      </div>
    </section>
  );
}
