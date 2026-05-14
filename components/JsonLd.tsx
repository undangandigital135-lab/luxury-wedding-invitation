interface JsonLdProps {
  weddingDate: string;
  weddingTime: string;
  groomName: string;
  brideName: string;
  location: string;
  address: string;
}

export default function JsonLd({ weddingDate, weddingTime, groomName, brideName, location, address }: JsonLdProps) {
  const startDate = `${weddingDate}T${weddingTime}:00+07:00`;

  const json = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `Pernikahan ${brideName} & ${groomName}`,
    description: `Undangan pernikahan ${brideName} & ${groomName}`,
    startDate,
    endDate: `${weddingDate}T${String(Number(weddingTime.split(".")[0]) + 4).padStart(2, "0")}:${weddingTime.split(".")[1] || "00"}:00+07:00`,
    location: {
      "@type": "Place",
      name: location,
      address: { "@type": "PostalAddress", streetAddress: address },
    },
    organizer: {
      "@type": "Person",
      name: `${groomName} & ${brideName}`,
    },
    performer: `${groomName} & ${brideName}`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
