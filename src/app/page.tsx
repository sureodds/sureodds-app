"use client";

import ForecastCard from "@/components/ForecastCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SearchForm from "@/components/SearchForm";

export default function Home() {
  return (
    <section className="">
      <MaxWidthWrapper className="mb-10">
        <SearchForm />
        <section className="grid grid-cols-3 gap-6">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <ForecastCard key={item} />
          ))}
        </section>
      </MaxWidthWrapper>
    </section>
  );
}
