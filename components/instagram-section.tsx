import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, ExternalLinkIcon, Instagram } from "lucide-react"
import Link from "next/link"

const url = "https://graph.instagram.com/me/media?access_token=" +
  process.env.INSTA_TOKEN +
  "&fields=media_url,media_type,caption,permalink,timestamp,thumbnail_url,id,username,children{media_url}&limit=8";

export interface InstagramMediaItem {
  id: string;
  media_url: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  caption?: string;
  permalink: string;
  timestamp: string;
  username: string;
  thumbnail_url?: string;
  children?: {
    data: {
      id: string;
      media_url: string;
    }[];
  };
}

export interface InstagramApiResponse {
  data: InstagramMediaItem[];
}


const getPosts = async (): Promise<InstagramMediaItem[]> => {
  const res = await fetch(url, {
    next: {
      revalidate:
        60 * 60 * 2, // 2 hours
    }
  });
  const { data }: InstagramApiResponse = await res.json();

  return data;
}

export async function InstagramSection() {

  const posts = await getPosts();

  if (!posts) return null;
  return (
    <section className="py-20 bg-[#e5d9ce]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#60452a] mb-6">Últimos Posts</h2>
          <p className="text-xl text-[#404435] max-w-4xl mx-auto">
            Acompanhe conteúdos sobre bem-estar emocional, autoconhecimento e saúde mental
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.slice(0, 3).map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <Link href={post.permalink} target="_blank">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={post.thumbnail_url || post.media_url || "/placeholder.svg"}
                    alt={post.caption ?? "Post do Instagram"}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#60452a] mb-3 text-lg truncate">
                    {post.caption ? post.caption.substring(0, 50) + "..." : "Ver post no Instagram"}
                  </h3>
                  <p className="text-[#404435] flex items-center justify-between text-sm leading-relaxed">
                    Clique para ver no Instagram
                    <ExternalLinkIcon className="inline-block w-4 h-4 ml-1" />
                  </p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="https://instagram.com/psidaramarques"
            target="_blank"
            rel="noopener noreferrer"
            className="border-[#60452a] w-max text-white bg-[#60452a] hover:bg-[#7a5535] hover:border-[#7a5535] px-8 py-3 rounded-full font-semibold flex items-center gap-3 mx-auto"
          >
            <Instagram className="w-5 h-5" />
            Ver mais no Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}