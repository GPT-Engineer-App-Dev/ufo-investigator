import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">UFO Sightings in the USA</h1>
        <p className="text-lg text-muted-foreground">Explore the unexplained</p>
      </header>

      <section className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Introduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Welcome to our UFO sightings website. Here, you can explore recent
              UFO sightings across the USA, view interesting statistics, and
              learn more about the phenomena.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Sightings</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <strong>March 15, 2023:</strong> Bright light spotted in the sky
                over Nevada.
              </li>
              <li>
                <strong>April 2, 2023:</strong> Unidentified flying object seen
                hovering over Texas.
              </li>
              <li>
                <strong>May 10, 2023:</strong> Strange lights observed in
                California.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <strong>Total Sightings:</strong> 1,234
              </li>
              <li>
                <strong>Most Active State:</strong> California
              </li>
              <li>
                <strong>Most Common Time:</strong> Night
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <footer className="text-center">
        <p>Follow us on social media for the latest updates.</p>
        <p>Contact us at info@ufosightingsusa.com</p>
      </footer>
    </div>
  );
};

export default Index;
