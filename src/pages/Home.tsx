import { Link } from "react-router-dom";
import { ArrowRight, Package, Zap, Target, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, categories } from "@/data/products";

const Home = () => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4" variant="secondary">
                Digital Products for Modern Entrepreneurs
              </Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                From <span className="text-primary">"I don't know"</span> to{" "}
                <span className="text-primary">"I can do it now"</span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Get instant, actionable packages that solve your business problems. 
                No fluff. Just results.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link to="/shop">
                  <Button size="lg" className="w-full sm:w-auto group">
                    Explore Packages
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  See How It Works
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Popular Packages</h2>
              <p className="text-lg text-muted-foreground">
                Start with these proven solutions
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="flex flex-col transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-accent/20" />
                    <Badge className="mb-2 w-fit">{product.category}</Badge>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <CardDescription>{product.shortDescription}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="text-3xl font-bold text-primary">${product.price}</div>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/product/${product.id}`} className="w-full">
                      <Button className="w-full" variant="outline">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/shop">
                <Button variant="outline" size="lg">
                  View All Packages
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">How It Works</h2>
              <p className="text-lg text-muted-foreground">
                Three simple steps to transform your business
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Package className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">1. Choose Your Package</h3>
                <p className="text-muted-foreground">
                  Find the perfect solution for your specific business problem
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">2. Apply the A.I.kido Method</h3>
                <p className="text-muted-foreground">
                  Follow our proven frameworks and AI-powered tools
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">3. Achieve Results</h3>
                <p className="text-muted-foreground">
                  Implement immediately and see measurable outcomes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Browse by Category</h2>
              <p className="text-lg text-muted-foreground">
                Find packages tailored to your needs
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.filter(c => c.id !== "all").map((category) => (
                <Link key={category.id} to={`/shop?category=${category.id}`}>
                  <Card className="transition-all hover:shadow-lg hover:scale-105 cursor-pointer">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Package className="h-5 w-5 text-primary" />
                        </div>
                        {category.name}
                      </CardTitle>
                      <CardDescription>
                        {products.filter(p => p.category === category.id).length} packages available
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Trusted by Entrepreneurs</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Sarah Chen",
                  role: "Founder, TechStart",
                  text: "The AI Marketing package helped me launch my first campaign in 48 hours. Results were immediate!"
                },
                {
                  name: "Marcus Rodriguez",
                  role: "Freelance Consultant",
                  text: "Finally, practical tools that actually work. No theory, just actionable steps."
                },
                {
                  name: "Emma Thompson",
                  role: "Content Creator",
                  text: "I went from posting once a week to daily content. The toolkit is a game-changer."
                }
              ].map((testimonial, i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <CardDescription className="text-base">"{testimonial.text}"</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex-col items-start">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mb-8 text-lg opacity-90">
              Join thousands of entrepreneurs transforming their businesses
            </p>
            <Link to="/shop">
              <Button size="lg" variant="secondary" className="group">
                Browse All Packages
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
