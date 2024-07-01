import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
      </header>

      <section className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our mission is to provide a comprehensive and reliable source of
              information about UFO sightings in the USA. We aim to document and
              share sightings to help the public stay informed and engaged with
              this fascinating phenomenon.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>The Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We are a group of enthusiasts and researchers dedicated to
              uncovering the truth about UFO sightings. Our team works
              tirelessly to gather, verify, and present the most accurate
              information available.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default About;