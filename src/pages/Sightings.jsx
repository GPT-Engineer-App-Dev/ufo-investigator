import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Sightings = () => {
  const [search, setSearch] = useState("");

  const sightings = [
    { date: "March 15, 2023", location: "Nevada", description: "Bright light spotted in the sky." },
    { date: "April 2, 2023", location: "Texas", description: "Unidentified flying object seen hovering." },
    { date: "May 10, 2023", location: "California", description: "Strange lights observed." },
  ];

  const filteredSightings = sightings.filter(
    (sighting) =>
      sighting.location.toLowerCase().includes(search.toLowerCase()) ||
      sighting.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">All UFO Sightings</h1>
      </header>

      <div className="flex justify-center">
        <Input
          type="text"
          placeholder="Search sightings..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />
      </div>

      <section className="space-y-4">
        {filteredSightings.map((sighting, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{sighting.date}</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Location:</strong> {sighting.location}</p>
              <p><strong>Description:</strong> {sighting.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Sightings;