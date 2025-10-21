import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const { addItem } = useCart();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
            <Link to="/shop">
              <Button>Back to Shop</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link to="/shop">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Button>
          </Link>

          {/* Product Header */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Image */}
            <div>
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-accent/20" />
            </div>

            {/* Product Info */}
            <div>
              <Badge className="mb-4">{product.category}</Badge>
              <h1 className="mb-4 text-4xl font-bold">{product.name}</h1>
              <p className="mb-6 text-lg text-muted-foreground">
                {product.shortDescription}
              </p>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-primary">${product.price}</div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  Buy Now
                </Button>
              </div>

              <Separator className="my-6" />

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  ✓ Instant download access
                </p>
                <p className="text-sm text-muted-foreground">
                  ✓ Lifetime updates included
                </p>
                <p className="text-sm text-muted-foreground">
                  ✓ 30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="mt-16">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="for-who">For Who?</TabsTrigger>
                <TabsTrigger value="includes">What's Included</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What Problem Does It Solve?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.whatProblem.map((problem, i) => (
                        <li key={i} className="flex gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="for-who" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Who Is This Package For?</CardTitle>
                    <CardDescription>
                      This package is perfect for:
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.whoIsItFor.map((person, i) => (
                        <li key={i} className="flex gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{person}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="includes" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What Exactly Do You Get?</CardTitle>
                    <CardDescription>
                      Everything you need to get started:
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.whatYouGet.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="requirements" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Required Tools</CardTitle>
                    <CardDescription>
                      You'll need access to these tools:
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.requiredTools.map((tool, i) => (
                        <li key={i} className="flex gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-bold">You Might Also Like</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 3)
                .map((relatedProduct) => (
                  <Card key={relatedProduct.id} className="flex flex-col">
                    <CardHeader>
                      <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-accent/20" />
                      <Badge className="mb-2 w-fit">{relatedProduct.category}</Badge>
                      <CardTitle className="text-xl">{relatedProduct.name}</CardTitle>
                      <CardDescription>{relatedProduct.shortDescription}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="text-2xl font-bold text-primary">${relatedProduct.price}</div>
                    </CardContent>
                    <CardContent>
                      <Link to={`/product/${relatedProduct.id}`}>
                        <Button className="w-full" variant="outline">
                          View Details
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
