import { Link } from "react-router-dom";
import { Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cart = () => {
  // This would be connected to actual cart state management
  const cartItems: any[] = [];
  const subtotal = 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartItemsCount={cartItems.length} />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-8 text-4xl font-bold">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <Card className="text-center py-16">
              <CardContent className="pt-6">
                <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                <CardTitle className="mb-2">Your cart is empty</CardTitle>
                <CardDescription className="mb-6">
                  Add some packages to get started!
                </CardDescription>
                <Link to="/shop">
                  <Button>Browse Packages</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id}>
                    <CardHeader>
                      <div className="flex gap-4">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-accent/20" />
                        <div className="flex-1">
                          <CardTitle className="text-xl">{item.name}</CardTitle>
                          <CardDescription>{item.category}</CardDescription>
                          <p className="mt-2 text-lg font-semibold">${item.price}</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-20">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">${subtotal}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${subtotal}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex-col gap-2">
                    <Button className="w-full" size="lg">
                      Proceed to Checkout
                    </Button>
                    <Link to="/shop" className="w-full">
                      <Button variant="outline" className="w-full">
                        Continue Shopping
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
