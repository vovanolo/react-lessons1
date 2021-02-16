import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import Section from "./Section";
import Product from "./Product";

export default function App() {
  return (
    <>
      <Menu
        firsList="first list"
        secondList="second list"
        thirdList="third list"
      />
      <Header title="this is a header" />
      <Section name="Останні переглянуті товари">
        <Product productName="asus laptop" productPrice={2000} />
        <Product productName="hp laptop" productPrice={3000} />
        <Product productName="acer laptop" productPrice={4000} />
      </Section>
      <Section name="Більше товарів для вибору">
        <Product productName="asus laptop" productPrice={2000} />
        <Product productName="hp laptop" productPrice={3000} />
        <Product productName="acer laptop" productPrice={4000} />
      </Section>
      <Section name="Рекомендації на основі ваших переглядів">
        <Product productName="asus laptop" productPrice={2000} />
        <Product productName="hp laptop" productPrice={3000} />
        <Product productName="acer laptop" productPrice={4000} />
      </Section>
    </>
  );
}
