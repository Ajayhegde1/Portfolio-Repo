import { Contact } from "./Contact";

export function ContactBackgroundBlur() {
  return (
    <section className="blurbg h-screen w-screen flex justify-center items-center sticky top-0 z-50">
      <Contact />
    </section>
  );
}
