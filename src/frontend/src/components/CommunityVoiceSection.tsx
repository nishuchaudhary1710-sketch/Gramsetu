import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  LogIn,
  MapPin,
  MessageSquarePlus,
  ThumbsUp,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import {
  PostCategory,
  useGetPostsByCategory,
  useIsCallerAdmin,
  useMarkPostResolved,
  useSubmitCommunityPost,
  useUpvotePost,
} from "../hooks/useQueries";

const postCategories = [
  { label: "सभी", value: null },
  { label: "बुनियादी ढांचा", value: PostCategory.infrastructure },
  { label: "स्वास्थ्य", value: PostCategory.health },
  { label: "शिक्षा", value: PostCategory.education },
  { label: "महिला सशक्तीकरण", value: PostCategory.womenEmpowerment },
  { label: "कृषि", value: PostCategory.agriculture },
  { label: "डिजिटल पहुंच", value: PostCategory.digitalAccess },
];

const categoryLabels: Record<string, string> = {
  infrastructure: "बुनियादी ढांचा",
  health: "स्वास्थ्य",
  education: "शिक्षा",
  womenEmpowerment: "महिला सशक्तीकरण",
  agriculture: "कृषि",
  digitalAccess: "डिजिटल पहुंच",
};

const categoryColors: Record<string, string> = {
  infrastructure: "bg-gray-100 text-gray-700",
  health: "bg-red-100 text-red-700",
  education: "bg-blue-100 text-blue-700",
  womenEmpowerment: "bg-pink-100 text-pink-700",
  agriculture: "bg-forest-100 text-forest-700",
  digitalAccess: "bg-purple-100 text-purple-700",
};

const staticPosts = [
  {
    id: 1n,
    title: "रामपुर गांव में पक्की सड़क की जरूरत",
    description:
      "रामपुर से अलवर को जोड़ने वाली मुख्य सड़क मानसून में बहुत खराब हो जाती है। बच्चे सुरक्षित रूप से स्कूल नहीं पहुंच पाते।",
    location: "रामपुर, अलवर, राजस्थान",
    category: PostCategory.infrastructure,
    upvotes: 42n,
    resolved: false,
  },
  {
    id: 2n,
    title: "प्राथमिक स्वास्थ्य केंद्र में डॉक्टर नहीं",
    description:
      "बावला ब्लॉक के हमारे PHC में 8 महीने से कोई स्थायी डॉक्टर नहीं है। ग्रामीण साधारण इलाज के लिए 30 किमी दूर जाते हैं।",
    location: "बावला, अहमदाबाद, गुजरात",
    category: PostCategory.health,
    upvotes: 67n,
    resolved: false,
  },
  {
    id: 3n,
    title: "कॉमन सर्विस सेंटर का इंटरनेट बहुत धीमा",
    description:
      "हमारे गांव के CSC में पिछले 3 महीने से इंटरनेट बहुत धीमा है। ऑनलाइन योजना आवेदन पूरा नहीं हो पाता।",
    location: "केशोपुर, गोरखपुर, उत्तर प्रदेश",
    category: PostCategory.digitalAccess,
    upvotes: 28n,
    resolved: true,
  },
  {
    id: 4n,
    title: "4 महीने से MGNREGA मजदूरी नहीं मिली",
    description:
      "मंडलोई गांव के 120 से अधिक मजदूरों को जून में किए गए काम की मजदूरी नहीं मिली है। ब्लॉक कार्यालय जवाब नहीं दे रहा।",
    location: "मंडलोई, देवास, मध्य प्रदेश",
    category: PostCategory.agriculture,
    upvotes: 89n,
    resolved: false,
  },
];

