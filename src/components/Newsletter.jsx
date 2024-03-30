import React from "react";

export default function Newsletter() {
  return (
    <form action="https://formspree.io/f/yourFormID" method="POST">
      <input type="email" name="email" placeholder="Your email" required />
      <button type="submit">Subscribe</button>
    </form>
  );
}
