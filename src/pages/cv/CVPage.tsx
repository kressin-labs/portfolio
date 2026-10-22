import Container from "@/components/Container";

export default function CVPage() {

  return (
    <Container>
      {/* Header/Contact Information */}

      {/* Languages */}
      <section>
        <h2 className="text-3xl font-bold text-indigo-700 mb-4 border-b pb-2">Languages</h2>
        <div className="ml-2 text-gray-800">
          <p>German (Native)</p>
          <p>English (Fluent)</p>
        </div>
      </section>
    </Container>
  );
}