export default function CommunityVoiceSection() {
  const { identity, login } = useInternetIdentity();
  const [activeCategory, setActiveCategory] = useState<PostCategory | null>(
    null,
  );
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    category: "",
  });

  const { data: posts, isLoading } = useGetPostsByCategory(activeCategory);
  const { data: isAdmin } = useIsCallerAdmin();
  const submitPost = useSubmitCommunityPost();
  const upvotePost = useUpvotePost();
  const markResolved = useMarkPostResolved();

  const displayPosts = posts && posts.length > 0 ? posts : staticPosts;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.description ||
      !formData.location ||
      !formData.category
    ) {
      toast.error("कृपया सभी फ़ील्ड भरें");
      return;
    }
    try {
      await submitPost.mutateAsync({
        title: formData.title,
        description: formData.description,
        location: formData.location,
        category: formData.category as PostCategory,
      });
      toast.success("आपकी आवाज़ सुनी गई। समस्या सफलतापूर्वक जमा हुई!");
      setFormData({ title: "", description: "", location: "", category: "" });
    } catch {
      toast.error("जमा करने में विफल। कृपया पुनः प्रयास करें।");
    }
  };

  return (
    <section
      id="community"
      className="py-20 bg-gradient-to-b from-white to-saffron-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <Badge className="bg-saffron-100 text-saffron-700 border-saffron-200 mb-4">
            आवाज़ उठाओ
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            आवाज़ उठाओ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            अपने समुदाय की समस्याएं, बुनियादी ढांचे की जरूरतें, या योजनाओं तक पहुंच के मुद्दे
            साझा करें। आवाज़ को बुलंद करने के लिए अपवोट करें। जमीनी स्तर से जवाबदेही बनाएं।
          </p>
        </motion.div>

        {/* Section photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <img
            src="/images/awaj-uthao-community.dim_800x500.jpg"
            alt="ग्रामीण समुदाय एकत्रित होकर अपनी आवाज़ उठाते हुए"
            className="w-full max-h-72 object-cover rounded-2xl shadow-lg mx-auto"
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Post Form */}
          <div className="lg:col-span-1">
            <Card className="border-border sticky top-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2">
                  <MessageSquarePlus className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-bold text-foreground">
                    समस्या साझा करें
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground">अपनी बात कहें</p>
              </CardHeader>
              <CardContent>
                {identity ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label
                        htmlFor="issue-title"
                        className="text-xs font-semibold text-foreground mb-1.5 block"
                      >
                        समस्या का शीर्षक *
                      </label>
                      <Input
                        id="issue-title"
                        data-ocid="community.post.input"
                        placeholder="एक पंक्ति में समस्या बताएं..."
                        value={formData.title}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            title: e.target.value,
                          }))
                        }
                        className="text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="issue-desc"
                        className="text-xs font-semibold text-foreground mb-1.5 block"
                      >
                        विवरण *
                      </label>
                      <Textarea
                        id="issue-desc"
                        data-ocid="community.post.textarea"
                        placeholder="समस्या के बारे में अधिक जानकारी दें..."
                        value={formData.description}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            description: e.target.value,
                          }))
                        }
                        rows={3}
                        className="text-sm resize-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="issue-location"
                        className="text-xs font-semibold text-foreground mb-1.5 block"
                      >
                        गांव/जिला *
                      </label>
                      <Input
                        id="issue-location"
                        data-ocid="community.location.input"
                        placeholder="गांव, जिला, राज्य"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            location: e.target.value,
                          }))
                        }
                        className="text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="issue-category"
                        className="text-xs font-semibold text-foreground mb-1.5 block"
                      >
                        श्रेणी *
                      </label>
                      <Select
                        value={formData.category}
                        onValueChange={(val) =>
                          setFormData((prev) => ({ ...prev, category: val }))
                        }
                      >
                        <SelectTrigger
                          id="issue-category"
                          data-ocid="community.category.select"
                          className="text-sm"
                        >
                          <SelectValue placeholder="श्रेणी चुनें..." />
                        </SelectTrigger>
                        <SelectContent>
                          {postCategories.slice(1).map((cat) => (
                            <SelectItem
                              key={String(cat.value)}
                              value={String(cat.value)}
                            >
                              {cat.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      type="submit"
                      data-ocid="community.submit_button"
                      disabled={submitPost.isPending}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      {submitPost.isPending
                        ? "जमा हो रहा है..."
                        : "समस्या जमा करें"}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <LogIn className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm font-medium text-foreground mb-1">
                      समस्या पोस्ट करने के लिए लॉगिन करें
                    </p>
                    <p className="text-xs text-muted-foreground mb-4">
                      आवाज़ उठाने के लिए लॉगिन करें
                    </p>
                    <Button
                      type="button"
                      onClick={login}
                      size="sm"
                      data-ocid="community.login.button"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      इंटरनेट आइडेंटिटी से लॉगिन करें
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Posts List */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-2 mb-6">
              {postCategories.map((cat) => (
                <button
                  type="button"
                  key={String(cat.value)}
                  data-ocid="community.filter.tab"
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors border ${
                    activeCategory === cat.value
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-white text-foreground border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {isLoading ? (
              <div
                className="flex flex-col gap-4"
                data-ocid="community.loading_state"
              >
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-32 rounded-xl" />
                ))}
              </div>
            ) : displayPosts.length === 0 ? (
              <div
                data-ocid="community.empty_state"
                className="text-center py-16 border-2 border-dashed border-border rounded-2xl"
              >
                <MessageSquarePlus className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-foreground font-medium">अभी कोई पोस्ट नहीं</p>
                <p className="text-sm text-muted-foreground">
                  अपने समुदाय में पहली समस्या उठाएं
                </p>
              </div>
            ) : (
              <AnimatePresence mode="popLayout">
                <div className="flex flex-col gap-4">
                  {displayPosts.map((post, i) => (
                    <motion.div
                      key={String(post.id)}
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      data-ocid={`community.item.${i + 1}`}
                    >
                      <Card className="border-border bg-white hover:shadow-md transition-shadow">
                        <CardContent className="p-5">
                          <div className="flex items-start gap-3">
                            <div className="flex flex-col items-center gap-1 flex-shrink-0">
                              {/* Serial number badge */}
                              <span className="w-6 h-6 rounded-full bg-saffron-500 text-white text-xs font-bold flex items-center justify-center mb-1">
                                {i + 1}
                              </span>
                              <button
                                type="button"
                                data-ocid={`community.upvote.button.${i + 1}`}
                                onClick={() => upvotePost.mutate(post.id)}
                                className="flex flex-col items-center gap-0.5 p-2 rounded-xl hover:bg-saffron-50 transition-colors group"
                              >
                                <ThumbsUp className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                <span className="text-xs font-bold text-foreground">
                                  {Number(post.upvotes)}
                                </span>
                              </button>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <h3 className="font-semibold text-sm text-foreground">
                                  {post.title}
                                </h3>
                                {post.resolved && (
                                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-forest-100 text-forest-700 text-xs font-medium">
                                    <CheckCircle2 className="w-3 h-3" /> हल हुआ
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-foreground/70 line-clamp-2 mb-2">
                                {post.description}
                              </p>
                              <div className="flex items-center justify-between gap-2 flex-wrap">
                                <div className="flex items-center gap-2">
                                  <span
                                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                      categoryColors[post.category] ||
                                      "bg-muted text-muted-foreground"
                                    }`}
                                  >
                                    {categoryLabels[post.category] ||
                                      post.category}
                                  </span>
                                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <MapPin className="w-3 h-3" />
                                    {post.location}
                                  </span>
                                </div>
                                {isAdmin && !post.resolved && (
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => markResolved.mutate(post.id)}
                                    className="text-xs border-forest-300 text-forest-700 hover:bg-forest-50 h-6 px-2"
                                  >
                                    हल चिह्नित करें
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
